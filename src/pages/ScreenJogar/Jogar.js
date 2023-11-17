import React,{ useState, useEffect  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import randomcolor from 'randomcolor';

export default function Jogar({ navigation }) {
  const [palavras, setPalavras] = useState([
    {id: 1, name: 'PALAVRA 1'},
    {id: 2, name: 'PALAVRA 2'},
    {id: 3, name: 'PALAVRA 3'},
    {id: 4, name: 'PALAVRA 4'},
  ]);

  const [allPalavras, setAllPalavras] = useState([
    {id: 1, name: 'PALAVRA 1', show: false },
    {id: 2, name: 'PALAVRA 2', show: false },
    {id: 3, name: 'PALAVRA 3', show: false },
    {id: 4, name: 'PALAVRA 4', show: false },
    {id: 1, name: 'PALAVRA 1', show: false },
    {id: 2, name: 'PALAVRA 2', show: false },
    {id: 3, name: 'PALAVRA 3', show: false },
    {id: 4, name: 'PALAVRA 4', show: false },
  ]);

  const [cores, setCores] = useState([]);

  const [primaryClick, setPrimartClick] = useState(1);
  const [primeiraPalavra, setPrimeiraPalavra] = useState({});

  function handleLetterPress(palavra) {
    setPrimartClick(primaryClick + 1);
    setPrimeiraPalavra(palavra);

    if (!palavra.show) {
      palavra.show = true;
      setAllPalavras([...allPalavras, { id: palavra.id, name: palavra.name, show: palavra.show }]);

      if (primaryClick === 2) {        
        if (primeiraPalavra.id === palavra.id) {
          console.log('achouuu');
        } else {
          resetShow();
          setPrimartClick(1);
        }
      }
    }

  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  function resetShow() {
    allPalavras.forEach((palavra) => {
      palavra.show = false;
    })
  }

  useEffect(() => {
    const coresAleatorias = allPalavras.map(() => randomcolor());
    setCores(coresAleatorias);

    shuffleArray(allPalavras);
    resetShow();

    setPrimartClick(1);
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
              <Text key={index} style={styles.palavras}>
                {palavra.name}
              </Text>
            ))
          }
        </View>


        <View style={styles.cacaContainer}>
          {
            allPalavras.map((palavra, index) => (
              <View key={index} style={styles.caca}>
                <TouchableOpacity style={[{ backgroundColor: cores[index] }]} onPress={() => handleLetterPress(palavra)}>
                  <Text style={styles.letter}>
                    { palavra.show ? palavra.name: '' }
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>

        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}