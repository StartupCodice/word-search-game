import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal';
import { createGame } from 'hunting-words';
import randomcolor from 'randomcolor';
import styles from './style';
import {scale} from 'react-native-size-matters';
import ThemeStorage from '../../../components/storageTheme';

import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';

const CELL_SIZE = Math.floor(Dimensions.get('window').width * 0.1);
const CELL_PADDING = Math.floor(CELL_SIZE * 0.1);

const Cell = React.memo(({ letter, selected }) => (

  <View style={[styles.cell, letter.isSelected && styles.selected, selected && styles.selected]}>
    <Text style={styles.cellText}>{letter.letter}</Text>
  </View>
));


export default function EventoFacil({ navigation, rows = 6, cols = 8 }) {

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
  const [moedasGanhas, setMoedasGanhas] = useState(0);
  const [currentCell, setCurrentCell] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(90); 
  const [tempoAcabou, setTempoAcabou] = useState(false);
  const { getTheme, addTheme } = ThemeStorage();
  const [theme, setTheme] = useState('theme');

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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const startTimer = () => {
      const intervalId = setInterval(() => {
          setTimeRemaining(prevTime => {
              if (prevTime > 0) {
                  return prevTime - 1;
              } else {
                  clearInterval(intervalId);
                  setTempoAcabou(true);
                  return 0;
              }
          });
      }, 1000);

      return intervalId;
  };

  const mostrarDica = () => {
    if (numDicasUsadas < 2) {
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

  const getWordsToTheme = (th) => {
    switch (th) {
      case 'Presentes':
        return [
          { name: 'PAPAI', found: false },
          { name: 'MAMAE', found: false },
          { name: 'ANJO', found: false },
          { name: 'SANTA', found: false },
          { name: 'CUPIDO', found: false },
          { name: 'DUENDE', found: false },
          { name: 'ELFO', found: false },
          { name: 'REIS', found: false },
          { name: 'BELA', found: false },
          { name: 'RENA', found: false },
          { name: 'NOEL', found: false },
          { name: 'FADA', found: false },
          { name: 'GRINCH', found: false },
          { name: 'LILY', found: false },
          { name: 'JACK', found: false },
          { name: 'BONECO', found: false },
        ];
      case 'Decorações':
        return [
          { name: 'VISCO', found: false },
          { name: 'COROA', found: false },
          { name: 'LUZES', found: false },
          { name: 'RENAS', found: false },
          { name: 'VELAS', found: false },
          { name: 'LAÇOS', found: false },
          { name: 'BOLA', found: false },
          { name: 'LIGHT', found: false },
          { name: 'GIFT', found: false },
          { name: 'TREE', found: false },
          { name: 'STAR', found: false },
          { name: 'BELL', found: false },
          { name: 'SNOW', found: false },
          { name: 'FITA', found: false },
          { name: 'CENA', found: false },
          { name: 'NOEL', found: false },
          { name: 'NEVE', found: false },
          { name: 'FELIZ', found: false },
          { name: 'MEIAS', found: false },
          { name: 'GLOBO', found: false },
          { name: 'TETO', found: false },
          { name: 'CASA', found: false },
          { name: 'FLOCO', found: false },
          { name: 'ESTRELA', found: false },
          { name: 'CRIANÇA', found: false },
          { name: 'NEON', found: false },
          { name: 'PLACA', found: false },
          { name: 'ARCO', found: false },
          { name: 'CORDA', found: false },
          { name: 'RIBBON', found: false },
          { name: 'ARVORE', found: false },
          { name: 'PISCA', found: false },
        ];
      case 'Alimentos':
        return [
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
          { name: 'PAO', found: false },
          { name: 'FIGO', found: false },
          { name: 'UVA', found: false },
          { name: 'RIO', found: false },
          { name: 'FESTA', found: false },
          { name: 'BIFE', found: false },
          { name: 'MELAO', found: false },
          { name: 'MESA', found: false },
          { name: 'CASA', found: false },
          { name: 'ABACO', found: false },
          { name: 'AÇUCAR', found: false },
          { name: 'FLORA', found: false },
          { name: 'PESCA', found: false },
          { name: 'BOLA', found: false },
          { name: 'VILA', found: false },
          { name: 'TINTO', found: false },
          { name: 'TRIGO', found: false },
          { name: 'LISO', found: false },
          { name: 'NOME', found: false },
          { name: 'VELOZ', found: false },
          { name: 'LOBO', found: false },
          { name: 'CARRO', found: false },
          { name: 'TOGA', found: false },
          { name: 'RODA', found: false },
          { name: 'LAMA', found: false },
          { name: 'ZOOM', found: false },
          { name: 'SOL', found: false },
          { name: 'CÉU', found: false },
          { name: 'URSO', found: false },
          { name: 'FITA', found: false },
          { name: 'MOFO', found: false },
          { name: 'CALMO', found: false },
          { name: 'VERDE', found: false },
          { name: 'ABRIL', found: false },
          { name: 'FATO', found: false },
          { name: 'GIZ', found: false },
          { name: 'FOCA', found: false },
          { name: 'PESO', found: false },
          { name: 'ROLAR', found: false },
          { name: 'CASA', found: false },
        ];
      case 'Personagens':
        return [
          { name: 'PAPAI', found: false },
          { name: 'MAMAE', found: false },
          { name: 'ANJO', found: false },
          { name: 'SANTA', found: false },
          { name: 'CUPIDO', found: false },
          { name: 'DUENDE', found: false },
          { name: 'ELFO', found: false },
          { name: 'REIS', found: false },
          { name: 'BELA', found: false },
          { name: 'RENA', found: false },
          { name: 'NOEL', found: false },
          { name: 'FADA', found: false },
          { name: 'GRINCH', found: false },
          { name: 'LILY', found: false },
          { name: 'JACK', found: false },
          { name: 'BONECO', found: false },
        ];
    }
  }

  const fetchData = async (th) => {
    try {
      const palavrasOriginais = getWordsToTheme(th);

      if (isMountedRef.current && palavrasOriginais != undefined) {
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
    let intervalId;

    const fetchDataAndStartTimer = async () => {
      try {
        const th = await getTheme().then((t) => {
          return t;
        });        
          
        fetchData(th);
  
        setTimeRemaining(90);
        intervalId = startTimer();
      } catch (error) {
        console.error('Erro ao obter o tema:', error);
      }
    };
  
    fetchDataAndStartTimer();
  
    return () => {
      isMountedRef.current = false;
      clearInterval(intervalId);
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

    adicionarMoedas(6);
    setMoedasGanhas(6);
  
    setModalVisible(true);
    setTempoDecorrido(tempoFormatado);
  };

  const [selectedCells, setSelectedCells] = useState([]);
const panRef = useRef(null);

const isCellSelected = useCallback(
  (row, col) => selectedCells.some(cell => cell.row === row && cell.col === col),
  [selectedCells]
);

const onGestureEvent = (event) => {
  const { x, y } = event.nativeEvent;
  const row = Math.floor(y / CELL_SIZE);
  const col = Math.floor(x / CELL_SIZE);
  if (row >= 0 && col >= 0 && row < rows && col < cols && (currentCell?.row !== row || currentCell?.col !== col)) {
    setCurrentCell({ row, col });
    if (!isCellSelected(row, col)) {
      setSelectedCells(prevCells => [...prevCells, { row, col }]);
    }
  }
};

const onHandlerStateChange = (event, item) => {
  let letterSelected = '';

  if (event.nativeEvent.state === State.END) {
    selectedCells.forEach((cell) => {
      board.game.board.forEach((row) => {
        row.forEach((letter) => {
          if (cell.col === letter.column && cell.row === letter.row) {
            letterSelected += letter.letter;
          }
        })
      })
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

    setBoard({ game });
    setSelectedCells([]);
    setCurrentCell(null);
    

    palavras.forEach((palavra) => {
      if (palavra.name === letterSelected) {
        palavra.found = true;
      }
    });

    setPalavras([...palavras]);

    userWin();
  }
};



  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../../assets/templatejogo.jpg')} style={styles.imageBackground}>
        
      <TouchableOpacity onPress={mostrarDica}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
            source={require('./../../../assets/chapeu.png')}
            style={styles.Dica}
          >
            <Text style={styles.dicaNumber}>{2 - numDicasUsadas}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      
          <Ionicons style={styles.button} name="arrow-back" size={scale(40)} color="white"
            onPress={() => navigation.navigate('Home')} />

        <View style={{ justifyContent: 'center', alignItems: 'center', top: scale(-80) }}>
          <Text style={{ fontSize: scale(22), color: 'white' }}>{formatTime(timeRemaining)}</Text>
        </View>

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

        <Modal isVisible={tempoAcabou} onBackdropPress={fecharModalDicasEsgotadas} style={styles.modalContainer2}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              O tempo acabou!
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.modalButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      <Modal isVisible={isModalVisible} style={styles.modalContainer2}>
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
          
        </View>
      </Modal>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
