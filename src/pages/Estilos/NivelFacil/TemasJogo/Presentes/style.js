import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet} from "react-native";
import { moderateScale, verticalScale, scale, moderateVerticalScale } from 'react-native-size-matters';

  const styles = StyleSheet.create({
      palavrasContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 20,
        columnGap: 20,
        top: hp(58),
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
        rowGap: 10,
        bottom: moderateVerticalScale(25, 1.5),
        padding: 10,
      },
      wordFound: {
        color: 'black',
        padding: 10,
      },
      cacaContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
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
        fontSize: wp(5),
        width: scale(32),
      },   
      ScreenText: {
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
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
        retangulo: {
        width: scale(290),
        height: scale(330),
        borderColor: 'white',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: scale(40)
        },
        button: {
          width: wp(20),
          padding: scale(20),
          bottom: moderateVerticalScale(35, 0.6),
          right: scale(2),
        },
        palavras: {
          fontSize: scale(18),
          color: 'white',
          fontWeight: 'bold',
          padding: scale(5),
          borderRadius: scale(20)
        },
          Dica: {
            width: scale(80),
            height: scale(54),
            top: moderateScale(50, 0.5),
            left: scale(120),
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          },
          dicaNumber: {
            backgroundColor: 'yellow',
            borderRadius: 50,
            width: scale(20),
            height: scale(20),
            textAlign: 'center',
            fontSize: scale(12),
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
          },
          moedasContainer: {
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: 10,
            borderRadius: 10,
          },
          moedasText: {
            fontSize: 16,
          },
          textMoedas: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFD700',  // Cor amarela para moedas
          },
    });

  export default styles