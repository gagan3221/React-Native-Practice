import React , {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CounterScreen from "./screens/counter_screen";

const Stack = createNativeStackNavigator();

export default function MyApp(){
  return(
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown : true}}>
        <Stack.Screen name="CounterScreen" component={CounterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}