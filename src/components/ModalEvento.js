import React, { useState } from "react";
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


export function ModalEvento({ navigation }){
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View style={styles.centeredView}>
                            <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>

                                <TouchableHighlight
                                    style={styles.buttonInside}
                                    underlayColor="null"
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Ionicons style={styles.textStyle} name="close-sharp" size={36} color="black" />
                                </TouchableHighlight>
                                <Pressable
                                    underlayColor="null"            
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={ () => navigation.navigate('JogoFacil') }>
                                    <Text style={styles.textStyleJogos}>FÁCIL</Text>
                                </Pressable>
                                <Pressable
                                    underlayColor="null"            
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyleJogos}>MÉDIO</Text>
                                </Pressable>
                                <Pressable
                                    underlayColor="null"            
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyleJogos}>DÍFICIL</Text>
                                </Pressable>
                                </View>
                            </View>
                            </Modal>
                            <Pressable
                            style={[styles.buttonSnow, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}>
                                <Ionicons name="snow" size={24} color="white" style={styles.textStyle} />
                            </Pressable>
                    </View>
    )
}