import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, verticalScale, scale, moderateVerticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('window');
const CELL_SIZE = Math.floor(280 * 0.1);
const CELL_PADDING = Math.floor(CELL_SIZE * 0.1);


const styles = StyleSheet.create({

  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    padding: CELL_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cellText: {
    fontSize: CELL_SIZE - CELL_PADDING * 4,
  },
  palavrasContainer: {
    top: hp(3),
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
    marginTop: 40,
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
    fontSize: wp(6),
    width: wp(9),
    zIndex: 1
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
    width: scale(290),
    height: scale(330),
    borderColor: 'white',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    top: scale(36)
  },
  button: {
    width: wp(20),
    paddingLeft: scale(20),
    bottom: moderateVerticalScale(30, 0.6),
    right: scale(2),
  },
  palavras: {
    fontSize: scale(18),
    color: 'white',
    fontWeight: 'bold',
    padding: scale(5),
    borderRadius: scale(20)
  },
  title: {
    fontSize: scale(30),
    color: 'white',
    fontWeight: 'bold',
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
  },
  moedasContainer: {
    width: scale(80),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7bdacb',
    borderWidth: 2,
    borderColor: '#1d5950',
    padding: 10,
    borderRadius: 10,
    left: scale(130),
    top: scale(5),
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  moedasText: {
    fontSize: 16,
  },
  textMoedas: {
    fontSize: 16,
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
});

export default styles