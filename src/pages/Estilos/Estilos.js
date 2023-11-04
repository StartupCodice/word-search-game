import React from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, ImageBackground} from 'react-native';
import styles from './style';

export function Estilos(){
  return(
    <View style={styles.container}>
                <ImageBackground source={require('../../assets/bg3.jpeg')} style={styles.imageBackground}>
                    <View style={styles.buttonContainer}>
                       <Text style={styles.buttonTextRed}>
                            batata assada
                        </Text> 
                    </View>    
                </ImageBackground>
            </View>
  )
}