import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal';
import styles from './style';
import { createGame } from 'hunting-words';
import randomcolor from 'randomcolor';
import { scale } from 'react-native-size-matters';


const DIRECTIONS = [
  [1, 0],     // horizontal direita
  [1, 1],     // diagonal inferior direita
  [0, 1],     // vertical para baixo
  [-1, 1],    // diagonal inferior esquerda
  [-1, 0],    // horizontal esquerda
  [-1, -1],   // diagonal superior esquerda
  [0, -1],    // vertical para cima
  [1, -1],    // diagonal superior direita
];

export default function Jogar({ navigation }) {

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

  const [columns, setColumns] = useState([]);

  const mostrarDica = () => {
    if (numDicasUsadas < 2) {
      // pega as palavras que não foram encontradas
      const palavrasNaoEncontradas = palavras.filter((palavra) => !palavra.found);

      // pega uma palavra alatoria
      const indiceAleatorio = Math.floor(Math.random() * palavrasNaoEncontradas.length);
      const palavraAleatoria = palavrasNaoEncontradas[indiceAleatorio];
      let game = board.game;

      // seleciona as letra correspondente a palavra alatoria
      columns.forEach((column) => {
        if (column.word[0] == palavraAleatoria.name) {
          game.board[column.row][column.column].setIsSelected(true);
        }
      })

      // atualiza a state do board
      setBoard({ game });

      // muda o fundo da palavra encontrada
      palavras.forEach((palavra) => {
        if (palavra.name === palavraAleatoria.name) {
          palavra.found = true;
        }
      })
      

      setPalavras([...palavras]);
      setNumDicasUsadas(numDicasUsadas + 1);
    } else {
      setHintsExhausted(true);
    }
  };

  const fecharModalDicasEsgotadas = () => {
    setHintsExhausted(false);
  };


  const verificarPalavraSelecionada = () => {
    const novoTabuleiro = { ...board.game };
    const novasPalavras = [...palavras];
  
    novasPalavras.forEach((palavra) => {
      const palavraNoTabuleiro = palavra.name;
      const letrasSelecionadas = [];
  
      // Verificar quais letras estão selecionadas para a palavra atual
      novoTabuleiro.board.forEach((row) => {
        row.forEach((cell) => {
          if (palavraNoTabuleiro.includes(cell.letter) && cell.isSelected) {
            letrasSelecionadas.push(cell.letter);
          }
        });
      });
    });
  
    setPalavras(novasPalavras);
    setBoard({ game: novoTabuleiro });
  };

  

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

  function selectLetter(item) {
    let game = board.game;
    game.board[item.row][item.column].setIsSelected(!item.isSelected);

    verificarPalavraSelecionada();
    setBoard({ game });
    verifyFindWord(item.word);
  }

  function getLetterSelectedSameWord(word) {
    let lettersSelected = 0;
  
    board.game.board.filter((row) => {
      lettersSelected =
        lettersSelected +
        row.filter((el) => {
          return el.word == word && el.isSelected;
        }).length;
    });
  
    return lettersSelected;
  }

  function verifyFindWord(words) {
    for (let word of words) {
      let lettersSelected = getLetterSelectedSameWord(word);

      if (lettersSelected === word.length) {
        palavras.forEach((palavra) => {
          if (palavra.name === word) {
            palavra.found = true;
            setPalavras([...palavras]);
          }
        });
      }

      userWin();
    }
  }

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
  };

  const closeModal = () => {
    reiniciarJogo();
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../assets/templatejogo.jpg')} style={styles.imageBackground}>
        
      <TouchableOpacity onPress={mostrarDica}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
            source={require('./../../assets/chapeu.png')}
            style={styles.Dica}
          >
            <Text style={styles.dicaNumber}>{2 - numDicasUsadas}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>


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
          <ImageBackground
          source={require('./../../assets/telaingameretangulo.png')}
          style={styles.retangulo}
        >
          
          <View style={styles.LetterContainer}>
          {
            board.game.board.map((row, indexRow) => (
              <View key={indexRow}>
                {
                  row.map((column, indexColumn) => (
                    <Text
                      style={[styles.Letter, (column.isSelected) ? styles.selected : null]}
                      key={indexColumn}
                      onPress={() => selectLetter(column)}
                      onLayout={() => setColumns([...columns, column])}
                    >
                      {column.letter}
                    </Text>
                  ))
                }
              </View>
            ))
          }
        </View>
        </ImageBackground>
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
            <Text style={styles.modalText}>
              TEMPO:
            </Text>
            <Text style={styles.textTempo}>
                {tempoDecorrido}s
            </Text> 
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Continuar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.modalButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
