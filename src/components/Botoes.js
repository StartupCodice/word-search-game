import React, { useState } from 'react';
import { View, Text, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../pages/Home/style';
import { Infinito } from '../pages/Infinito/Infinito';

export default function Botoes() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const openInfinitoModal = () => {
        setModalVisible(true);
    };


    return (
        <View style={styles.ScreenContainer}>
            <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('ScreenJogar')}>
                <ImageBackground
                    source={require('./../assets/presenteVermelho.png')}
                    style={styles.ScreenButton}
                >
                    <Text style={styles.ScreenText}>
                        JOGAR
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="null" onPress={() => navigation.navigate('Estilos')}>
                <ImageBackground
                    source={require('./../assets/presenteVerde.png')}
                    style={styles.ScreenButton}
                >
                    <Text style={styles.ScreenText}>
                        NÍVEIS
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="null" onPress={openInfinitoModal}>
                <ImageBackground
                source={require('./../assets/presenteAmarelo.png')}
                style={styles.ScreenButton}
                >
                <Text style={styles.ScreenText}>
                    INFINITO
                </Text>
                </ImageBackground>
            </TouchableHighlight>

      <Infinito modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
}