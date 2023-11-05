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
        left: 108,
        display: 'flex',
        width: 200,
        height: 200,
        borderWidth: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      button: {
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
      buttonOpen: {
        backgroundColor: '#2196F3',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
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
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});

export default styles