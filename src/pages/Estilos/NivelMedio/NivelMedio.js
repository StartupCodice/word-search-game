import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from '../../Home/style';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import NiveisMedio from '../../../components/storageNivelMedio';
import MoedasComponent from '../../../components/storage';


export function NivelMedio({ navigation }) {
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
  } = NiveisMedio();

  useEffect(() => {
    if (presentes == null) addPresentes(0);
    if (decoracoes == null) addDecoracoes(0);
    if (alimentos == null) addAlimento(0);
    if (personagens == null) addPersonagens(0);
    if (esportes == null) addEsportes(0);
    if (cores == null) addCores(0);
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
              screenName="PresentesMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Decoracoes"
              imagePath={require('./../../../assets/presenteNatal.png')}
              count={decoracoes}
              screenName="DecoracoesMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Alimentos"
              imagePath={require('./../../../assets/ComidasNatal.png')}
              count={alimentos}
              screenName="AlimentosMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Personagens"
              imagePath={require('./../../../assets/papai-noel.png')}
              count={personagens}
              screenName="PersonagensMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Esportes"
              imagePath={require('./../../../assets/esportes.png')}
              count={0}
              screenName="EsportesMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Cores"
              imagePath={require('./../../../assets/cores.png')}
              count={0}
              screenName="CoresMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Empregos"
              imagePath={require('./../../../assets/empregos.png')}
              count={0}
              screenName="EmpregosMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Países"
              imagePath={require('./../../../assets/paises.png')}
              count={0}
              screenName="PaisesMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Animais"
              imagePath={require('./../../../assets/Animais.png')}
              count={0}
              screenName="AnimaisMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Doces"
              imagePath={require('./../../../assets/Doces.png')}
              count={0}
              screenName="DocesMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Arvores"
              imagePath={require('./../../../assets/arvore.png')}
              count={0}
              screenName="ArvoresMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Atores"
              imagePath={require('./../../../assets/ator.png')}
              count={0}
              screenName="AtoresMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Transportes"
              imagePath={require('./../../../assets/Transportes.png')}
              count={0}
              screenName="TransportesMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Bebidas"
              imagePath={require('./../../../assets/bebida.png')}
              count={0}
              screenName="BebidasMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Amizade"
              imagePath={require('./../../../assets/amizade.png')}
              count={0}
              screenName="AmizadeMedio"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Nomes"
              imagePath={require('./../../../assets/nomes.png')}
              count={0}
              screenName="NomesMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Roupas"
              imagePath={require('./../../../assets/roupas.png')}
              count={0}
              screenName="RoupasMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Natureza"
              imagePath={require('./../../../assets/natureza.png')}
              count={0}
              screenName="NaturezaMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Pintores"
              imagePath={require('./../../../assets/pintores.png')}
              count={0}
              screenName="PintoresMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Casa"
              imagePath={require('./../../../assets/casa.png')}
              count={0}
              screenName="CasaMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Monumentos"
              imagePath={require('./../../../assets/monumentos.png')}
              count={0}
              screenName="MonumentosMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Carros"
              imagePath={require('./../../../assets/carros.png')}
              count={0}
              screenName="CarrosMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Filmes"
              imagePath={require('./../../../assets/filme.png')}
              count={0}
              screenName="FilmesMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Espaço"
              imagePath={require('./../../../assets/foguete.png')}
              count={0}
              screenName="EspaçoMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Musicos"
              imagePath={require('./../../../assets/musicos.png')}
              count={0}
              screenName="MusicosMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Marcas"
              imagePath={require('./../../../assets/marcas.png')}
              count={0}
              screenName="MarcasMedio"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Escritoras"
              imagePath={require('./../../../assets/escritor.png')}
              count={0}
              screenName="EscritorasMedio"
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
        <Text style={styles.ZeroTrinta}>{count}/30</Text>
      </ImageBackground>
    </TouchableOpacity>
    <Text style={styles.TextCenterEstilo}>{themeName}</Text>
  </View>
);
