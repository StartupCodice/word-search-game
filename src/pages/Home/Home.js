import React, {useEffect} from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './style';
import { ModalEvento } from '../../components/ModalEvento';
import { ModalSettings } from './../../components/ModalSettings';
import Botoes from '../../components/Botoes';
import LevelComponent from '../../components/storageLevel';

export default function Home({ navigation }) {
    const { level, addLevel } = LevelComponent();

    useEffect(() => {
        if (level == null) addLevel(1);
    }, ); 
    
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