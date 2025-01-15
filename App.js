import React from "react";
import { Text, View } from "react-native";
import Log1 from './src/Authentication/Log1'
import Log2 from './src/Authentication/Log2'
import Log3 from './src/Authentication/Log3'
import Reg1 from './src/Authentication/Reg1'
import Reg2 from './src/Authentication/Reg2'


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App () {
    return(
        <Stack.Navigator
        initialRouteName="Reg1"
        >
        <Stack.Screen 
        options={{
            headerShown:false
        }}
        name="Reg1"
         component={Reg1} />

        <Stack.Screen 
         options={{
            headerShown:false
        }}
        name="Reg2" component={Reg2} />


    </Stack.Navigator>
    )
}
