import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E34A0',
    },
    headerBack: {
        flex: 1,
        backgroundColor: '#2DC7FF',
        height: 100,
        width: '100%'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#0081AF'
    },
    containerMode: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
        marginTop: 10,
    },
    estiloButton: {
        backgroundColor: '#0081AF',
        width: 120,
        height: 90,
        marginTop: 6,
        marginLeft: 8,
        marginRight: 4,
        color: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        borderWidth: 1,
        shadowOpacity: 2,
        shadowRadius: 5
    },
    textCenter: {
        textAlign: 'center',
        color: 'white',
        margin: 4,
        fontWeight: 'bold',
        fontSize: 16,

    },
    zeroTrinta: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        top: 58,
        fontSize: 12

    },
    imagemEstilo: {
        width: 54,
        height: 54,
        left: 30,
        top:3
    },
    buttonMode: {
        backgroundColor: '#0081AF',
        width: 94,
        height: 85,
        margin: 4,
        color: 'white',
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1,
    },
    textMode: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: 16,
        fontSize: 20,
        fontWeight: 'bold'
        
    },
    button: {
        padding: 10,
        top: 36,
        left: 4,

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