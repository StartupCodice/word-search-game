import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    palavrasContainer: {
      marginTop: -70,
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
      justifyContent: 'center',
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
      marginTop: 150,
      width: 100,
      height: 100,
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
      width: 40,
    },
    sendLetter: {
      flexDirection: 'row',
      marginTop: 30,
      gap: 20,
      justifyContent: 'center',
    },
    inputLetter: {
      width: 200,
      height: 40,
      paddingLeft: 10, 
      backgroundColor: 'gray',
      color: 'black',
    },
    buttonLetter: {
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
      top: 51,
      left: 23,
      bottom: 0,
      right: 23,
      width: '92%',
      height: '80%',
      marginTop: 268,
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
        fontSize: 28,
        color: 'white',
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
          top: 372,
          left: 20,
        },
        dica: {
          width: 47,
          height: 67,
          padding: 2,
          top: 240,
          left: 320,
        },
        modalContainer: {
          backgroundColor: 'white',
          borderRadius: 10,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          
        },
        modalContainer2: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 5,
          borderColor: '#007BFF',
          borderRadius: 18,

        },
      
        modalText: {
          fontSize: 32,
          margin: 20,
        },
      
        modalButton: {
          backgroundColor: '#007BFF',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          margin: 20,
        },
      
        modalButtonText: {
          color: 'white',
          fontSize: 24,
        },
        textTempo: {
          fontSize: 28,
          fontWeight: 'bold',
        }
  });

export default styles