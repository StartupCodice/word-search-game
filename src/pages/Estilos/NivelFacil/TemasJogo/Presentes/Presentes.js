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
import NiveisFaceis from "../../../../../components/storageNivelFacil";

import {
  PanGestureHandler,
  State,
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";

const CELL_SIZE = Math.floor(350 * 0.1);
const CELL_PADDING = Math.floor(scale(10) * 0.1);

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

const { width, height } = Dimensions.get("screen");
const CELL_MARGIN = 2;

const CELL_WIDTH = ((width - 8 * (CELL_MARGIN * 2)) / 8) * 0.8;
const CELL_HEIGHT = ((height - 6 * (CELL_MARGIN * 2)) / 6) * 0.4;

export default function Presentes({ navigation, rows = 8, cols = 8 }) {
  const { presentes, addPresentes } = NiveisFaceis();

  const [palavras, setPalavras] = useState([]);
  const [board, setBoard] = useState({
    game: new createGame(6, 8, []),
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
    if (numDicasUsadas < 3) {
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

  const fetchData = async () => {
    try {
      const palavrasOriginais = [
        { name: "LUZES", found: false },
        { name: "CEIA", found: false },
        { name: "MAGIA", found: false },
        { name: "RENOS", found: false },
        { name: "DOCES", found: false },
        { name: "FITAS", found: false },
        { name: "GIFT", found: false },
        { name: "LAÇOS", found: false },
        { name: "JOIA", found: false },
        { name: "CARTA", found: false },
        { name: "DOCE", found: false },
        { name: "BOLO", found: false },
        { name: "BOLA", found: false },
        { name: "FESTA", found: false },
        { name: "GORRO", found: false },
        { name: "BOLSA", found: false },
        { name: "BLUSA", found: false },
        { name: "TENIS", found: false },
        { name: "MEIA", found: false },
        { name: "CARRO", found: false },
        { name: "MOTO", found: false },
      ];

      if (isMountedRef.current) {
        const palavrasEscolhidas = selectRandomWords(palavrasOriginais, 4);
        setPalavras(palavrasEscolhidas);

        const palavrasJogo = palavrasEscolhidas.map((palavra) => palavra.name);
        setBoard({ game: new createGame(6, 8, palavrasJogo) });

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

    adicionarMoedas(28);
    setMoedasGanhas(28);

    let level = parseInt(presentes) + 1;
    if (presentes < 30) addPresentes(level.toString());

    setModalVisible(true);
    setTempoDecorrido(tempoFormatado);
  };

  const reiniciarJogo = () => {
    const palavrasOriginais = [
      { name: "LUZES", found: false },
      { name: "CEIA", found: false },
      { name: "MAGIA", found: false },
      { name: "RENOS", found: false },
      { name: "DOCES", found: false },
      { name: "FITAS", found: false },
      { name: "GIFT", found: false },
      { name: "LAÇOS", found: false },
      { name: "JOIA", found: false },
      { name: "CARTA", found: false },
      { name: "DOCE", found: false },
      { name: "BOLO", found: false },
      { name: "BOLA", found: false },
      { name: "FESTA", found: false },
      { name: "GORRO", found: false },
      { name: "BOLSA", found: false },
      { name: "BLUSA", found: false },
      { name: "TENIS", found: false },
      { name: "MEIA", found: false },
      { name: "CARRO", found: false },
      { name: "MOTO", found: false },
    ];

    const palavrasEscolhidas = selectRandomWords(palavrasOriginais, 4);
    setPalavras(palavrasEscolhidas);

    const palavrasJogo = palavrasEscolhidas.map((palavra) => palavra.name);
    setBoard({ game: new createGame(6, 8, palavrasJogo) });

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
  //   const { x, y, absoluteX, absoluteY } = event.nativeEvent;

  //   // console.log("absoluteX:", absoluteX, "absoluteY:", absoluteY);
  //   // console.log("x:", x, "y:", y);

  //   const row = Math.floor(y / heightCell);
  //   const col = Math.floor(x / widthCell);

  //   // console.log(row * 8 + col);
  //   console.log(row, col);

  //   if (!initialCell) {
  //     setInitialCell({ row, col });
  //     setSelectedCells((prevCells) => [...prevCells, { row, col }]);
  //   }

  //   if (isAligned(initialCell, { row, col })) {
  //     if (!isCellSelected(row, col)) {
  //       setSelectedCells((prevCells) => [...prevCells, { row, col }]);
  //     }
  //   }
  // };

  // const onHandlerStateChange = (event, item) => {
  //   let letterSelected = "";

  //   /// verifica se a palavra é uma das escilhidas
  //   selectedCells.forEach((cell) => {
  //     if (isAligned(initialCell, cell)) {
  //       board.game.board.forEach((row) => {
  //         row.forEach((letter) => {
  //           if (cell.col === letter.column && cell.row === letter.row) {
  //             if (!letter.isSelected) letterSelected += letter.letter;
  //           }
  //         });
  //       });
  //     }
  //   });

  //   let game = board.game;

  //   /// deixar as palavras selecionadas
  //   game.board.forEach((row) => {
  //     row.forEach((column) => {
  //       if (!column.isSelected) {
  //         if (column.word[0] === letterSelected) {
  //           game.board[column.row][column.column].setIsSelected(true);
  //         }
  //       }
  //     });
  //   });

  //   // marca como encontrada
  //   palavras.forEach((palavra) => {
  //     if (palavra.name === letterSelected) {
  //       palavra.found = true;
  //     }
  //   });

  //   setBoard({ game });
  //   setSelectedCells([]);
  //   setCurrentCell(null);
  //   setInitialCell(null);

  //   setPalavras([...palavras]);
  //   userWin();
  // };

  const isAligned = (cell1, cell2) => {
    const rowDiff = Math.abs(cell1.row - cell2.row);
    const colDiff = Math.abs(cell1.col - cell2.col);

    return (
      rowDiff === colDiff || cell1.row === cell2.row || cell1.col === cell2.col
    );
  };

  const [startIndex, setStartIndex] = useState();
  const [selectds, setSelectds] = useState([]);

  const isWithinRange = useCallback(
    (index) => {
      return selectds.some((cell) => cell === index);
    },
    [selectds]
  );

  const widthCell = (width * 0.8) / 8;
  const heightCell = (height * 0.4) / 6;

  /// filtrar segunda celula se for adjacente a primeira na diagonal
  // const filterCellsByMovement = (selectedCells) => {
  //   const n = selectedCells.length;

  //   if (n <= 2) {
  //     return selectedCells; // Se tiver 2 ou menos pontos, não há nada para filtrar
  //   }

  //   const firstCell = selectedCells[0];
  //   const lastCell = selectedCells[n - 1];

  //   // Calcular a inclinação esperada para uma linha reta
  //   const expectedSlope =
  //     (lastCell.row - firstCell.row) / (lastCell.col - firstCell.col);

  //   // Filtrar os pontos intermediários
  //   const filteredCells = [firstCell];
  //   for (let i = 1; i < n - 1; i++) {
  //     const currentSlope =
  //       (selectedCells[i].row - firstCell.row) /
  //       (selectedCells[i].col - firstCell.col);

  //     if (currentSlope === expectedSlope) {
  //       filteredCells.push(selectedCells[i]);
  //     }
  //   }

  //   filteredCells.push(lastCell);

  //   return filteredCells;
  // };

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .onBegin(({ x, y }) => {
          const row = Math.floor(y / heightCell);
          const col = Math.floor(x / widthCell);

          const cell = { row: row, col: col };

          if (!initialCell) {
            setInitialCell({ row, col });
            setSelectedCells((prevCells) => [...prevCells, { row, col }]);
          }
          // console.log(cell);
        })
        .onChange(({ x, y }) => {
          const row = Math.floor(y / heightCell);
          const col = Math.floor(x / widthCell);

          const cell = { row: row, col: col };
          // console.log(cell);
          if (isAligned(initialCell, cell)) {
            if (!isCellSelected(row, col)) {
              setSelectedCells((prevCells) => [...prevCells, { row, col }]);
            }
          }
        })
        .onFinalize(() => {
          console.log("finalizou");

          let letterSelected = "";

          /// verifica se a palavra é uma das escilhidas
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

          /// deixar as palavras selecionadas
          game.board.forEach((row) => {
            row.forEach((column) => {
              if (!column.isSelected) {
                if (column.word[0] === letterSelected) {
                  game.board[column.row][column.column].setIsSelected(true);
                }
              }
            });
          });

          // marca como encontrada
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
    [selectedCells, initialCell, isCellSelected]
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../../../../assets/fundoAzul.jpg")}
        style={styles.imageBackground}
      >
        <TouchableOpacity onPress={mostrarDica}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ImageBackground
              source={require("./../../../../../assets/lampada.png")}
              style={styles.Dica}
            >
              <Text style={styles.dicaNumber}>{3 - numDicasUsadas}</Text>
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
          onPress={() => navigation.navigate("NivelFacil")}
        />

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
            <TouchableOpacity
              style={styles.modalVoltarHome}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.modalButtonText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.modalGanhos}>
              <View>
                <Text style={styles.modalText}>TEMPO:</Text>
                <Text style={styles.textTempo}>{tempoDecorrido}</Text>
              </View>
              <View>
                <Text style={styles.modalText}>MOEDAS:</Text>
                <Text style={styles.textMoeda}>+{moedasGanhas}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
