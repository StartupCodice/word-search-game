import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bg2.jpeg')} style={styles.imageBackground}>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight underlayColor="null" onPress={ () => navigation.navigate('ScreenJogar') }>  
                        <ImageBackground 
                            source={require('./../../assets/presenteVermelho.png')} 
                            style={{ width: 180, height: 90, }} 
                            >
                                <Text style={styles.buttonTextRed}>
                                   JOGAR
                                </Text>
                        </ImageBackground>    
                    </TouchableHighlight>                     
                    <TouchableHighlight underlayColor="null" onPress={ () => navigation.navigate('Estilos') }>
                        <ImageBackground 
                            source={require('./../../assets/presenteVerde.png')} 
                            style={{ width: 180, height: 90, margin: 40 }} 
                            >
                                <Text style={styles.buttonTextGreen}>
                                   ESTILOS
                                </Text>
                        </ImageBackground>                       
                    </TouchableHighlight>   
                    <TouchableHighlight underlayColor="null" onPress={ () => navigation.navigate('Infinito') }>
                        <ImageBackground 
                            source={require('./../../assets/presenteAmarelo.png')} 
                            style={{ width: 180, height: 90 }} 
                            >
                                <Text style={styles.buttonTextYellow}>
                                   INFINITO
                                </Text>
                        </ImageBackground> 
                    </TouchableHighlight>                     
                    <TouchableOpacity style={styles.settingsIcon}>
                        <Ionicons name="ios-settings" size={40} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}