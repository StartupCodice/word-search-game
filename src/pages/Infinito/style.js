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
    button: {
        padding: 10,
        top: 20,
        left: 10,
        position: 'absolute'
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
});

export default styles