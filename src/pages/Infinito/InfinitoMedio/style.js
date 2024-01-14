import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, verticalScale, scale, moderateVerticalScale } from 'react-native-size-matters';
const CELL_SIZE = Math.floor(Dimensions.get('window').width * 0.1);
const CELL_PADDING = Math.floor(CELL_SIZE * 0.1);


const styles = StyleSheet.create({

  cell: {
    width: scale(32),
    height: scale(29),
    padding: CELL_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(0.5)
  },
  row: {
    flexDirection: 'row',
  },
  cellText: {
    fontSize: wp(5),
  },
  palavrasContainer: {
    top: hp(50),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
    columnGap: 20,
  },
  selected: {
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 10,
  },
  LetterContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    // rowGap: 10,
    // bottom: moderateVerticalScale(25, 1.5),
    marginTop: scale(10),
  },
  GestureContainer: {
    zIndex: 100
  },
  wordFound: {
    color: 'black',
    padding: 10,
  },
  cacaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 40
  },
  caca: {
    flexWrap: 'wrap',
    flexDirection: 'row',
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
    width: scale(270),
    height: moderateScale(260, 1),
    borderRadius: scale(7),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    bottom: scale(90)

  },
  button: {
    width: wp(20),
    padding: scale(20),
    bottom: moderateVerticalScale(30, 0.6),
    right: scale(2),
  },
  palavras: {
    fontSize: scale(16),
    color: 'white',
    fontWeight: 'bold',
    padding: scale(1),
    borderRadius: scale(20),
    margin: scale(2)
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
    left: scale(12),
    top: scale(12)
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
    fontSize: scale(24),
    margin: 20,
  },
  modalGanhos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
  modalVoltarHome: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
    bottom: 150,
    right: 100
    
  },
  textTempo: {
    fontSize: scale(18),
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
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
    borderColor: '#b0b912'
  },
  textMoeda: {
    fontSize: scale(20),
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default styles