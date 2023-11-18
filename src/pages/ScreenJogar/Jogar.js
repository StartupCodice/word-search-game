import React,{ useState, useEffect  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import randomcolor from 'randomcolor';

export default function Jogar({ navigation }) {
  const [palavras, setPalavras] = useState([
    'ALEGRIA',
    'PRESENTE',
    'NOEL',
    'NATAL',
  ]);

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

  const [indexes, setIndexes] = useState([
    [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6] ],
    [ [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7] ],
    [ [0, 3], [0, 4], [0, 5], [0, 6] ],
    [ [4, 2], [4, 3], [4, 4], [4, 5], [4, 6] ]
  ]);

  useEffect(() => {
    const coresAleatorias = palavras.map(() => randomcolor());
    setCores(coresAleatorias);
  }, [palavras]);

  const [texto, setTexto] = useState('');

  const handleInputChange = (text) => {
    setTexto(text);
  };

  function getIndex(name) {
    if (palavras.indexOf(name) > -1) {
      let i = palavras.indexOf(name);
      console.log('indexes[i] = ' + indexes[i]); 
      return indexes[i];
    }

    setTexto('');
    return false;
  }

  function select(row, column) {
    console.log('row ' + row);
    console.log('column ' + column);
  }

  const handleSubmit = () => {
    const index = getIndex(texto.toUpperCase());

    for (let i = 0; i < index.length; i++) {
      select(index[i][0], index[i][1]);
    }
  };
 
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
              <Text key={index} style={styles.palavras}>
                {palavra}
              </Text>
            ))
          }
        </View>

        <View style={styles.sendLetter}>
          <TextInput
            style={styles.inputLetter}
            placeholder="Digite aqui"
            onChangeText={handleInputChange}
            value={texto}
          />
          <Button style={styles.buttonLetter} title="Enviar" onPress={handleSubmit} />
        </View>

        <View style={styles.lettersContainer}>
          {
            letters.map((palavra, index) => (
              palavra.map((letter, otherIndex) => (
                <Text key={otherIndex} style={[styles.letter]}>
                  {letter.toUpperCase()}
                </Text>
              ))
            ))
          }
        </View>

        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}