import React,{ useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { createGame } from 'hunting-words';
import randomcolor from 'randomcolor';

export default function Jogar({ navigation }) {
  const [palavras, setPalavras] = useState([
    { name: 'ALEGRIA', found: false },
    { name: 'PRESENTE', found: false },
    { name: 'NOEL', found: false },
    { name: 'NATAL', found: false },
  ]);
  const [board, setBoard] = useState({
    game: new createGame(8, 8, [
      'ALEGRIA',
      'PRESENTE',
      'NOEL',
      'NATAL',
    ]),
  });
  const [cores, setCores] = useState([]);

  const [letters, setLetters] = useState([
    ['a','s','i','n','o','e','l','i'],
		['l','a','l','p','a','l','h','t'],
		['e','t','i','g','u','a','n','o'],
		['g','c','i','f','r','a','c','u'],
		['r','l','n','a','t','a','l','v'],
		['i','u','s','i','c','a','t','r'],
		['a','b','i','s','s','n','o','b'],
		['p','r','e','s','e','n','t','e'],
  ]);

  function selectLetter(item) {
    let game = board.game;
    game.board[item.row][item.column].setIsSelected(!item.isSelected);

    setBoard({ game });
    verifyFindWord(item.word);
  }

  function verifyFindWord(words) {
    for(let word of words){
      let lettersSelected = getLetterSelectedSameWord(word)
    
      if (lettersSelected == word.length){
        palavras.forEach((palavra) => {
          if (palavra.name === word) {
            palavra.found = true;
            setPalavras([ ...palavras ]);
          }
        })
      }

      userWin();
    }
  }

  function userWin() {
    const isWin = palavras.every(palavra => palavra.found === true);

    if (isWin) {
      mostrarAlerta();
    }
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Parabéns',
      'Você conseguiu achar todas as palavras',
      [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ],
      { cancelable: false }
    );
  };

  function getLetterSelectedSameWord(word) {
    let lettersSelected = 0;

    board.game.board
    .filter((row) =>{
      lettersSelected = lettersSelected + row.filter((el)=> { return el.word == word && el.isSelected;}).length;
    });

    return lettersSelected;
  }

  useEffect(() => {
    const coresAleatorias = palavras.map(() => randomcolor());
    setCores(coresAleatorias);
  }, [palavras]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../assets/templatejogo.jpg')} style={styles.imageBackground}>
        <Image
          source={require('./../../assets/telaingameretangulo.png')}
          style={styles.retangulo}
        />
         
        <Image
          source={require('./../../assets/chapeu.png')}
          style={styles.chapeu}
        />

        <TouchableOpacity>
          <Image
            source={require('./../../assets/lampada.png')}
            style={styles.dica}
          />  
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.button}>
          <Ionicons name="arrow-back" size={45} color="white" 
          onPress={() => navigation.navigate('Home')}/>
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