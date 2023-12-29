import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, verticalScale, scale, moderateVerticalScale } from 'react-native-size-matters';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextRed: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        top: 48
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
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
    },
    scrollContainer: {
      flex: 1,
    },
    settingsIcon: {
        position: 'absolute',
        top: 60,
        right: 30,
    },

      IconStyle: {
        margin: scale(14),
        
      },
      volumeCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonInside: {
        alignItems: 'center',
        justifyContent: 'center',
        left: scale(70),
        bottom: scale(26),
      },
      slider: {
        width: scale(130),
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'purple',
      },
      containerSlider: {
        width: scale(130),
        height: scale(25),
        borderRadius: scale(30),
        backgroundColor: 'purple',
        overflow: 'hidden',
      },
      buttonInsideEvento: {
        borderRadius: 20,
        margin: scale(14),
        bottom: hp(9.5),
        left: moderateScale(92, 1.1)
      },
      buttonClose: {
        backgroundColor: 'red',
        color: 'white'
      },
      textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
      
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      lock: {
        marginTop: 10,
        color: 'white',
        fontSize: scale(12),
      },  
    CenteredViewSettings: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        top: scale(40),
        textAlign: 'center',
    },
      modalView: {
        backgroundColor: '#C3DFE0',
        borderRadius: 20,
        padding: 35,
        top: 50,
        left: moderateScale(1, 0),
        width: wp(64.5),
        borderWidth: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

      },
      modalViewVolume: {
        backgroundColor: '#C3DFE0',
        borderRadius: scale(20),
        padding: scale(20),
        top: scale(50),
        width: scale(200),
        height: moderateScale(200),
        borderWidth: scale(2),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

      },
      header: {
        position: 'absolute',
        margin: -1,
        padding: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        textAlign: 'center',
      },
      textHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: wp(5),
        top: moderateScale(30, 0.2),
        position: 'absolute'
      },
      theme: {
        top: scale(-20),
        marginVertical: scale(10),
        textAlign: 'center'
      },
      buttonRed: {
        borderRadius: scale(20),
        width: scale(200),
        padding: scale(8),
        margin: scale(8),
        top: scale(-15)
      },
      button: {
        width: wp(20),
        padding: scale(10),
        top: moderateVerticalScale(50, 0.2),
        left: scale(15),
        marginBottom: scale(30),
      },
      modalContainer: {
        borderRadius: 10,
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
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: moderateScale(1, 2.0),

      },
      ScreenSnow: {
        padding: 10,
        borderRadius: 50,
        top: scale(28),
        fontSize: scale(40),
      },
      ScreenSnowButton: {
        padding: 8,
        borderRadius: 50,
        top: moderateVerticalScale(128, 0.2),
        left: moderateScale(122, 1.4)
      },
      buttonVolume: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 16,
        bottom: 36
      },
      buttonOpen: {
        backgroundColor: '#2196F3',
      },
      buttonClose: {
        backgroundColor: 'red',
        color: 'white'
      },
      buttonCloseVolume: {
        backgroundColor: '#2196F3',
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      buttonSharp: {
        left: scale(-10),
        top: moderateVerticalScale(40, 1.8),
      },
      textStyleJogos: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: scale(12)
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      ScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
  
      ScreenText: {
        fontSize: wp(5),
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        top: moderateScale(30, 0.90),
      },   
      ScreenTextNivel: {
        fontSize: wp(3.5),
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        top: moderateScale(30, 0.90),
      },
      ScreenTextJogar: {
        fontSize: wp(5),
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        top: moderateScale(30, 0.90),
      },
    selected: {
      backgroundColor: 'gray',
      color: 'white',
      borderRadius: 10,
    },
    LetterContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingLeft: 33,
      paddingRight: 33,
      rowGap: 10,
      bottom: 0,
      left: 0,
      right: 0,
      top: 154,
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

    Letter: {
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
    ScreenButton: {
      width: scale(220),
      height: scale(88),
      margin: scale(14),
      top: scale(16)
    },
    ButtonNiveis: {
        width: wp(60),
        height: hp(10),
        margin: scale(16),
        backgroundColor: 'red',
        justifyContent: 'center',
        borderRadius: scale(13),
        borderWidth: scale(2),
        borderColor: 'black',
    },  
    ButtonTextNiveis: {
        fontSize: scale(22),
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    }, 
    ButtonBackNiveis: {
        right: wp(38),
        bottom: hp(8)
    },
    ButtonEstilo: {
        backgroundColor: '#0081AF',
        width: scale(90),
        height: scale(90),
        marginTop: scale(8),
        marginLeft: scale(4),
        marginRight: scale(2),
        color: 'white',
        borderRadius: scale(12),
        shadowColor: 'black',
        borderWidth: scale(3),
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    containerMode: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: scale(2),
      maxWidth: wp(90),
      gap: scale(2),
  },
      Retangulo: {
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
      ScreenPalavras: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        padding: 8,
        marginHorizontal: 6,
        borderRadius: 10
      },
      ScreenPalavrasContainer: {
        marginTop: -70,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 20,
        columnGap: 40,
      },
        Chapeu: {
          width: 95,
          height: 95,
          padding: 15,
          top: 372,
          left: 20,
        },
        Dica: {
          width: 47,
          height: 67,
          padding: 2,
          top: 240,
          left: 320,
        },
    ImagemEstilo: {
        width: scale(35),
        height: scale(35),
    },
    TextCenterEstilo: {
        textAlign: 'center',
        color: 'white',
        margin: scale(5),
        fontWeight: 'bold',
        fontSize: scale(10),
    },
    ZeroTrinta: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        top: scale(38),
        fontSize: scale(10)
    },
    textMoeda: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      top: scale(38),
      fontSize: scale(10)
    },
    moedasContainer: {
      width: scale(80),
      height: scale(40),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7bdacb',
      borderWidth: scale(2),
      borderColor: '#1d5950',
      padding: 10,
      borderRadius: scale(10),
      left: scale(130),
      top: scale(60),
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      position: 'absolute',
    },
    moedasText: {
      fontSize: scale(15),
      bottom: 4
    },
    textMoedas: {
      fontSize: scale(18),
      fontWeight: 'bold',
      color: '#FFD700',  // Cor amarela para moedas
    },
    IconMoeda: {
      width: scale(20),
      height: scale(20),
      backgroundColor: 'yellow',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#b0b912',
    },
    moeda: {
      width: scale(12),
      height: scale(12),
      backgroundColor: 'yellow',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#b0b912',
      top: scale(38),
      right: scale(6)
    },
    moedasParaCompra: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      top: scale(25),
      fontSize: scale(10),
      width: scale(40),
    },
    modalContainer2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: '#007BFF',
      borderRadius: 18,
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
    modalText: {
      fontSize: scale(24),
      margin: 20,
    },
    modalButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      margin: 20,
      width: '80%'
    },
    modalButtonText: {
      color: 'white',
      fontSize: scale(24),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles

