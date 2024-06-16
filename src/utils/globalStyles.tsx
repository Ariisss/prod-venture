import { StyleSheet } from "react-native";

const colors = {
    white: '#ffffff',
    black: '#151515',
    blue: '#2e9bff',
    purple: '#af60ff',
    red: '#ff5454'
}

const globalStyles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        textAlign: 'center'
    },
    topCenterView: {
        flex: 1,
        alignItems: 'center'
    },
    normalText: {
        fontSize: 18
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export { colors, globalStyles }