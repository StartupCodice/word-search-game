import React, { useState, useEffect } from "react";
import { 
    View, 
    Modal,
    TouchableHighlight, 
    TouchableOpacity,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../pages/Home/style";
import { useMusicGlobal } from "./musicContext";
import Slider from '@react-native-community/slider';
import {scale } from "react-native-size-matters";

export function ModalSettings(){
    const [settingsVisible, setSettingsVisible] = useState(false);
    const {playMusic, handleVolumeChange} = useMusicGlobal();
    const [volume] = useState(1.0);

      useEffect(() => {
        if (settingsVisible) {
          playMusic();
        }
      }, [settingsVisible]);
    return (
    
        <TouchableOpacity style={styles.settingsIcon} onPress={() => setSettingsVisible(true)}>
                    <Modal
                            animationType="fade"
                            transparent={true}
                            visible={settingsVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setSettingsVisible(!settingsVisible);
                            }}>
                            <View style={styles.CenteredViewSettings}>
                                <View style={styles.modalViewVolume}>
                                <TouchableHighlight
                                    style={styles.buttonInside}
                                    underlayColor="null"
                                    onPress={() => setSettingsVisible(!settingsVisible)}>
                                    <Ionicons style={styles.closeSharp} name="close-sharp" size={scale(40)} color="black" />
                                </TouchableHighlight>
                                <View style={styles.volumeCenter}>
                                    
                                    <Ionicons style={styles.IconStyle}  name={'volume-high'} size={scale(30)} color="black"/>
                                    <View style={styles.containerSlider}>
                                    <Slider
                                        style={styles.slider}
                                        minimumValue={0}
                                        maximumValue={1}
                                        value={volume}
                                        onValueChange={handleVolumeChange}

                                    />
                                    </View>
                                    
                                </View>
                                    
                                
                                </View>
                                
                            </View>
                            
                            </Modal>
                            
                        <Ionicons name="settings-sharp" size={40} color="white" />
                    </TouchableOpacity>
    )
}