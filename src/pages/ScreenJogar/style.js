import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      width: "100%",
      },
      retangulo: {
      position: 'absolute',
      top: 51,
      left: 23,
      bottom: 0,
      right: 23,
      width: '89%',
      height: '89%',
      marginTop: 169,
      marginLeft: -2,
      marginRight: -2,
      borderColor: 'white',
      borderRadius: 7,
      },
      button: {
        width: 79,
        height: 79,
        padding: 15,
        bottom: 120,
        left: 5,
      },
      palavras: {
        fontSize: 17,
        color: 'white',
        marginTop: -85,
        marginLeft: 90,
        marginRight: 65,
        fontWeight: 'bold',
      },
      palavrasdois: {
        fontSize: 17,
        color: 'white',
        marginTop: 1,
        marginLeft:  90,
        marginRight: 21,
        fontWeight: 'bold',
      },
      palavrastres: {
        fontSize: 17,
        color: 'white',
        marginTop: 1,
        marginLeft:  90,
        marginRight: 21,
        fontWeight: 'bold',
      },
        chapeu: {
          width: 95,
          height: 95,
          padding: 15,
          top: 286,
          left: 7,
        },
        dica: {
          width: 47,
          height: 67,
          padding: 2,
          top: 160,
          left: 330,
        },
  });

export default styles