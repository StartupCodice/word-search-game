import React from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, ImageBackground} from 'react-native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

export function Infinito({ navigation }){
  return(
    <View style={styles.container}>
      
                <ImageBackground source={require('../../assets/bg1.jpeg')} style={styles.imageBackground}>
                    <View style={styles.buttonContainer}>
                       <Text style={styles.buttonTextRed}>
                            Em Breve
                        </Text> 
                    </View>    
                </ImageBackground>
                <TouchableOpacity style={styles.button}>
                  <Ionicons 
                  name="arrow-back" 
                  size={45} 
                  color="white" 
                  onPress={() => navigation.navigate('Home')}/>
                </TouchableOpacity>
      </View>
  )
}