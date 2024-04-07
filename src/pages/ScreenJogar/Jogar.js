import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal';
import { createGame } from 'hunting-words';
import randomcolor from 'randomcolor';
import styles from './style';
import {scale} from 'react-native-size-matters';
import MoedasComponent from '../../components/storage';
import LevelComponent from '../../components/storageLevel';
import { BannerAds } from '../../components/BannerAds';
import { InterstitialAds } from '../../components/InterstitialAds';
import { RewardedAds } from '../../components/RewardedAds';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';

const CELL_SIZE = Math.floor(350 * 0.1);
const CELL_PADDING = Math.floor(scale(10) * 0.1);

const Cell = React.memo(({ letter, selected, cores, palavras }) => {
  const wordsFound = palavras.filter((word) => word.found).length;

  return (
    <View style={[styles.cell, letter.isSelected && [styles.selected, { backgroundColor: cores[wordsFound] }], selected && [styles.selected, { backgroundColor: cores[wordsFound] }]]}>
      <Text style={styles.cellText}>{letter.letter}</Text>
    </View>
  )
});


export default function Jogar({ navigation, rows = 8, cols = 8 }) {

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
  const { moedas, adicionarMoedas, removeMoedas } = MoedasComponent();
  const { level, addLevel } = LevelComponent();
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
  const [showIntersititial, setShowIntersititial] = useState(false);
  const [showRewarded, setShowRewarded] = useState(false);
  const [addTip, setAddTip] = useState(false);
  const [buyTip, setBuyTip] = useState(50);
  const [showModalSemSaldo, setShowModalSemSaldo] = useState(false);

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
    if (numDicasUsadas < 3 || addTip) {
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
        setAddTip(false);
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
        { name: 'NOZES', found: false },
        { name: 'COCA', found: false },
        { name: 'PÃO', found: false },
        { name: 'FIGO', found: false },
        { name: 'UVA', found: false },
        { name: 'RÉVE', found: false },
        { name: 'BRIN', found: false },
        { name: 'VELA', found: false },
        { name: 'SINO', found: false },
        { name: 'LUZES', found: false },
        { name: 'PAZ', found: false },
        { name: 'AMOR', found: false },
        { name: 'BOLA', found: false },
        { name: 'GATO', found: false },
        { name: 'CASA', found: false },
        { name: 'SOL', found: false },
        { name: 'BIFE', found: false },
        { name: 'RIO', found: false },
        { name: 'CÉU', found: false },
        { name: 'MESA', found: false },
        { name: 'SOFA', found: false },
        { name: 'CAIXA', found: false },
        { name: 'CIRCO', found: false },
        { name: 'DADO', found: false },
        { name: 'PIPO', found: false },
        { name: 'CELO', found: false },
        { name: 'RAIZ', found: false },
        { name: 'POLO', found: false },
        { name: 'LADO', found: false },
        { name: 'BICO', found: false },
        { name: 'CUME', found: false },
        { name: 'MIMO', found: false },
        { name: 'BOLA', found: false },
        { name: 'RIMA', found: false },
        { name: 'ROSA', found: false },
        { name: 'VEIO', found: false },
        { name: 'DEDO', found: false },
        { name: 'VILA', found: false },
        { name: 'RUIM', found: false },      
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
  
    const tempoFormatado = `${minutos} min ${segundos} seg `;

    adicionarMoedas(28);
    setMoedasGanhas(28);
  
    setTempoDecorrido(tempoFormatado);

    let nextLevel = parseInt(level) + 1;
    addLevel(nextLevel.toString());
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
      { name: 'RÉVE', found: false },
      { name: 'BRIN', found: false },
      { name: 'VELA', found: false },
      { name: 'SINO', found: false },
      { name: 'FAMÍLIA', found: false },
      { name: 'LUZES', found: false },
      { name: 'PAZ', found: false },
      { name: 'AMOR', found: false },
      { name: 'BOLA', found: false },
      { name: 'GATO', found: false },
      { name: 'CASA', found: false },
      { name: 'SOL', found: false },
      { name: 'BIFE', found: false },
      { name: 'RIO', found: false },
      { name: 'CÉU', found: false },
      { name: 'MESA', found: false },
      { name: 'SOFA', found: false },
      { name: 'CAIXA', found: false },
      { name: 'CIRCO', found: false },
      { name: 'MILHO', found: false },
      { name: 'DADO', found: false },
      { name: 'PIPO', found: false },
      { name: 'CELO', found: false },
      { name: 'RAIZ', found: false },
      { name: 'POLO', found: false },
      { name: 'LADO', found: false },
      { name: 'BICO', found: false },
      { name: 'CUME', found: false },
      { name: 'MIMO', found: false },
      { name: 'BOLA', found: false },
      { name: 'RIMA', found: false },
      { name: 'ROSA', found: false },
      { name: 'VEIO', found: false },
      { name: 'DEDO', found: false },
      { name: 'VILA', found: false },
      { name: 'RUIM', found: false },
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
    setShowIntersititial(true);
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

  const getRewarded = () => {
    setShowRewarded(false);
    setNumDicasUsadas(2);
    setAddTip(true);
    fecharModalDicasEsgotadas();
  }

  const buyTipWithCoin = () => {
    if (moedas >= buyTip) {
      setNumDicasUsadas(2);
      fecharModalDicasEsgotadas();
      removeMoedas(buyTip);
    } else {
      setShowModalSemSaldo(true);
    }
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../assets/fundoAzul.jpg')} style={styles.imageBackground}>

      <TouchableOpacity onPress={mostrarDica}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
            source={require('../../assets/lampada.png')}
            style={styles.Dica}
          >
            <Text style={styles.dicaNumber}>{3 - numDicasUsadas}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <View style={styles.nivelContainer}>
          <Text style={styles.palavras}>Nível: {level}</Text>
        </View>

      <View style={styles.moedasContainer}>
        <View style={styles.IconMoeda}></View>
        <Text style={styles.moedasText}>{moedas}</Text>
        
      </View>
      
          <Ionicons style={styles.button} name="arrow-back" size={scale(40)} color="white"
            onPress={() => navigation.navigate('Home')} />


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
                          cores={cores}
                          palavras={palavras}
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

        <View style={styles.bannerAd}>
          <BannerAds />
        </View>


        <Modal isVisible={hintsExhausted} onBackdropPress={fecharModalDicasEsgotadas} style={styles.modalContainer2}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            As dicas acabaram!
          </Text>
          <Text style={[styles.modalText, { fontSize: scale(15), textAlign: 'center' }]}>
            Para adquirir mais uma dica, assista a um vídeo ou compre com moedas
          </Text>
          <TouchableOpacity style={styles.modalButton} onPress={() => setShowRewarded(true)}>
            <Image
              source={require('../../assets/banner-ad.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalButton, { flexDirection: 'row', justifyContent: 'center', gap: 15 }]} onPress={buyTipWithCoin}>
            <Text style={styles.modalButtonText}>{buyTip}</Text>
            <View style={styles.IconMoeda}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={fecharModalDicasEsgotadas}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={showModalSemSaldo} style={styles.modalContainer2}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Você não tem moedas sufientes para comprar uma dica!
          </Text>
          <TouchableOpacity style={styles.modalButton} onPress={() => setShowModalSemSaldo(false)}>
            <Text style={styles.modalButtonText}>Voltar</Text>
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

      {
        showIntersititial ?
          <InterstitialAds closeInterstitial={() => setShowIntersititial(false)} />
        : null
      }

      {       
        showRewarded ?
          <RewardedAds getRewarded={getRewarded} />
        : null
      }
      
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}