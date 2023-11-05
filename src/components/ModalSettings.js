import React, { useState } from "react";
import { 
    View, 
    Modal,
    TouchableHighlight, 
    TouchableOpacity,
    Alert,
    Pressable,    
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../pages/Home/style";


export function ModalSettings(){
    const [settingsVisible, setSettingsVisible] = useState(false);
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
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                <TouchableHighlight
                                    style={styles.buttonInside}
                                    underlayColor="null"
                                    onPress={() => setSettingsVisible(!settingsVisible)}>
                                    <Ionicons style={styles.textStyle} name="close-sharp" size={56} color="black" />
                                </TouchableHighlight>
                                <Pressable
                                    style={[styles.buttonVolume, styles.buttonCloseVolume]}
                                    onPress={() => setSettingsVisible(!settingsVisible)}>
                                    <Ionicons style={styles.textStyle} name="volume-high" size={24} color="black" />
                                </Pressable>
                                </View>
                            </View>
                            </Modal>
                        <Ionicons name="settings-sharp" size={40} color="white" />
                    </TouchableOpacity>
    )
}