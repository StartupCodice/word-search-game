import { StyleSheet } from "react-native";

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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        position: 'absolute',
        top: 90,
        display: 'flex',

      },
      modalView: {
        backgroundColor: '#C3DFE0',
        borderRadius: 20,
        padding: 35,
        top: 50,
        left: 74,
        width: 260,
        height: 300,
        borderWidth: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      modalViewVolume: {
        backgroundColor: '#C3DFE0',
        borderRadius: 20,
        padding: 35,
        top: 50,
        left: 108,
        width: 200,
        height: 200,
        borderWidth: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      header: {
        backgroundColor: '#2196F3',
        width: 256,
        height: 50,
        position: 'absolute',
        margin: -1,
        padding: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      textHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18.5,
        top: 12
      },
      button: {
        borderRadius: 20,
        width: 200,
        padding: 10,
        elevation: 2,
        margin: 16,
        bottom: 46,
        right: 24
      },
      buttonSnow: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 16,
      },
      buttonVolume: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 16,
        bottom: 36
      },
      buttonInside: {
        borderRadius: 20,
        margin: 16,
        bottom: 40,
        left: 58,
      },
      buttonInsideEvento: {
        borderRadius: 20,
        margin: 16,
        bottom: 43,
        left: 98,
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
      textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
      textStyleJogos: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});

export default styles