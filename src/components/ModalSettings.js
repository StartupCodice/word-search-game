import React, { useState, useEffect } from "react";
import { 
    View, 
    Modal,
    TouchableHighlight, 
    TouchableOpacity,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../pages/Home/style";
import { useMusicGlobal } from "./musicContext";
import Slider from '@react-native-community/slider';
import {scale } from "react-native-size-matters";
import NiveisMedio from './storageNivelMedio';

export function ModalSettings(){
    const [settingsVisible, setSettingsVisible] = useState(false);
    const {playMusic, handleVolumeChange} = useMusicGlobal();
    const [volume] = useState(1.0);

    const {
        monumentos,
        addMonumentos,
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
    } = NiveisMedio();

    useEffect(() => {
    if (settingsVisible) {
        playMusic();
    }
    }, [settingsVisible]);

    useEffect(() => {
        if (monumentos == null) addMonumentos(0);
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
    
    return (
    
        <TouchableOpacity style={styles.settingsIcon} onPress={() => setSettingsVisible(true)}>
                    <Modal
                            animationType="fade"
                            transparent={true}
                            visible={settingsVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setSettingsVisible(!settingsVisible);
                            }}>
                            <View style={styles.CenteredViewSettings}>
                                <View style={styles.modalViewVolume}>
                                <TouchableHighlight
                                    style={styles.buttonInside}
                                    underlayColor="null"
                                    onPress={() => setSettingsVisible(!settingsVisible)}>
                                    <Ionicons style={styles.closeSharp} name="close-sharp" size={scale(40)} color="black" />
                                </TouchableHighlight>
                                <View style={styles.volumeCenter}>
                                    
                                    <Ionicons style={styles.IconStyle}  name={'volume-high'} size={scale(30)} color="black"/>
                                    <View style={styles.containerSlider}>
                                    <Slider
                                        style={styles.slider}
                                        minimumValue={0}
                                        maximumValue={1}
                                        value={volume}
                                        onValueChange={handleVolumeChange}

                                    />
                                    </View>
                                    
                                </View>
                                    
                                
                                </View>
                                
                            </View>
                            
                            </Modal>
                            
                        <Ionicons name="settings-sharp" size={40} color="white" />
                    </TouchableOpacity>
    )
}