import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  Alert,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { scale } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';


export function Infinito({ modalVisible, setModalVisible }) {
  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.ScreenSnow}>
            <View style={styles.modalView}>
              
                <Text style={styles.textHeader}>INFINITO</Text>
              
              
              <TouchableHighlight
                style={styles.buttonInsideEvento}
                underlayColor="null"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons
                  style={styles.buttonSharp}
                  name="close-sharp"
                  size={scale(42)}
                  color="black"
                />
              </TouchableHighlight>
              <Pressable
                underlayColor="null"
                style={{
                  backgroundColor: "#f9cf09",
                  color: "black",
                  borderRadius: scale(20),
                  width: scale(200),
                  padding: scale(8),
                  margin: scale(8),
                }}
                onPress={() => navigation.navigate('InfinitoFacil') ?? setModalVisible(!modalVisible)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "black",
                    fontSize: scale(12),
                  }}
                >
                  Fácil 6x8
                </Text>
              </Pressable>
              <Pressable
                underlayColor="null"
                style={{
                  backgroundColor: "#dcb917",
                  color: "white",
                  borderRadius: scale(20),
                  width: scale(200),
                  padding: scale(8),
                  margin: scale(8),
                }}
                onPress={() => navigation.navigate('InfinitoMedio') ?? setModalVisible(!modalVisible)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "black",
                    fontSize: scale(12),
                  }}
                >
                  Médio 8x8
                </Text>
              </Pressable>
              <Pressable
                underlayColor="null"
                style={{
                  backgroundColor: "#baa029",
                  color: "black",
                  borderRadius: scale(20),
                  width: scale(200),
                  padding: scale(8),
                  margin: scale(8),
                }}
                onPress={() => navigation.navigate('InfinitoDificil') ?? setModalVisible(!modalVisible)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "black",
                    fontSize: scale(12),
                  }}
                >
                  Difícil 10x10
                </Text>
              </Pressable>
              <Pressable
                underlayColor="null"
                style={{
                  backgroundColor: "#917c1b",
                  color: "black",
                  borderRadius: scale(20),
                  width: scale(200),
                  padding: scale(8),
                  margin: scale(8),
                }}
                onPress={() => navigation.navigate('InfinitoPro') ?? setModalVisible(!modalVisible)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "black",
                    fontSize: scale(12),
                  }}
                >
                  Pró 12x12
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
     
    </View>
  );
}
