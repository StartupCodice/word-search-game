import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

export default function Jogar({ navigation }) {
  const [palavras, setPalavras] = useState('PALAVRA 1     PALAVRA 2');
  const [palavrasdois, setPalavrasdois] = useState('PALAVRA 3     PALAVRA 4');
  const [palavrastres, setPalavrastres] = useState('PALAVRA 5     PALAVRA 6');
  
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
          <Text style={styles.palavras}> {palavras} </Text>
          <Text style={styles.palavrasdois}> {palavrasdois} </Text>
          <Text style={styles.palavrastres}> {palavrastres} </Text>
          <StatusBar style="auto" />


          
        </ImageBackground>
    </View>
  );
}