import React,{ useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { createGame } from 'hunting-words';
import randomcolor from 'randomcolor';

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

export default function Alimentos({ navigation }) {
  const [palavras, setPalavras] = useState([]);
  const [board, setBoard] = useState({
    game: new createGame(8, 8, []),
  });
  const [cores, setCores] = useState([]);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const selectRandomWords = (totalWords, numWords) => {
      const selectedWords = [];
      const allWords = [...totalWords];

      while (selectedWords.length < numWords && allWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * allWords.length);
        selectedWords.push(allWords.splice(randomIndex, 1)[0]);
      }

      return selectedWords;
    };

    const fetchData = async () => {
      if (!isMounted) return; 

      const palavrasOriginais = [
        { name: 'PERU', found: false },
        { name: 'PANETONE', found: false },
        { name: 'CHESTER', found: false },
        { name: 'RABANADA', found: false },
        { name: 'BACALHAU', found: false },
        { name: 'VINHO', found: false },
        { name: 'FAROFA', found: false },
        { name: 'CEIA', found: false },
        { name: 'FRUTAS', found: false },
        { name: 'BOLINHO', found: false },
        { name: 'NOZES', found: false },
        { name: 'GELEIA', found: false },
        { name: 'LEITE', found: false },
      ];

      const palavrasEscolhidas = selectRandomWords(palavrasOriginais, 4);
      setPalavras(palavrasEscolhidas);

      const palavrasJogo = palavrasEscolhidas.map((palavra) => palavra.name);
      setBoard({ game: new createGame(8, 8, palavrasJogo) });

      const coresAleatorias = palavrasEscolhidas.map(() => randomcolor());
      setCores(coresAleatorias);
    };

    fetchData();

    return () => setIsMounted(false);
  }, [isMounted]);

  function selectLetter(item) {
    let game = board.game;
    game.board[item.row][item.column].setIsSelected(!item.isSelected);

    setBoard({ game });
    verifyFindWord(item.word);
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
      mostrarAlerta();
    }
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Parabéns',
      'Você conseguiu achar todas as palavras',
      [{ text: 'OK', onPress: () => navigation.navigate('Home') }],
      { cancelable: false }
    );
  };

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

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../../../../assets/templatejogo.jpg')} style={styles.imageBackground}>
        <Image
          source={require('./../../../../../assets/telaingameretangulo.png')}
          style={styles.retangulo}
        />
         
        <Image
          source={require('./../../../../../assets/chapeu.png')}
          style={styles.chapeu}
        />

        <TouchableOpacity>
          <Image
            source={require('./../../../../../assets/lampada.png')}
            style={styles.dica}
          />  
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.button}>
          <Ionicons name="arrow-back" size={45} color="white" 
          onPress={() => navigation.navigate('NivelFacil')}/>
        </TouchableOpacity>

        <View style={styles.palavrasContainer}>
          {
            palavras.map((palavra, index) => (
              <Text key={index} style={
                [
                  styles.palavras, 
                  (palavra.found) ? { backgroundColor: cores[index] } : null,
                  (palavra.found) ? styles.wordFound : null,
                ]
              }>
                {palavra.name}
              </Text>
            ))
          }
        </View>

        <View style={styles.lettersContainer}>
            {
              board.game.board.map((row, indexRow)=>(
                <View key={indexRow}>
                    {
                      row.map((column, indexColumn)=>(
                          <Text
                            style={[styles.letter, (column.isSelected) ? styles.selected : null]}
                            key={indexColumn}
                            onPress={() => selectLetter(column)}
                          >
                            {column.letter}
                          </Text>
                      ))
                    }
                </View>
              ))
            } 
        </View>

        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}