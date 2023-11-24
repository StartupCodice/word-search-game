import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerBack: {
        backgroundColor: '#2DC7FF',
        height: '14%',
        width: '100%'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#0081AF'
    },
    containerMode: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 50,
        maxWidth: '90%',
    },
    estiloButton: {
        backgroundColor: '#0081AF',
        width: 140,
        height: 140,
        marginTop: 6,
        marginLeft: 8,
        marginRight: 4,
        color: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        borderWidth: 3,
        borderColor: 'white',
        shadowOpacity: 2,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    textCenter: {
        textAlign: 'center',
        color: 'white',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 16,

    },
    zeroTrinta: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        top: 78,
        fontSize: 12

    },
    imagemEstilo: {
        width: 74,
        height: 74,
    },
    buttonMode: {
        backgroundColor: '#0081AF',
        width: 204,
        height: 85,
        margin: 10,
        color: 'white',
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1,
    },
    textMode: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: 16,
        fontSize: 20,
        fontWeight: 'bold'
        
    },
    button: {
        padding: 10,
        top: 36,
        left: 4,

      },
    buttonNiveis: {
        padding: 6,
        right: 160,
        bottom: 60
    },
    buttonTextGreen: {
        fontSize: 20,
        color: 'darkgreen',
        textAlign: 'center',
        fontWeight: 'bold',
        top: 48
    },
    buttonTextYellow: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        top: 48
    },
    settingsIcon: {
        top: 60,
        right: 30,
    },
    timer: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    timerText: {
        fontSize: 30,
    },

    palavrasContainer: {
      marginTop: '-20%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 20,
      columnGap: 40,
    },
    selected: {
      backgroundColor: 'gray',
      color: 'white',
    },
    lettersContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
      paddingLeft: 33,
      paddingRight: 33,
      rowGap: 10,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      marginBottom: 70,
    },
    wordFound: {
      color: 'black',
      padding: 10,
    },
    cacaContainer: {
      marginTop: '20vh',
      flex: 1,
      width: '90%',
      height: '100%',
    },
    caca: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    letter: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      width: '100%',
      height: '15%',
    },
    sendLetter: {
      flexDirection: 'row',
      marginTop: 30,
      gap: 20,
      justifyContent: 'center',
    },
    inputLetter: {
      width: '100%',
      height: 40,
      paddingLeft: 10, 
      backgroundColor: 'gray',
      color: 'black',
    },
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
      top: '8%',
      left: 23,
      bottom: 0,
      right: 23,
      width: '91%',
      height: '93%',
      marginTop: 169,
      marginLeft: -2,
      marginRight: -2,
      borderColor: 'white',
      borderRadius: 7,
      },
     
      palavras: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
      },
      palavrasdois: {
        fontSize: 20,
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
          top: 300,
          left: 7,
        },
        dica: {
          width: 47,
          height: 67,
          padding: 2,
          top: '245%',
          left: '81%',
        },
        buttonRed: {
          width: 240,
          height: 68,
          margin: 36,
          backgroundColor: 'red',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 3,
          borderColor: 'black',
        },
      
        buttonText: {
          fontSize: 26,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
      },
  });

export default styles