import React, {useEffect} from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './style';
import { ModalEvento } from '../../components/ModalEvento';
import { ModalSettings } from './../../components/ModalSettings';
import Botoes from '../../components/Botoes';
import LevelComponent from '../../components/storageLevel';
import ThemeComponent from '../../components/storageTheme';
import NiveisFaceis from '../../components/storageNivelFacil';
import NiveisMedio from '../../components/storageNivelMedio';

export default function Home({ navigation }) {
    const { level, addLevel } = LevelComponent();
    const { getTheme, addTheme } = ThemeComponent();

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
    } = NiveisFaceis();

    useEffect(() => {
        if (level == null) addLevel(1);

        getTheme().then((theme) => {
            if (theme == null) addTheme('Decorações');
        });

        showNivelFacil();
    }, ); 

    const showNivelFacil = () => {
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
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bg2.jpeg')} style={styles.imageBackground}>
                <View style={styles.buttonContainer}>                  
                    <Botoes navigation={navigation}/>                          
                    <ModalSettings />
                    <ModalEvento navigation={navigation}/>
                </View>
            </ImageBackground>
        </View>
    )
}