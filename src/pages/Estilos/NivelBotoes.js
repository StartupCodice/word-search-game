import React from 'react';
import { View, Text, TouchableHighlight, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Home/style'
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';


export default function NiveisBotoes() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/natalbotões.jpg')} style={styles.imageBackground}>
                <View style={styles.container}>
                    <TouchableOpacity>
                    <Ionicons 
                        name="arrow-back" 
                        size={scale(45)} 
                        color="black" 
                        style={styles.ButtonBackNiveis}
                        onPress={() => navigation.navigate('Home')}/>
                    </TouchableOpacity>

                        <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelFacil')} style={styles.ButtonNiveis}>
                                <Text style={styles.ButtonTextNiveis}>
                                    Nivel Facil
                                </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelMedio')} style={styles.ButtonNiveis}>
                                <Text style={styles.ButtonTextNiveis}>
                                    Nivel Medio
                                </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelDificil')} style={styles.ButtonNiveis}>
                                <Text style={styles.ButtonTextNiveis}>
                                    Nivel Dificil
                                </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelPro')} style={styles.ButtonNiveis}>  
                                <Text style={styles.ButtonTextNiveis}>
                                    Nivel Pró
                                </Text>
                        </TouchableHighlight>

                </View>
            </ImageBackground>
            
        </View>
    );
}