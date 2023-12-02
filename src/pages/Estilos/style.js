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
    ButtonEstilo: {
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
  ImagemEstilo: {
    width: 74,
    height: 74,
},
    containerMode: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        maxWidth: '90%',
    },
    textCenter: {
        textAlign: 'center',
        color: 'white',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 16,

    },
    TextCenterEstilo: {
      textAlign: 'center',
      color: 'white',
      margin: 10,
      fontWeight: 'bold',
      fontSize: 16,
  },
  ZeroTrinta: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      top: 78,
      fontSize: 12
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