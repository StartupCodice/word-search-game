import React from 'react'
import { Text, View, Image, TouchableOpacity, TouchableHighlight, ImageBackground, ScrollView} from 'react-native';
import styles from '../../Home/style';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';


export function NivelPro({ navigation }){
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
                <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate("PresentesPro")}>
                <ImageBackground source={require('./../../../assets/arvoresNatal.png')} style={styles.ImagemEstilo}  >
                <Text style={styles.ZeroTrinta}>0/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.TextCenterEstilo} >Presentes</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate("DecoracoesPro")}>
                <ImageBackground source={require('./../../../assets/presenteNatal.png')} style={styles.ImagemEstilo}  >
                <Text style={styles.ZeroTrinta}>0/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.TextCenterEstilo} >Decorações</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate("AlimentosPro")}>
                <ImageBackground source={require('./../../../assets/ComidasNatal.png')} style={styles.ImagemEstilo}  >
                <Text style={styles.ZeroTrinta}>0/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.TextCenterEstilo} >Alimentos</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.ButtonEstilo} onPress={() => navigation.navigate("PersonagensPro")}>
                <ImageBackground source={require('./../../../assets/papai-noel.png')} style={styles.ImagemEstilo}  >
                <Text style={styles.ZeroTrinta}>0/30</Text>
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