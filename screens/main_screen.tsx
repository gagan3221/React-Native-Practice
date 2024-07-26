import React from "react";
import { TouchableOpacity, View , Text } from "react-native";
import { styles } from "./assets/stylesheet";
import { useNavigation } from "@react-navigation/native";


export function MainScreen(){
    const navigator = useNavigation();
    return(
        <View style = {styles.counterContainer}>
            <View style = {styles.counterScreenButton}>
            <TouchableOpacity onPress={()=>navigator.navigate("CounterScreen")}>
                <Text style = {styles.counterButtonLabel}>
                    Counter Screen
                </Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.propsScreenButton}>
            <TouchableOpacity onPress={()=> navigator.navigate("GreetingScreen")}>
                <Text style = {styles.counterButtonLabel}>
                    Props Screen
                </Text>
            </TouchableOpacity>
            </View>
    


        </View>
    )
}