import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal';
import { createGame } from 'hunting-words';
import randomcolor from 'randomcolor';
import styles from './style';
import {scale} from 'react-native-size-matters';
import MoedasComponent from '../../../../../components/storage';
import NiveisFaceis from '../../../../../components/storageNivelFacil';

import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';

const CELL_SIZE = Math.floor(Dimensions.get('window').width * 0.1);
const CELL_PADDING = Math.floor(CELL_SIZE * 0.1);

const Cell = React.memo(({ letter, selected }) => (

  <View style={[styles.cell, letter.isSelected && styles.selected, selected && styles.selected]}>
    <Text style={styles.cellText}>{letter.letter}</Text>
  </View>
));


export default function Alimentos({ navigation, rows = 6, cols = 8 }) {
  const { 
    alimentos, 
    addAlimento,
  } = NiveisFaceis();

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
      const palavrasNaoEncontradas = palavras.filter((palavra) => !palavra.found);
  
      if (palavrasNaoEncontradas.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * palavrasNaoEncontradas.length);
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
              setSelectedCells(prevCells => [...prevCells, { row, col }]);
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
        { name: 'PERU', found: false },
        { name: 'VINHO', found: false },
        { name: 'CEIA', found: false },
        { name: 'LEITE', found: false },
        { name: 'DOCE', found: false },
        { name: 'GANSO', found: false },
        { name: 'MESSA', found: false },
        { name: 'SALSA', found: false },
        { name: 'TORTA', found: false },
        { name: 'NOZES', found: false },
        { name: 'COCA', found: false },
        { name: 'PÃO', found: false },
        { name: 'FIGO', found: false },
        { name: 'UVA', found: false },
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
      setModalVisible(true);
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

    let level = parseInt(alimentos) + 1;
    if (alimentos < 30) addAlimento(level.toString());
  
    setModalVisible(true);
    setTempoDecorrido(tempoFormatado);
  };

  const reiniciarJogo = () => {
    const palavrasOriginais = [
      { name: 'PERU', found: false },
      { name: 'VINHO', found: false },
      { name: 'CEIA', found: false },
      { name: 'LEITE', found: false },
      { name: 'DOCE', found: false },
      { name: 'GANSO', found: false },
      { name: 'MESSA', found: false },
      { name: 'SALSA', found: false },
      { name: 'TORTA', found: false },
      { name: 'NOZES', found: false },
      { name: 'COCA', found: false },
      { name: 'PÃO', found: false },
      { name: 'FIGO', found: false },
      { name: 'UVA', found: false },
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
  (row, col) => selectedCells.some(cell => cell.row === row && cell.col === col),
  [selectedCells]
);

const onGestureEvent = (event) => {
  const { x, y } = event.nativeEvent;
  const row = Math.floor(y / (CELL_SIZE));
  const col = Math.floor(x / (CELL_SIZE));

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


        <View style={styles.palavrasContainer}>
          {
            palavras.map((palavra, index) => (
              <Text key={index} style={[
                styles.palavras,
                (palavra.found) ? { backgroundColor: cores[index] } : null,
                (palavra.found) ? styles.wordFound : null,
              ]}>
                {palavra.name}
              </Text>
            ))
          }
        </View>
        <View style={styles.cacaContainer}>
          <View style={styles.retangulo}> 
          <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler
              onGestureEvent={onGestureEvent}
              onHandlerStateChange={onHandlerStateChange}
              ref={panRef}
            >
              <View style={styles.LetterContainer}>
              {
                board.game.board.map((row, indexRow) => (
                  <View key={indexRow} style={styles.row}>
                    {
                      row.map((letter, colIndex) => (
                        <Cell 
                          key={`cell-${indexRow}-${colIndex}`} 
                          letter={letter} 
                          selected={isCellSelected(indexRow, colIndex)} 
                        />
                      ))
                    }
                  </View>
                ))
              }
              </View>
            </PanGestureHandler>
          </GestureHandlerRootView>
        </View>
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

