import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../pages/Home/style';
import { Infinito } from '../pages/Infinito/Infinito';
import LevelComponent from './storageLevel';
import NiveisDificil from './storageNivelDificil';

export default function Botoes() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const { level, addLevel } = LevelComponent();

    const {
        presentes,
        addPresentes,
        decoracoes,
        addDecoracoes,
        alimentos,
        addAlimento,
        personagens,
        addPersonagens,
        esportes,
        addEsportes,
        cores,
        addCores,
        empregos,
        addEmpregos,
        paises,
        addPaises,
        animais,
        addAnimais,
        doces,
        addDoces,
        arvores,
        addArvores,
        atores,
        addAtores,
        transportes,
        addTransportes,
        bebidas,
        addBebidas,
        amizade,
        addAmizade,
        musicas,
        addMusicas,
        nomes,
        addNomes,
        roupas,
        addRoupas,
        natureza,
        addNatureza,
        pintores,
        addPintores,
        casa,
        addCasa,
        carros,
        addCarros,
        filmes,
        addFilmes,
        espaco,
        addEspaco,
        musicos,
        addMusicos,
        marcas,
        addMarcas,
        escritoras,
        addEscritoras,
      } = NiveisDificil();
    
      useEffect(() => {
        if (presentes == null) addPresentes(0);
        if (decoracoes == null) addDecoracoes(0);
        if (alimentos == null) addAlimento(0);
        if (personagens == null) addPersonagens(0);
        if (esportes == null) addEsportes(0);
        if (cores == null) addCores("0");
        if (empregos == null) addEmpregos(0);
        if (paises == null) addPaises(0);
        if (animais == null) addAnimais(0);
        if (doces == null) addDoces(0);
        if (arvores == null) addArvores(0);
        if (atores == null) addAtores(0);
        if (transportes == null) addTransportes(0);
        if (bebidas == null) addBebidas(0);
        if (amizade == null) addAmizade(0);
        if (musicas == null) addMusicas(0);
        if (nomes == null) addNomes(0);
        if (roupas == null) addRoupas(0);
        if (natureza == null) addNatureza(0);
        if (pintores == null) addPintores(0);
        if (casa == null) addCasa(0);
        if (carros == null) addCarros(0);
        if (filmes == null) addFilmes(0);
        if (espaco == null) addEspaco(0);
        if (musicos == null) addMusicos(0);
        if (marcas == null) addMarcas(0);
        if (escritoras == null) addEscritoras(0);
      }, []);

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
                    <Text style={styles.ScreenTextJogar}>
                        JOGAR
                    </Text>
                    <Text style={styles.ScreenTextNivel}>
                        Nível {level ? level : "1"}
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