import React from 'react';
import { View, Text, TouchableHighlight, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';


export default function NiveisBotoes() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/natalbotões.jpg')} style={styles.imageBackground}>
                <View style={styles.container}>
                    <TouchableOpacity>
                    <Ionicons 
                        name="arrow-back" 
                        size={45} 
                        color="black" 
                        style={styles.buttonNiveis}
                        onPress={() => navigation.navigate('Home')}/>
                    </TouchableOpacity>

                        <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelFacil')} style={styles.buttonRed}>
                                <Text style={styles.buttonText}>
                                    Nivel Facil
                                </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelMedio')} style={styles.buttonRed}>
                                <Text style={styles.buttonText}>
                                    Nivel Medio
                                </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelDificil')} style={styles.buttonRed}>
                                <Text style={styles.buttonText}>
                                    Nivel Dificil
                                </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelPro')} style={styles.buttonRed}>  
                                <Text style={styles.buttonText}>
                                    Nivel Pró
                                </Text>
                        </TouchableHighlight>

                </View>
            </ImageBackground>
            
        </View>
    );
}