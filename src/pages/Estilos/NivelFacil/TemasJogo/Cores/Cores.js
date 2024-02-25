import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal';
import { createGame } from 'hunting-words';
import randomcolor from 'randomcolor';
import styles from './style';
import {scale} from 'react-native-size-matters';
import MoedasComponent from '../../../../../components/storage';
import NiveisFaceis from '../../../../../components/storageNivelFacil';

import { GestureDetector, Gesture } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("screen");

const Cell = React.memo(({ letter, selected, palavraParaCor, cores, wordsFound }) => {
  const color = palavraParaCor[letter.word] || cores[wordsFound];

  return (
    <View
      style={[
        styles.cell,
        (letter.isSelected) && [
          styles.selected,
          { backgroundColor: color },
        ],
        selected && [styles.selected, { backgroundColor: color }],
      ]}
    >
      <Text style={styles.cellText}>{letter.letter}</Text>
    </View>
  )
});

export default function Cores({ navigation, rows = 8, cols = 8 }) {
  const {
    cores,
    addCores,
  } = NiveisFaceis();

  const [palavras, setPalavras] = useState([]);
  const [board, setBoard] = useState({
    game: new createGame(6, 8, []),
  });
  const [coresAleatorias, setCores] = useState([]);
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

  const[wordsFound, setWordsFound] = useState(0);
  const [palavraParaCor, setPalavraParaCor] = useState([]);
  const widthCell = (width * 0.8) / 8;
  const heightCell = (height * 0.4) / 6;

  const atualizarPalavraParaCor = useCallback((palavra, cor) => {
    setPalavraParaCor((prev) => ({
      ...prev,
      [palavra]: cor,
    }));
  }, []);

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

        // muda o fundo da palavra encontrada
        novasPalavras.forEach((palavra) => {
          if (palavra.name === palavraAleatoria.name) {
            palavra.found = true;
            setWordsFound(wordsFound + 1);
            atualizarPalavraParaCor(palavraAleatoria.name, cores[wordsFound]);
          }
        });

        // atualiza a state de palavras apenas se houve alterações
        setBoard({ game: novoTabuleiro });
        setSelectedCells([]);
        setCurrentCell(null);
        setInitialCell(null);

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

  const filterCellsByMovement = useCallback(
    (selectedCells) => {
      const n = selectedCells.length;

      if (n <= 2) {
        return selectedCells;
      }

      const firstCell = selectedCells[0];
      const lastCell = selectedCells[n - 1];

      const expectedSlope =
        (lastCell.row - firstCell.row) / (lastCell.col - firstCell.col);

      return selectedCells.filter((cell, index) => {
        if (index === 0 || index === n - 1) {
          return true;
        }

        const currentSlope =
          (cell.row - firstCell.row) / (cell.col - firstCell.col);
        return currentSlope === expectedSlope;
      });
    },
    [selectedCells]
  );

  const gesture = Gesture.Pan()
    .onStart(({ x, y }) => {
      const row = Math.floor(y / heightCell);
      const col = Math.floor(x / widthCell);

      if (!initialCell) {
        setInitialCell({ row, col });
      }
    })
    .onUpdate(({ x, y }) => {
      const row = Math.floor(y / heightCell);
      const col = Math.floor(x / widthCell);

      if (isAligned(initialCell, { row, col })) {
        if (!isCellSelected(row, col)) {
          setSelectedCells((prevCells) => [...prevCells, { row, col }]);
          const filteredCells = filterCellsByMovement([
            ...selectedCells,
            { row, col },
          ]);

          setSelectedCells(filteredCells);
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
          setWordsFound(wordsFound + 1);
          atualizarPalavraParaCor(letterSelected, cores[wordsFound]);
        }
      });

      setBoard({ game });
      setSelectedCells([]);
      setCurrentCell(null);
      setInitialCell(null);

      setPalavras([...palavras]);
      userWin();
    })
    .shouldCancelWhenOutside(true);

  const fetchData = async () => {
    try {
      const palavrasOriginais = [
        { name: 'AZUL', found: false },
        { name: 'ROSA', found: false },
        { name: 'VERDE', found: false },
        { name: 'AMARELO', found: false },
        { name: 'CINZA', found: false },
        { name: 'PRETO', found: false },
        { name: 'BRANCO', found: false },
        { name: 'OURO', found: false },
        { name: 'PRATA', found: false },
        { name: 'VINHO', found: false },
        { name: 'BEIJO', found: false },
        { name: 'CORAL', found: false },
        { name: 'ÍRIS', found: false },
        { name: 'AÇAÍ', found: false },
        { name: 'RUVO', found: false },
        { name: 'AQUA', found: false },
        { name: 'SALMÃO', found: false },
        { name: 'TOMATO', found: false },
        { name: 'NEVE', found: false },
        { name: 'KIWI', found: false },
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
    setWordsFound(0);
    setPalavraParaCor([]);
    }
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      isMountedRef.current = false;
    }
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

    let level = parseInt(cores) + 1;
    if (cores < 30) addCores(level.toString());

    setModalVisible(true);
    setTempoDecorrido(tempoFormatado);
  };

  const reiniciarJogo = () => {
    const palavrasOriginais = [
      { name: 'AZUL', found: false },
      { name: 'ROSA', found: false },
      { name: 'VERDE', found: false },
      { name: 'AMARELO', found: false },
      { name: 'CINZA', found: false },
      { name: 'PRETO', found: false },
      { name: 'BRANCO', found: false },
      { name: 'OURO', found: false },
      { name: 'PRATA', found: false },
      { name: 'VINHO', found: false },
      { name: 'BEIJO', found: false },
      { name: 'CORAL', found: false },
      { name: 'ÍRIS', found: false },
      { name: 'AÇAÍ', found: false },
      { name: 'RUVO', found: false },
      { name: 'AQUA', found: false },
      { name: 'SALMÃO', found: false },
      { name: 'TOMATO', found: false },
      { name: 'NEVE', found: false },
      { name: 'KIWI', found: false },
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
    setWordsFound(0);
    setPalavraParaCor([]);
  };

  const closeModal = () => {
    reiniciarJogo();
  };

  const [selectedCells, setSelectedCells] = useState([]);
  const panRef = useRef(null);

  const isCellSelected = useCallback(
    (row, col) => selectedCells.some(cell => cell.row === row && cell.col === col),
    [selectedCells]
  );

  const onGestureEvent = (event) => {
    const { x, y } = event.nativeEvent;
    const row = Math.floor(y / scale(CELL_SIZE));
    const col = Math.floor(x / scale(CELL_SIZE));

    if (!initialCell) {
      setInitialCell({ row, col });
    }

    if (isAligned(initialCell, { row, col })) {
      setCurrentCell({ row, col });
      if (!isCellSelected(row, col)) {
        setSelectedCells(prevCells => [...prevCells, { row, col }]);
      }
    }
  };

  const onHandlerStateChange = (event, item) => {
    let letterSelected = '';

      selectedCells.forEach((cell) => {
        if (isAligned(initialCell, cell)) {
            board.game.board.forEach((row) => {
              row.forEach((letter) => {
                  if (cell.col === letter.column && cell.row === letter.row) {
                    if (!letter.isSelected) letterSelected += letter.letter;
                  }
              })
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

    return rowDiff === colDiff || cell1.row === cell2.row || cell1.col === cell2.col;
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../../../../assets/fundoAzul.jpg')} style={styles.imageBackground}>

      <TouchableOpacity onPress={mostrarDica}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
            source={require('./../../../../../assets/lampada.png')}
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

          <Ionicons style={styles.button} name="arrow-back" size={scale(40)} color="white"
            onPress={() => navigation.navigate('NivelFacil')} />


      <View style={styles.cacaContainer}>
        <View style={styles.retangulo}>
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
                        palavraParaCor={palavraParaCor}
                        cores={cores}
                        wordsFound={wordsFound}
                      />
                    ))}
                  </View>
                );
              }}
            />
          </GestureDetector>
        </View>
      </View>

      <View style={styles.palavrasContainer}>
        {
          palavras.map((palavra, index) => (
            <Text key={index} style={[
              styles.palavras,
              (palavra.found) ? styles.wordFound : null,
            ]}>
              {palavra.name}
            </Text>
          ))
        }
      </View>

        <Modal isVisible={hintsExhausted} onBackdropPress={fecharModalDicasEsgotadas} style={styles.modalContainer2}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            As dicas acabaram!
          </Text>
          <TouchableOpacity style={styles.modalButton} onPress={fecharModalDicasEsgotadas}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={styles.modalContainer2}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalVoltarHome} onPress={() => navigation.navigate('Home')}>
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

