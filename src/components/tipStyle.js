import { StyleSheet } from "react-native";
import { moderateScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
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
})

export default styles;