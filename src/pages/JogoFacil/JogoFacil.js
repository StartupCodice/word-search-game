import React, {useState} from 'react';
import { View, Text, Modal, Alert, Pressable, TouchableHighlight, TouchableOpacity, ImageBackground } from "react-native";
import styles from './style';

export function JogoFacil() {
        return (
          <View style={styles.container}>
                <ImageBackground source={require('../../assets/bg1.jpeg')} style={styles.imageBackground}>
                    <View style={styles.buttonContainer}>
                       <Text style={styles.buttonTextRed}>
                            acertou
                        </Text> 
                    </View>    
                </ImageBackground>
            </View>
        );
      };   