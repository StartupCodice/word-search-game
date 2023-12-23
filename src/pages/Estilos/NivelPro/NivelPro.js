import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import styles from '../../Home/style';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import NiveisPro from '../../../components/storageNivelPro';
import MoedasComponent from '../../../components/storage';


export function NivelPro({ navigation }){
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
  } = NiveisPro();

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

  return(

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
                onPress={() => navigation.navigate('Estilos')}/>
              </View>             
          <View style={styles.container}>
            <View style={styles.containerMode}>
            <ThemeButton
              navigation={navigation}
              themeName="Presentes"
              imagePath={require('./../../../assets/arvoresNatal.png')}
              count={presentes}
              screenName="PresentesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Decoracoes"
              imagePath={require('./../../../assets/presenteNatal.png')}
              count={decoracoes}
              screenName="DecoracoesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Alimentos"
              imagePath={require('./../../../assets/ComidasNatal.png')}
              count={alimentos}
              screenName="AlimentosPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Personagens"
              imagePath={require('./../../../assets/papai-noel.png')}
              count={personagens}
              screenName="PersonagensPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Esportes"
              imagePath={require('./../../../assets/esportes.png')}
              count={esportes}
              screenName="EsportesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Cores"
              imagePath={require('./../../../assets/cores.png')}
              count={cores}
              screenName="CoresPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Empregos"
              imagePath={require('./../../../assets/empregos.png')}
              count={empregos}
              screenName="EmpregosPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Países"
              imagePath={require('./../../../assets/paises.png')}
              count={paises}
              screenName="PaisesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Animais"
              imagePath={require('./../../../assets/Animais.png')}
              count={animais}
              screenName="AnimaisPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Doces"
              imagePath={require('./../../../assets/Doces.png')}
              count={doces}
              screenName="DocesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Arvores"
              imagePath={require('./../../../assets/arvore.png')}
              count={arvores}
              screenName="ArvoresPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Atores"
              imagePath={require('./../../../assets/ator.png')}
              count={atores}
              screenName="AtoresPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Transportes"
              imagePath={require('./../../../assets/Transportes.png')}
              count={transportes}
              screenName="TransportesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Bebidas"
              imagePath={require('./../../../assets/bebida.png')}
              count={bebidas}
              screenName="BebidasPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Amizade"
              imagePath={require('./../../../assets/amizade.png')}
              count={amizade}
              screenName="AmizadePro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Nomes"
              imagePath={require('./../../../assets/nomes.png')}
              count={nomes}
              screenName="NomesPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Roupas"
              imagePath={require('./../../../assets/roupas.png')}
              count={roupas}
              screenName="RoupasPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Natureza"
              imagePath={require('./../../../assets/natureza.png')}
              count={natureza}
              screenName="NaturezaPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Pintores"
              imagePath={require('./../../../assets/pintores.png')}
              count={pintores}
              screenName="PintoresPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Casa"
              imagePath={require('./../../../assets/casa.png')}
              count={casa}
              screenName="CasaPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Musicas"
              imagePath={require('./../../../assets/Musicas.png')}
              count={musicas}
              screenName="MusicasPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Carros"
              imagePath={require('./../../../assets/carros.png')}
              count={carros}
              screenName="CarrosPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Filmes"
              imagePath={require('./../../../assets/filme.png')}
              count={filmes}
              screenName="FilmesPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Espaço"
              imagePath={require('./../../../assets/foguete.png')}
              count={espaco}
              screenName="EspaçoPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Musicos"
              imagePath={require('./../../../assets/musicos.png')}
              count={musicos}
              screenName="MusicosPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Marcas"
              imagePath={require('./../../../assets/marcas.png')}
              count={marcas}
              screenName="MarcasPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Escritoras"
              imagePath={require('./../../../assets/escritor.png')}
              count={escritoras}
              screenName="EscritorasPro"
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