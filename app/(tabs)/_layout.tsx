import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color}) => <MaterialIcons name='home' size={24} color={color}/>
            }}/>
        </Tabs>
    )
}