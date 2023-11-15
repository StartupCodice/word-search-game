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
import { JogoFacil } from "../pages/JogoFacil/JogoFacil";
import { useNavigation } from '@react-navigation/native';

export function ModalEvento(){
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
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
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}> 
                                <View style={styles.header}>
                                    <Text style={styles.textHeader}>
                                        JOGOS DIARIOS
                                    </Text>
                                </View>
                                <TouchableHighlight
                                        style={styles.buttonInsideEvento}
                                        underlayColor="null"
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Ionicons style={styles.textStyle} name="close-sharp" size={36} color="black" />
                                    </TouchableHighlight>
                                <Pressable
                                    underlayColor="null"            
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={ () => navigation.navigate('JogoFacil') ?? setModalVisible(!modalVisible)}>
                                    
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