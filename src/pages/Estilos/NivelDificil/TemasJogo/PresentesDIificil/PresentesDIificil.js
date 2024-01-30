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
import NiveisDificil from "../../../../../components/storageNivelDificil";

import {
  PanGestureHandler,
  State,
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

const CELL_SIZE = Math.floor(260 * 0.1);
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

export default function AlimentosDificil({ navigation, rows = 10, cols = 10 }) {
  const { presentes, addPresentes } = NiveisDificil();
  const [selecteds, setSelected] = useState([]);

  const [palavras, setPalavras] = useState([]);
  const [board, setBoard] = useState({
    game: new createGame(10, 10, []),
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

  const mostrarDica = () => {
    if (numDicasUsadas < 4) {
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
    try {
      const palavrasOriginais = [
        { name: "MONTANHA", found: false },
        { name: "NOTEBOOK", found: false },
        { name: "OCEANO", found: false },
        { name: "QUÍMICA", found: false },
        { name: "RAIO", found: false },
        { name: "SAPO", found: false },
        { name: "MESSA", found: false },
        { name: "XÍCARA", found: false },
        { name: "TORTA", found: false },
        { name: "NOZES", found: false },
        { name: "PÊSSEGO", found: false },
        { name: "FUTEBOL", found: false },
        { name: "ESPAÇO", found: false },
        { name: "ABACAXI", found: false },
        { name: "RAP", found: false },
        { name: "KIWI", found: false },
        { name: "JAZZ", found: false },
        { name: "SAMBA", found: false },
        { name: "NIKE", found: false },
        { name: "FLORESTA", found: false },
        { name: "SOLUÇÃO", found: false },
        { name: "RATO", found: false },
        { name: "QUEIJO", found: false },
        { name: "ÓCULOS", found: false },
        { name: "JARDIM", found: false },
        { name: "LIMÃO", found: false },
      ];

      if (isMountedRef.current) {
        const palavrasEscolhidas = selectRandomWords(palavrasOriginais, 8);
        setPalavras(palavrasEscolhidas);

        const palavrasJogo = palavrasEscolhidas.map((palavra) => palavra.name);
        setBoard({ game: new createGame(10, 10, palavrasJogo) });

        const coresAleatorias = palavrasEscolhidas.map(() => randomcolor());
        setCores(coresAleatorias);

        setStartTime(new Date());
        setModalVisible(false);
        setTempoDecorrido(0);
      }
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
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

    adicionarMoedas(62);
    setMoedasGanhas(62);

    let level = parseInt(presentes) + 1;
    if (presentes < 30) addPresentes(level.toString());

    setModalVisible(true);
    setTempoDecorrido(tempoFormatado);
  };

  const reiniciarJogo = () => {
    const palavrasOriginais = [
      { name: "MONTANHA", found: false },
      { name: "NOTEBOOK", found: false },
      { name: "OCEANO", found: false },
      { name: "QUÍMICA", found: false },
      { name: "RAIO", found: false },
      { name: "SAPO", found: false },
      { name: "MESSA", found: false },
      { name: "XÍCARA", found: false },
      { name: "TORTA", found: false },
      { name: "NOZES", found: false },
      { name: "PÊSSEGO", found: false },
      { name: "FUTEBOL", found: false },
      { name: "ESPAÇO", found: false },
      { name: "ABACAXI", found: false },
      { name: "RAP", found: false },
      { name: "KIWI", found: false },
      { name: "JAZZ", found: false },
      { name: "SAMBA", found: false },
      { name: "NIKE", found: false },
      { name: "FLORESTA", found: false },
      { name: "SOLUÇÃO", found: false },
      { name: "RATO", found: false },
      { name: "QUEIJO", found: false },
      { name: "ÓCULOS", found: false },
      { name: "JARDIM", found: false },
      { name: "LIMÃO", found: false },
    ];

    const palavrasEscolhidas = selectRandomWords(palavrasOriginais, 8);
    setPalavras(palavrasEscolhidas);

    const palavrasJogo = palavrasEscolhidas.map((palavra) => palavra.name);
    setBoard({ game: new createGame(10, 10, palavrasJogo) });

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

  const { width, height } = Dimensions.get("screen");

  const onGestureEvent = (event) => {
    const { x, y } = event.nativeEvent;

    const widthCell = (width * 0.9) / 10;
    const heightCell = (height * 0.55) / 10;

    const row = Math.floor(y / heightCell);
    const col = Math.floor(x / widthCell);

    const index = row * 10 + col;
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

    const widthCell = (width * 0.9) / 10;
    const heightCell = (height * 0.55) / 10;

    const row = Math.floor(y / heightCell);
    const col = Math.floor(x / widthCell);

    const index = row * 10 + col;

    // selectedCells.forEach((cell) => {
    //   if (isAligned(initialCell, cell)) {
    //       board.game.board.forEach((row) => {
    //         row.forEach((letter) => {
    //             if (cell.col === letter.column && cell.row === letter.row) {
    //               if (!letter.isSelected) letterSelected += letter.letter;
    //             }
    //         })
    //       });
    //   }
    // });

    let game = board.game;
    // game.board.forEach((row) => {
    //   row.forEach((column) => {
    //       if (!column.isSelected) {
    //         if (column.word[0] === letterSelected) {
    //           game.board[column.row][column.column].setIsSelected(true);
    //         }
    //       }
    //   });
    // });

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

  const widthCell = (width * 0.85) / 10;
  const heightCell = (height * 0.55) / 10;

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

          if (isAligned(initialCell, { row, col })) {
            if (!isCellSelected(row, col)) {
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
        }),
    [selectedCells, initialCell, isCellSelected, isAligned]
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../../../../assets/templatejogo.jpg")}
        style={styles.imageBackground}
      >
        <TouchableOpacity onPress={mostrarDica}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ImageBackground
              source={require("./../../../../../assets/chapeu.png")}
              style={styles.Dica}
            >
              <Text style={styles.dicaNumber}>{4 - numDicasUsadas}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <View style={styles.moedasContainer}>
          <View style={styles.IconMoeda}></View>
          <Text style={styles.moedasText}>{moedas}</Text>
        </View>

        <Ionicons
          style={styles.button}
          name="arrow-back"
          size={scale(40)}
          color="white"
          onPress={() => navigation.navigate("NivelDificil")}
        />
        <View style={styles.cacaContainer}>
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
                        // <View
                        //   key={letter.row * 8 + letter.column}
                        //   style={[
                        //     styles.cell,
                        //     {
                        //       backgroundColor: isWithinRange(
                        //         letter.row * 8 + letter.column
                        //       )
                        //         ? "red"
                        //         : "white",
                        //     },
                        //   ]}
                        // >
                        //   <Text>{letter.letter}</Text>
                        // </View>
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
              {/* <FlatList
                data={board.game.board}
                keyExtractor={(_, i) => i.toString()}
                scrollEnabled={false}
                renderItem={({ index, item }) => {
                  return (
                    <View style={[styles.row]}>
                      {item.map((letter, colIndex) => (
                        <Cell
                          key={`cell-${letter.row}-${letter.column}`}
                          letter={letter}
                          selected={isCellSelected(letter.row, letter.column)}
                        />
                      ))}
                    </View>
                  );
                }}
              /> */}
              {/* </PanGestureHandler> */}
            </GestureDetector>

            {/* </GestureHandlerRootView> */}
          </View>
        </View>
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

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
