import React, { useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, TouchableHighlight, ImageBackground, ScrollView} from 'react-native';
import styles from '../../Home/style';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import NiveisDificl from '../../../components/storageNivelDificil';

export function NivelDificil({ navigation }){
  const { 
    presentes, 
    addPresentes,
    decoracoes,
    addDecoracoes,
    alimentos,
    addAlimento,
    personagens,
    addPersonagens 
  } = NiveisDificl();

  useEffect(() => {
    if (presentes == null) addPresentes(0);
    if (decoracoes == null) addDecoracoes(0);
    if (alimentos == null) addAlimento(0);
    if (personagens == null) addPersonagens(0);
  })

  return(
      <View style={styles.container}>   
      <ImageBackground source={require('../../../assets/temanatal.jpg')} style={styles.imageBackground}> 
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
              <View >
                <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate("PresentesDificil")}>
                <ImageBackground source={require('./../../../assets/arvoresNatal.png')} style={styles.ImagemEstilo}  >
                <Text style={styles.ZeroTrinta}>{presentes}/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.TextCenterEstilo} >Presentes</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate("DecoracoesDificil")}>
                <ImageBackground source={require('./../../../assets/presenteNatal.png')} style={styles.ImagemEstilo}  >
                <Text style={styles.ZeroTrinta}>{decoracoes}/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.TextCenterEstilo} >Decorações</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate("AlimentosDificil")}>
                <ImageBackground source={require('./../../../assets/ComidasNatal.png')} style={styles.ImagemEstilo}  >
                <Text style={styles.ZeroTrinta}>{alimentos}/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.TextCenterEstilo} >Alimentos</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate("PersonagensDificil")}>
                <ImageBackground source={require('./../../../assets/papai-noel.png')} style={styles.ImagemEstilo}  >
                <Text style={styles.ZeroTrinta}>{personagens}/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.TextCenterEstilo} >Personagens</Text>
              </View>
            </View>
      </View>
      </ImageBackground>
      </View>
  )
}