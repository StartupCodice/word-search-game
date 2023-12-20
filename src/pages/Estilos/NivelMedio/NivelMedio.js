import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from '../../Home/style';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import NiveisMedio from '../../../components/storageNivelMedio';

export function NivelMedio({ navigation }) {
  const {
    presentes,
    addPresentes,
    decoracoes,
    addDecoracoes,
    alimentos,
    addAlimento,
    personagens,
    addPersonagens,
  } = NiveisMedio();

  useEffect(() => {
    if (presentes == null) addPresentes(0);
    if (decoracoes == null) addDecoracoes(0);
    if (alimentos == null) addAlimento(0);
    if (personagens == null) addPersonagens(0);
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <ImageBackground source={require('../../../assets/temanatal.jpg')} style={styles.imageBackground}>
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
