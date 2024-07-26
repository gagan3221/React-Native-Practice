import React , {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CounterScreen from "./screens/counter_screen";
import { MainScreen } from "./screens/main_screen";
import {GreetingParent} from "./screens/greeting_screen"

const Stack = createNativeStackNavigator();

export default function MyApp(){
  return(
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown : true}}>
      <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="CounterScreen" component={CounterScreen}/>
        <Stack.Screen name="GreetingScreen" component={GreetingParent}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}