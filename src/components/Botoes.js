import React, {useState} from 'react';
import { 
    Text, 
    View, 
    TouchableHighlight, 
    ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../pages/Home/style';

export default function Botoes({ navigation }) {

    return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor="null" onPress={ () => navigation.navigate('ScreenJogar') }>  
                        <ImageBackground 
                            source={require('./../assets/presenteVermelho.png')} 
                            style={{ width: 180, height: 90, }} 
                            >
                                <Text style={styles.buttonTextRed}>
                                   JOGAR
                                </Text>
                        </ImageBackground>    
                    </TouchableHighlight>                     
                    <TouchableHighlight underlayColor="null" onPress={ () => navigation.navigate('Estilos') }>
                        <ImageBackground 
                            source={require('./../assets/presenteVerde.png')} 
                            style={{ width: 180, height: 90, margin: 40 }} 
                            >
                                <Text style={styles.buttonTextGreen}>
                                   ESTILOS
                                </Text>
                        </ImageBackground>                       
                    </TouchableHighlight>   
                    <TouchableHighlight underlayColor="null" onPress={ () => navigation.navigate('Infinito') }>
                        <ImageBackground 
                            source={require('./../assets/presenteAmarelo.png')} 
                            style={{ width: 180, height: 90 }} 
                            >
                                <Text style={styles.buttonTextYellow}>
                                   INFINITO
                                </Text>
                        </ImageBackground> 
                    </TouchableHighlight>
            </View>
    )
}