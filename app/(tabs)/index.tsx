import { View,Text, SafeAreaView } from "react-native";
import { colors } from "@/src/utils/GlobalStyles";


export default function HomeScreen(){
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: colors.purple}}>
            <Text>hi</Text>
            <Text>Hello</Text>
        </SafeAreaView>
    )
} 