import React from 'react';
import { View, Text, TouchableHighlight, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';


export default function NiveisBotoes() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity>
          <Ionicons 
            name="arrow-back" 
            size={45} 
            color="black" 
            style={styles.buttonNiveis}
            onPress={() => navigation.navigate('Home')}/>
        </TouchableOpacity>
            <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelFacil')}>
                <ImageBackground
                    style={{ width: 180, height: 90 }}
                >
                    <Text style={styles.buttonTextYellow}>
                        Nivel Facil
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelMedio')}>
                <ImageBackground
                    style={{ width: 180, height: 90, margin: 40 }}
                >
                    <Text style={styles.buttonTextGreen}>
                        Nivel Medio
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelDificil')}>
                <ImageBackground
                    style={{ width: 180, height: 90 }}
                >
                    <Text style={styles.buttonTextYellow}>
                        Nivel Dificil
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('NivelPro')}>
                <ImageBackground
                    style={{ width: 180, height: 90 }}
                >
                    <Text style={styles.buttonTextYellow}>
                        Nivel Pró
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        </View>
    );
}