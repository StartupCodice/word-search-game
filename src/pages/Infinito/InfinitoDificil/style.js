import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, verticalScale, scale, moderateVerticalScale } from 'react-native-size-matters';
const {height, width} = Dimensions.get('window');

  const styles = StyleSheet.create({
      palavrasContainer: {
        top: hp(54),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: scale(12),
        paddingHorizontal: scale(10),

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
        bottom: moderateVerticalScale(30, 1.0),
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
        fontSize: scale(13),
        width: scale(21),
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
        width: scale(280),
        height: scale(340),
        borderColor: 'white',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp(13)
        },
        button: {
          width: wp(20),
          padding: scale(20),
          bottom: moderateVerticalScale(30, 0.6),
          right: scale(2),
        },
        palavras: {
          fontSize: scale(13),
          color: 'white',
          fontWeight: 'bold',
          marginBottom: scale(12),
          borderRadius: scale(20),
        },
          Dica: {
            width: scale(80),
            height: scale(54),
            top: moderateScale(50, 1),
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
          }
    });

  export default styles