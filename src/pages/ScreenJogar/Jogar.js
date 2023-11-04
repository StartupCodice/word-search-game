import React from "react";
import { View, Text, TouchableHighlight, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../Home/style";

export function Jogar() {
    return (
        <View style={styles.container}>
                <ImageBackground source={require('../../assets/bg3.jpeg')} style={styles.imageBackground}>
                    <View style={styles.buttonContainer}>
                       <Text style={styles.buttonTextRed}>
                            batata assada
                        </Text> 
                    </View>    
                </ImageBackground>
            </View>
    )
}