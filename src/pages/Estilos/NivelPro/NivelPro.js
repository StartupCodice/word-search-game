import React from 'react'
import { Text, View, Image, TouchableOpacity, TouchableHighlight, ImageBackground, ScrollView} from 'react-native';
import styles from '../style';
import { Ionicons } from '@expo/vector-icons';

export function NivelPro({ navigation }){
  return(
    
      <View style={styles.container}>   
        <TouchableOpacity style={styles.headerBack}>
          <Ionicons 
            name="arrow-back" 
            size={45} 
            color="white" 
            style={styles.button}
            onPress={() => navigation.navigate('Estilos')}/>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonMode} >
            <Text style={styles.textMode}>Fácil</Text>
            <Text style={styles.textMode}>6x8</Text>
          </View>
          <View style={styles.buttonMode}>
            <Text onPress={()=> navigation.navigate('Medio')} style={styles.textMode}>Médio</Text>
            <Text style={styles.textMode}>8x10</Text>
          </View>
          <View  style={styles.buttonMode}>
            <Text onPress={()=> navigation.navigate('Dificil')} style={styles.textMode}>Difícil</Text>
            <Text style={styles.textMode}>9x12</Text>
          </View>
          <View  style={styles.buttonMode}>
            <Text onPress={()=> navigation.navigate('Pro')} style={styles.textMode}>Pró</Text>
            <Text style={styles.textMode}>11x14</Text>
          </View>
        </View> 

        <View style={styles.containerMode}>
          <View >
            <TouchableOpacity style={styles.estiloButton}>
             <ImageBackground style={styles.imagemEstilo}  >
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
          <View >
            <TouchableOpacity style={styles.estiloButton}>
             <ImageBackground source={require('./../../../assets/bolas-de-natal.png')} style={styles.imagemEstilo}  >
             <Text style={styles.zeroTrinta}>0/30</Text>
             </ImageBackground>
           </TouchableOpacity>
           <Text style={styles.textCenter} >Atividades</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.estiloButton}>
             <ImageBackground source={require('./../../../assets/floco-de-neve.png')} style={styles.imagemEstilo}  >
             <Text style={styles.zeroTrinta}>0/30</Text>
             </ImageBackground>
           </TouchableOpacity>
           <Text style={styles.textCenter} >Clima</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.estiloButton}>
             <ImageBackground source={require('./../../../assets/presenteNatal.png')} style={styles.imagemEstilo}  >
             <Text style={styles.zeroTrinta}>0/30</Text>
             </ImageBackground>
           </TouchableOpacity>
           <Text style={styles.textCenter} >natal</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.estiloButton}>
             <ImageBackground source={require('./../../../assets/arvoresNatal.png')} style={styles.imagemEstilo}  >
             <Text style={styles.zeroTrinta}>0/30</Text>
             </ImageBackground>
           </TouchableOpacity>
           <Text style={styles.textCenter} >natal</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.estiloButton}>
             <ImageBackground source={require('./../../../assets/ComidasNatal.png')} style={styles.imagemEstilo}  >
             <Text style={styles.zeroTrinta}>0/30</Text>
             </ImageBackground>
           </TouchableOpacity>
           <Text style={styles.textCenter} >natal</Text>
          </View>
        </View>   
                
        
      </View>
    

    
  )
}