import React from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, ImageBackground} from 'react-native';
import styles from './style';

export function Infinito(){
  return(
    <View style={styles.container}>
                <ImageBackground source={require('../../assets/bg1.jpeg')} style={styles.imageBackground}>
                    <View style={styles.buttonContainer}>
                       <Text style={styles.buttonTextRed}>
                            batata
                        </Text> 
                    </View>    
                </ImageBackground>
            </View>
  )
}