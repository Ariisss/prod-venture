import { View, Text, StyleSheet } from "react-native";


const Main = () => {
    return (
        <View>
            <Text>Hi, I'm a React Native app!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Main;