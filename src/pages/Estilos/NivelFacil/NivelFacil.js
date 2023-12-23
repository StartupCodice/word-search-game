import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from '../../Home/style';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import NiveisFaceis from '../../../components/storageNivelFacil';
import MoedasComponent from '../../../components/storage';

export function NivelFacil({ navigation }) {
  const { moedas } = MoedasComponent();
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

  return (
    <ScrollView style={styles.scrollContainer}>   
      <ImageBackground source={require('../../../assets/temanatal.jpg')} style={styles.imageBackground}>
        <View style={styles.moedasContainer}>
        <View style={styles.IconMoeda}></View>
        <Text style={styles.moedasText}>{moedas}</Text>
        
      </View>
        <View>
          <Ionicons
            name="arrow-back"
            size={scale(46)}
            color="white"
            style={styles.button}
            onPress={() => navigation.navigate('Estilos')}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.containerMode}>
            <ThemeButton
              navigation={navigation}
              themeName="Presentes"
              imagePath={require('./../../../assets/arvoresNatal.png')}
              count={presentes}
              screenName="Presentes"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Decoracoes"
              imagePath={require('./../../../assets/presenteNatal.png')}
              count={decoracoes}
              screenName="Decoracoes"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Alimentos"
              imagePath={require('./../../../assets/ComidasNatal.png')}
              count={alimentos}
              screenName="Alimentos"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Personagens"
              imagePath={require('./../../../assets/papai-noel.png')}
              count={personagens}
              screenName="Personagens"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Esportes"
              imagePath={require('./../../../assets/esportes.png')}
              count={esportes}
              screenName="EsportesFacil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Cores"
              imagePath={require('./../../../assets/cores.png')}
              count={cores}
              screenName="CoresFacil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Empregos"
              imagePath={require('./../../../assets/empregos.png')}
              count={empregos}
              screenName="EmpregosFacil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Países"
              imagePath={require('./../../../assets/paises.png')}
              count={paises}
              screenName="PaisesFacil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Animais"
              imagePath={require('./../../../assets/Animais.png')}
              count={animais}
              screenName="Animais"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Doces"
              imagePath={require('./../../../assets/Doces.png')}
              count={doces}
              screenName="Doces"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Arvores"
              imagePath={require('./../../../assets/arvore.png')}
              count={arvores}
              screenName="Arvores"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Atores"
              imagePath={require('./../../../assets/ator.png')}
              count={atores}
              screenName="Atores"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Transportes"
              imagePath={require('./../../../assets/Transportes.png')}
              count={transportes}
              screenName="Transportes"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Bebidas"
              imagePath={require('./../../../assets/bebida.png')}
              count={bebidas}
              screenName="Bebidas"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Amizade"
              imagePath={require('./../../../assets/amizade.png')}
              count={amizade}
              screenName="Amizade"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Musica"
              imagePath={require('./../../../assets/Musicas.png')}
              count={musicas}
              screenName="Musicas"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Nomes"
              imagePath={require('./../../../assets/nomes.png')}
              count={nomes}
              screenName="Nomes"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Roupas"
              imagePath={require('./../../../assets/roupas.png')}
              count={roupas}
              screenName="Roupas"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Natureza"
              imagePath={require('./../../../assets/natureza.png')}
              count={natureza}
              screenName="Natureza"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Pintores"
              imagePath={require('./../../../assets/pintores.png')}
              count={pintores}
              screenName="Pintores"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Casa"
              imagePath={require('./../../../assets/casa.png')}
              count={casa}
              screenName="Casa"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Carros"
              imagePath={require('./../../../assets/carros.png')}
              count={carros}
              screenName="Carros"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Filmes"
              imagePath={require('./../../../assets/filme.png')}
              count={filmes}
              screenName="Filmes"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Espaço"
              imagePath={require('./../../../assets/foguete.png')}
              count={espaco}
              screenName="Espaço"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Musicos"
              imagePath={require('./../../../assets/musicos.png')}
              count={musicos}
              screenName="Musicos"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Marcas"
              imagePath={require('./../../../assets/marcas.png')}
              count={marcas}
              screenName="Marcas"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Escritoras"
              imagePath={require('./../../../assets/escritor.png')}
              count={escritoras}
              screenName="Escritoras"
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const ThemeButton = ({ navigation, themeName, imagePath, count, screenName }) => (
  <View>
    <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate(screenName)}>
      <ImageBackground source={imagePath} style={styles.ImagemEstilo}>
        <Text style={styles.ZeroTrinta}>{count ? count : 0}/30</Text>
      </ImageBackground>
    </TouchableOpacity>
    <Text style={styles.TextCenterEstilo}>{themeName}</Text>
  </View>
);
