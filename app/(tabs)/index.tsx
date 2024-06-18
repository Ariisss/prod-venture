import { View,Text, SafeAreaView } from "react-native";
import { colors, globalStyles } from "@/src/utils/GlobalStyles";


export default function HomeScreen(){
    return(
        <SafeAreaView style={globalStyles.topCenterView}>
            <Text>hi</Text>
            <Text>Hello</Text>
        </SafeAreaView>
    )
} 