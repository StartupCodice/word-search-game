import React, {useState} from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './style';
import { ModalEvento } from '../../components/ModalEvento';
import { ModalSettings } from './../../components/ModalSettings';
import Botoes from '../../components/Botoes';

export default function Home({ navigation }) {
    
    

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