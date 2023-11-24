import React from 'react'
import { Text, View, Image, TouchableOpacity, TouchableHighlight, ImageBackground, ScrollView} from 'react-native';
import styles from '../style';
import { Ionicons } from '@expo/vector-icons';

export function NivelMedio({ navigation }){
  return(
    
      <View style={styles.container}>   
      <ImageBackground source={require('../../../assets/temanatal.jpg')} style={styles.imageBackground}> 
      <TouchableOpacity >
              <Ionicons 
                name="arrow-back" 
                size={45} 
                color="white" 
                style={styles.button}
                onPress={() => navigation.navigate('Estilos')}/>
            </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.containerMode}>
              <View >
                <TouchableOpacity style={styles.estiloButton}>
                <ImageBackground source={require('./../../../assets/arvoresNatal.png')} style={styles.imagemEstilo}  >
                <Text style={styles.zeroTrinta}>0/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.textCenter} >Presentes</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.estiloButton}>
                <ImageBackground source={require('./../../../assets/presenteNatal.png')} style={styles.imagemEstilo}  >
                <Text style={styles.zeroTrinta}>0/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.textCenter} >Decorações</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.estiloButton}>
                <ImageBackground source={require('./../../../assets/ComidasNatal.png')} style={styles.imagemEstilo}  >
                <Text style={styles.zeroTrinta}>0/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.textCenter} >Alimentos</Text>
              </View>
              <View >
                <TouchableOpacity style={styles.estiloButton}>
                <ImageBackground source={require('./../../../assets/papai-noel.png')} style={styles.imagemEstilo}  >
                <Text style={styles.zeroTrinta}>0/30</Text>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.textCenter} >Personagens</Text>
              </View>   
            </View>   
      </View>
      </ImageBackground>
        
                
        
      </View>
    

    
  )
}