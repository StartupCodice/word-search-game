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
        fontSize: scale(12)
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
        height: hp(50),
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
        top: moderateScale(70, 0.2),
        position: 'absolute'
      },
      buttonRed: {
        borderRadius: scale(20),
        width: scale(200),
        padding: scale(8),
        margin: scale(8),

      },
      button: {
        width: wp(20),
        padding: scale(10),
        top: moderateVerticalScale(50, 0.2),
        left: scale(15),
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
        top: moderateVerticalScale(22, 1.8),
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
        top: moderateScale(60, 0.90),
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
      width: scale(200),
      height: scale(100),
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
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }, 
    ButtonBackNiveis: {
        right: wp(38),
        bottom: hp(8)
    },
    ButtonEstilo: {
        backgroundColor: '#0081AF',
        width: scale(120),
        height: scale(120),
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
      margin: 10,
      maxWidth: wp(80),
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
        width: scale(65),
        height: scale(65),
    },
    TextCenterEstilo: {
        textAlign: 'center',
        color: 'white',
        margin: scale(5),
        fontWeight: 'bold',
        fontSize: scale(16),
    },
    ZeroTrinta: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        top: scale(65),
        fontSize: scale(14)
    },

  });

export default styles

