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
    addPersonagens 
  } = NiveisPro();

  useEffect(() => {
    if (presentes == null) addPresentes(0);
    if (decoracoes == null) addDecoracoes(0);
    if (alimentos == null) addAlimento(0);
    if (personagens == null) addPersonagens(0);
  })

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
              count={0}
              screenName="EsportesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Cores"
              imagePath={require('./../../../assets/cores.png')}
              count={0}
              screenName="CoresPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Empregos"
              imagePath={require('./../../../assets/empregos.png')}
              count={0}
              screenName="EmpregosPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Países"
              imagePath={require('./../../../assets/paises.png')}
              count={0}
              screenName="PaisesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Animais"
              imagePath={require('./../../../assets/Animais.png')}
              count={0}
              screenName="AnimaisPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Doces"
              imagePath={require('./../../../assets/Doces.png')}
              count={0}
              screenName="DocesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Arvores"
              imagePath={require('./../../../assets/arvore.png')}
              count={0}
              screenName="ArvoresPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Atores"
              imagePath={require('./../../../assets/ator.png')}
              count={0}
              screenName="AtoresPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Transportes"
              imagePath={require('./../../../assets/Transportes.png')}
              count={0}
              screenName="TransportesPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Bebidas"
              imagePath={require('./../../../assets/bebida.png')}
              count={0}
              screenName="BebidasPro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Amizade"
              imagePath={require('./../../../assets/amizade.png')}
              count={0}
              screenName="AmizadePro"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Nomes"
              imagePath={require('./../../../assets/nomes.png')}
              count={0}
              screenName="NomesPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Roupas"
              imagePath={require('./../../../assets/roupas.png')}
              count={0}
              screenName="RoupasPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Natureza"
              imagePath={require('./../../../assets/natureza.png')}
              count={0}
              screenName="NaturezaPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Pintores"
              imagePath={require('./../../../assets/pintores.png')}
              count={0}
              screenName="PintoresPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Casa"
              imagePath={require('./../../../assets/casa.png')}
              count={0}
              screenName="CasaPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Monumentos"
              imagePath={require('./../../../assets/monumentos.png')}
              count={0}
              screenName="MonumentosPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Carros"
              imagePath={require('./../../../assets/carros.png')}
              count={0}
              screenName="CarrosPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Filmes"
              imagePath={require('./../../../assets/filme.png')}
              count={0}
              screenName="FilmesPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Espaço"
              imagePath={require('./../../../assets/foguete.png')}
              count={0}
              screenName="EspaçoPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Musicos"
              imagePath={require('./../../../assets/musicos.png')}
              count={0}
              screenName="MusicosPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Marcas"
              imagePath={require('./../../../assets/marcas.png')}
              count={0}
              screenName="MarcasPro"
            />
            <ThemeButton
              navigation={navigation}
              themeName="Escritoras"
              imagePath={require('./../../../assets/escritor.png')}
              count={0}
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