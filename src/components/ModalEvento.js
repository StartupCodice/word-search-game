import React, { useState, useEffect } from "react";
import { 
    Text, 
    View, 
    Modal,
    TouchableHighlight, 
    Alert,
    Pressable, 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../pages/Home/style";
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import ThemeStorage from './storageTheme';
import LevelStorage from './storageLevel';

const moment = require('moment');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const themes = ['Presentes', 'Decorações', 'Alimentos', 'Personagens'];

export function ModalEvento(){
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [newTheme, setNewTheme] = useState(false);
    const [hours, setHours] = useState('');
    const { getTheme, addTheme } = ThemeStorage();
    const [theme, setTheme] = useState('');
    const { level, addLevel } = LevelStorage();

    const calculateTimeUntilMidnight = () => {
        const now = moment();
        const midnight = moment().endOf('day');
        const duration = moment.duration(midnight.diff(now));
    
        const hours = Math.floor(duration.asHours());
        const minutes = Math.floor(duration.minutes());
        const seconds = Math.floor(duration.seconds());
    
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    const chooseRandomTheme = () => {
        const randomIndex = Math.floor(Math.random() * themes.length);
        const theme = themes[randomIndex];
        addTheme(theme);
        setTheme(theme);
    };

    useEffect(() => {
        if (theme == null) chooseRandomTheme();
        const intervalId = setInterval(() => {
            setHours(calculateTimeUntilMidnight());
        }, 1000);

        const midnightIntervalId = setInterval(() => {
            chooseRandomTheme();
        }, 24 * 60 * 60 * 1000);

        getTheme().then((theme) => {
            setTheme(theme);
        });

        return () => {
            clearInterval(intervalId);
            clearInterval(midnightIntervalId);
        }
    }, []);

    return (
        

        <View style={styles.centeredView} >        
                                <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                    setModalVisible(!modalVisible);
                                }}>
                               <View style={styles.modalContainer}>     
                                <View style={styles.ScreenSnow}>
                                    <View style={styles.modalView}> 
                                        <Text style={styles.textHeader}>
                                            JOGOS DIARIOS
                                        </Text>                                 
                                        <TouchableHighlight
                                            style={styles.buttonInsideEvento}
                                            underlayColor="null"
                                            onPress={() => setModalVisible(!modalVisible)}>
                                            <Ionicons style={styles.buttonSharp} name="close-sharp" size={scale(30)} color="black" />
                                        </TouchableHighlight>
                                        <View style={styles.theme}>
                                            <Text style={{ fontSize: wp(4), }}>Tema de hoje: {theme}</Text>
                                        </View>
                                        <Pressable
                                            underlayColor="null"            
                                            style={[styles.buttonRed, styles.buttonClose]}
                                            onPress={() => navigation.navigate('EventoFacil') ?? setModalVisible(!modalVisible)}>
                                            
                                            <Text style={styles.textStyleJogos}>FÁCIL</Text>
                                        </Pressable>
                                        <Pressable
                                            disabled={level < 24}
                                            underlayColor="null"
                                            style={[styles.buttonRed, styles.buttonClose]}
                                            onPress={() => navigation.navigate('EventoMedio') ?? setModalVisible(!modalVisible)}>
                                            <Text style={styles.textStyleJogos}>MÉDIO</Text>
                                            {
                                                level < 24 ? 
                                                    <Text style={[styles.textStyleJogos, { marginTop: scale(3) }]}>Desbloqueado no Nível 25</Text>
                                                : null
                                            }
                                        </Pressable>
                                        <Pressable
                                            disabled={level < 49}
                                            underlayColor="null"            
                                            style={[styles.buttonRed, styles.buttonClose]}
                                            onPress={() =>navigation.navigate('EventoPro') ?? setModalVisible(!modalVisible)}>
                                            <Text style={styles.textStyleJogos}>PRÓ</Text>
                                            {
                                                level < 49 ? 
                                                    <Text style={[styles.textStyleJogos, { marginTop: scale(3) }]}>Desbloqueado no Nível 50</Text>
                                                : null
                                            }
                                        </Pressable>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: wp(4) }}>{hours}</Text>
                                        </View>
                                    </View>
                                </View>
                              </View>  
                                </Modal>
                                <Pressable
                                style={[styles.ScreenSnowButton, styles.buttonOpen]}
                                onPress={() => setModalVisible(true)}>
                                    <Ionicons name="snow" size={scale(18)} color="white" style={styles.textStyle} />
                                </Pressable>
                    </View>
    )
}