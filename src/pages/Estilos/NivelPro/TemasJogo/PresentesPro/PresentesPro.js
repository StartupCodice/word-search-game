import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Modal from "react-native-modal";
import { createGame } from "hunting-words";
import randomcolor from "randomcolor";
import styles from "./style";
import { scale } from "react-native-size-matters";
import MoedasComponent from "../../../../../components/storage";
import NiveisPro from "../../../../../components/storageNivelPro";

import {
  GestureDetector,
  PanGestureHandler,
  Gesture,
} from "react-native-gesture-handler";

const CELL_SIZE = Math.floor(220 * 0.1);
const CELL_PADDING = Math.floor(CELL_SIZE * 0.1);

const Cell = React.memo(({ letter, selected }) => (
  <View
    style={[
      styles.cell,
      letter.isSelected && styles.selected,
      selected && styles.selected,
    ]}
  >
    <Text style={styles.cellText}>{letter.letter}</Text>
  </View>
));

export default function PresentesPro({ navigation, rows = 12, cols = 12 }) {
  const { presentes, addPresentes } = NiveisPro();

  const [palavras, setPalavras] = useState([]);
  const [board, setBoard] = useState({
    game: new createGame(12, 12, []),
  });
  const [cores, setCores] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [isModalVisible, setModalVisible] = useState(false);
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [numDicasUsadas, setNumDicasUsadas] = useState(0);
  const [hintsExhausted, setHintsExhausted] = useState(false);
  const [columns, setColumns] = useState([]);
  const { moedas, adicionarMoedas } = MoedasComponent();
  const [moedasGanhas, setMoedasGanhas] = useState(0);
  const [currentCell, setCurrentCell] = useState(null);
  const [initialCell, setInitialCell] = useState(null);
  const [state, setState] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    gestureType: null,
  });

  const isMountedRef = useRef(true);

  const selectRandomWords = (totalWords, numWords) => {
    const selectedWords = [];
    const allWords = [...totalWords];

    while (selectedWords.length < numWords && allWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * allWords.length);
      selectedWords.push(allWords.splice(randomIndex, 1)[0]);
    }

    return selectedWords;
  };

  const { width, height } = Dimensions.get("screen");

  const mostrarDica = () => {
    if (numDicasUsadas < 5) {
      const palavrasNaoEncontradas = palavras.filter(
        (palavra) => !palavra.found
      );

      if (palavrasNaoEncontradas.length > 0) {
        const indiceAleatorio = Math.floor(
          Math.random() * palavrasNaoEncontradas.length
        );
        const palavraAleatoria = palavrasNaoEncontradas[indiceAleatorio];
        const novoTabuleiro = { ...board.game };
        const novasPalavras = [...palavras];

        // seleciona as letras correspondentes à palavra aleatória
        columns.forEach((column) => {
          if (column.word[0] === palavraAleatoria.name) {
            let row = column.row;
            let col = column.column;
            setCurrentCell({ row, col });
            novoTabuleiro.board[column.row][column.column].setIsSelected(true);
            if (!isCellSelected(row, col)) {
              setSelectedCells((prevCells) => [...prevCells, { row, col }]);
            }
          }
        });

        // atualiza a state do board
        setBoard({ game: novoTabuleiro });

        // muda o fundo da palavra encontrada
        novasPalavras.forEach((palavra) => {
          if (palavra.name === palavraAleatoria.name) {
            palavra.found = true;
          }
        });

        // atualiza a state de palavras apenas se houve alterações
        setPalavras([...novasPalavras]);
        userWin();
        setNumDicasUsadas(numDicasUsadas + 1);
      } else {
        setHintsExhausted(true);
      }
    } else {
      setHintsExhausted(true);
    }
  };

  const fecharModalDicasEsgotadas = () => {
    setHintsExhausted(false);
  };

  const buildColumnsArray = () => {
    const columnsArray = [];
    board.game.board.forEach((row) => {
      row.forEach((column) => {
        columnsArray.push(column);
      });
    });
    setColumns(columnsArray);
  };

  useEffect(() => {
    buildColumnsArray();
  }, [board.game]);

  const fetchData = () => {
    const palavrasOriginais = [
      { name: "NATAL", found: false },
      { name: "FLOCO", found: false },
      { name: "ALEGRIA", found: false },
      { name: "PAZ", found: false },
      { name: "AMOR", found: false },
      { name: "TRADIÇAO", found: false },
      { name: "GRATO", found: false },
      { name: "BRILHO", found: false },
      { name: "LUZES", found: false },
      { name: "PRESENTE", found: false },
      { name: "CEIA", found: false },
      { name: "ARVORE", found: false },
      { name: "CANÇAO", found: false },
      { name: "PAPAI", found: false },
      { name: "MAGIA", found: false },
      { name: "RENOS", found: false },
      { name: "BISCOITO", found: false },
      { name: "DOCES", found: false },
      { name: "FITAS", found: false },
    ];

    if (isMountedRef.current) {
      const palavrasEscolhidas = selectRandomWords(palavrasOriginais, 9);
      setPalavras(palavrasEscolhidas);

      const palavrasJogo = palavrasEscolhidas.map((palavra) => palavra.name);
      setBoard({ game: new createGame(12, 12, palavrasJogo) });

      const coresAleatorias = palavrasEscolhidas.map(() => randomcolor());
      setCores(coresAleatorias);

      setStartTime(new Date());
      setModalVisible(false);
      setTempoDecorrido(0);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  function userWin() {
    const isWin = palavras.every((palavra) => palavra.found === true);

    if (isWin) {
      mostrarResultado();
    }
  }

  const mostrarResultado = () => {
    const endTime = new Date();
    const tempoDecorrido = (endTime - startTime) / 1000;

    const minutos = Math.floor(tempoDecorrido / 60);
    const segundos = Math.floor(tempoDecorrido % 60);

    const tempoFormatado = `${minutos} min ${segundos} seg`;

    adicionarMoedas(86);
    setMoedasGanhas(86);

    let level = parseInt(presentes) + 1;
    if (presentes < 30) addPresentes(level.toString());

    setModalVisible(true);
    setTempoDecorrido(tempoFormatado);
  };

  const reiniciarJogo = () => {
    const palavrasOriginais = [
      { name: "NATAL", found: false },
      { name: "FLOCO", found: false },
      { name: "ALEGRIA", found: false },
      { name: "PAZ", found: false },
      { name: "AMOR", found: false },
      { name: "TRADIÇAO", found: false },
      { name: "GRATO", found: false },
      { name: "BRILHO", found: false },
      { name: "LUZES", found: false },
      { name: "PRESENTE", found: false },
      { name: "CEIA", found: false },
      { name: "ARVORE", found: false },
      { name: "CANÇAO", found: false },
      { name: "PAPAI", found: false },
      { name: "MAGIA", found: false },
      { name: "RENOS", found: false },
      { name: "BISCOITO", found: false },
      { name: "DOCES", found: false },
      { name: "FITAS", found: false },
    ];

    const palavrasEscolhidas = selectRandomWords(palavrasOriginais, 9);
    setPalavras(palavrasEscolhidas);

    const palavrasJogo = palavrasEscolhidas.map((palavra) => palavra.name);
    setBoard({ game: new createGame(12, 12, palavrasJogo) });

    const coresAleatorias = palavrasEscolhidas.map(() => randomcolor());
    setCores(coresAleatorias);

    setStartTime(new Date());
    setModalVisible(false);
    setTempoDecorrido(0);
    setNumDicasUsadas(0);
    setHintsExhausted(false);
    setColumns([]);
    setCurrentCell(null);
    setSelectedCells([]);
  };

  const closeModal = () => {
    reiniciarJogo();
  };

  const [selectedCells, setSelectedCells] = useState([]);
  const panRef = useRef(null);

  const isCellSelected = useCallback(
    (row, col) =>
      selectedCells.some((cell) => cell.row === row && cell.col === col),
    [selectedCells]
  );

  // const onGestureEvent = (event) => {
  //   const { x, y } = event.nativeEvent;
  //   const row = Math.floor(y / scale(CELL_SIZE));
  //   const col = Math.floor(x / scale(CELL_SIZE));

  //   if (!initialCell) {
  //     setInitialCell({ row, col });
  //   }

  //   if (isAligned(initialCell, { row, col })) {
  //     setCurrentCell({ row, col });
  //     if (!isCellSelected(row, col)) {
  //       setSelectedCells((prevCells) => [...prevCells, { row, col }]);
  //     }
  //   }
  // };

  const onGestureEvent = (event) => {
    const { x, y } = event.nativeEvent;

    const widthCell = (width * 0.9) / 12;
    const heightCell = (height * 0.6) / 12;

    const row = Math.floor(y / heightCell);
    const col = Math.floor(x / widthCell);

    const index = row * 12 + col;
    // setSelected((prev) => [...prev, index]);

    // if (selecteds.includes(index)) {
    //   return false;
    // } else {
    //   setSelected((prev) => [...prev, index]);
    // }
    console.log(index, "INDEX");
    // setSelected((prev) => [...prev, index]);

    // console.log("row:", row, "col:", col);

    // console.log(initialCell, "INITIAL");
    if (!initialCell) {
      setInitialCell({ row, col });
      setSelected((prev) => [...prev, index]);
    }

    if (isAligned(initialCell, { row, col })) {
      // setCurrentCell({ row, col });
      // if (!isCellSelected(row, col)) {
      setSelected((prev) => [...prev, index]);
      // setSelectedCells((prevCells) => [...prevCells, { row, col }]);
      // }
    }
  };

  const onHandlerStateChange = (event, item) => {
    let letterSelected = "";

    const { x, y } = event.nativeEvent;

    const widthCell = (width * 0.9) / 12;
    const heightCell = (height * 0.6) / 12;

    const row = Math.floor(y / heightCell);
    const col = Math.floor(x / widthCell);

    const index = row * 12 + col;

    selectedCells.forEach((cell) => {
      if (isAligned(initialCell, cell)) {
        board.game.board.forEach((row) => {
          row.forEach((letter) => {
            if (cell.col === letter.column && cell.row === letter.row) {
              if (!letter.isSelected) letterSelected += letter.letter;
            }
          });
        });
      }
    });

    let game = board.game;
    game.board.forEach((row) => {
      row.forEach((column) => {
        if (!column.isSelected) {
          if (column.word[0] === letterSelected) {
            game.board[column.row][column.column].setIsSelected(true);
          }
        }
      });
    });

    palavras.forEach((palavra) => {
      if (palavra.name === letterSelected) {
        palavra.found = true;
      }
    });

    setBoard({ game });
    setSelectedCells([]);
    setCurrentCell(null);
    setInitialCell(null);

    setPalavras([...palavras]);
    userWin();
  };

  const isAligned = (cell1, cell2) => {
    if (!cell1 || !cell2) return false;

    const rowDiff = Math.abs(cell1.row - cell2.row);
    const colDiff = Math.abs(cell1.col - cell2.col);

    return (
      rowDiff === colDiff || cell1.row === cell2.row || cell1.col === cell2.col
    );
  };

  const widthCell = (width * 0.9) / 12;
  const heightCell = (height * 0.6) / 12;

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .onStart(({ x, y }) => {
          const row = Math.floor(y / heightCell);
          const col = Math.floor(x / widthCell);

          if (!initialCell) {
            setInitialCell({ row, col });
          }
          if (isAligned(initialCell, { row, col })) {
            setSelectedCells((prevCells) => [...prevCells, { row, col }]);
          }
        })
        .onUpdate(({ x, y }) => {
          const row = Math.floor(y / heightCell);
          const col = Math.floor(x / widthCell);

          if (!isCellSelected(row, col)) {
            if (isAligned(initialCell, { row, col })) {
              setSelectedCells((prevCells) => [...prevCells, { row, col }]);
            }
          }
        })
        .onFinalize(() => {
          let letterSelected = "";

          selectedCells.forEach((cell) => {
            if (isAligned(initialCell, cell)) {
              board.game.board.forEach((row) => {
                row.forEach((letter) => {
                  if (cell.col === letter.column && cell.row === letter.row) {
                    if (!letter.isSelected) letterSelected += letter.letter;
                  }
                });
              });
            }
          });

          let game = board.game;
          game.board.forEach((row) => {
            row.forEach((column) => {
              if (!column.isSelected) {
                if (column.word[0] === letterSelected) {
                  game.board[column.row][column.column].setIsSelected(true);
                }
              }
            });
          });

          palavras.forEach((palavra) => {
            if (palavra.name === letterSelected) {
              palavra.found = true;
            }
          });

          setBoard({ game });
          setSelectedCells([]);
          setCurrentCell(null);
          setInitialCell(null);

          setPalavras([...palavras]);
          userWin();
        })
        .shouldCancelWhenOutside(true),
    [selectedCells, initialCell, isCellSelected, isAligned]
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../../../../assets/templatejogo.jpg")}
        style={styles.imageBackground}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            marginBottom: 20,
          }}
        >
          <Ionicons
            style={styles.button}
            name="arrow-back"
            size={40}
            color="white"
            onPress={() => navigation.navigate("NivelPro")}
          />

          <View style={styles.moedasContainer}>
            <View style={styles.IconMoeda}></View>
            <Text style={styles.moedasText}>{moedas}</Text>
          </View>
          <TouchableOpacity onPress={mostrarDica}>
            <ImageBackground
              source={require("./../../../../../assets/chapeu.png")}
              style={styles.Dica}
            >
              <Text style={styles.dicaNumber}>{5 - numDicasUsadas}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.cacaContainer}> */}
        <View style={styles.retangulo}>
          {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
          {/* <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
            ref={panRef}
            minDist={0}
            minVelocity={1}
            enabled={true}
            shouldCancelWhenOutside={false}
            runOnJS={true}
            minPointers={1}
          > */}
          <GestureDetector gesture={gesture}>
            <FlatList
              data={board.game.board}
              keyExtractor={(_, i) => i.toString()}
              scrollEnabled={false}
              renderItem={({ index, item }) => {
                return (
                  <View style={[styles.row]}>
                    {item.map((letter, index) => (
                      <Cell
                        key={`cell-${letter.row}-${letter.column}`}
                        letter={letter}
                        selected={isCellSelected(letter.row, letter.column)}
                      />
                    ))}
                  </View>
                );
              }}
            />
          </GestureDetector>

          {/* </GestureHandlerRootView> */}
        </View>
        {/* </View> */}
        <View style={styles.palavrasContainer}>
          {palavras.map((palavra, index) => (
            <Text
              key={index}
              style={[
                styles.palavras,
                palavra.found ? { backgroundColor: cores[index] } : null,
                palavra.found ? styles.wordFound : null,
              ]}
            >
              {palavra.name}
            </Text>
          ))}
        </View>
        <View
          style={{
            height: "10%",
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Anuncio</Text>
        </View>
        <Modal
          isVisible={hintsExhausted}
          onBackdropPress={fecharModalDicasEsgotadas}
          style={styles.modalContainer2}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>As dicas acabaram!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={fecharModalDicasEsgotadas}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={closeModal}
          style={styles.modalContainer2}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>TEMPO:</Text>
            <Text style={styles.textTempo}>{tempoDecorrido}s</Text>
            <Text>Moedas ganhas nesta partida: {moedasGanhas}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Continuar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.modalButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <StatusBar style="auto " />
      </ImageBackground>
    </View>
  );
}
