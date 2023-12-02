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
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';



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
                                    <Pressable
                                        underlayColor="null"            
                                        style={[styles.buttonRed, styles.buttonClose]}
                                        onPress={ () => setModalVisible(!modalVisible)}>
                                        
                                        <Text style={styles.textStyleJogos}>EM BREVE <Ionicons style={styles.lock} name="md-lock-closed-sharp" size={16} color="black" /></Text>
                                    </Pressable>
                                    <Pressable
                                        underlayColor="null"
                                        style={[styles.buttonRed, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyleJogos}>EM BREVE <Ionicons style={styles.lock} name="md-lock-closed-sharp" size={16} color="black" /></Text>
                                    </Pressable>
                                    <Pressable
                                        underlayColor="null"            
                                        style={[styles.buttonRed, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyleJogos}>EM BREVE <Ionicons style={styles.lock} name="md-lock-closed-sharp" size={16} color="black" /></Text>
                                    </Pressable>
                                    </View>
                                </View>
                              </View>  
                                </Modal>
                                <Pressable
                                style={[styles.ScreenSnow, styles.buttonOpen]}
                                onPress={() => setModalVisible(true)}>
                                    <Ionicons name="snow" size={scale(20)} color="white" style={styles.textStyle} />
                                </Pressable>
            
                            
                    </View>
    )
}