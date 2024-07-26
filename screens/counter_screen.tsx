import React , {useState} from "react";
import { View , Text , StyleSheet , TouchableOpacity} from "react-native";
import {styles} from "./assets/stylesheet"

export default function CounterScreen(){
    const [count , setCount] = useState(0);
    return(
        <View style = {styles.counterContainer}>
            <View style = {styles.countTextContainer}>
            <Text style = {styles.countText}>
                The value of count is : {count}
            </Text>
            </View>
            <View style={{flexDirection:'row' , alignSelf : 'center' }}>
            <TouchableOpacity onPress={()=>setCount(count+1)} style={styles.counterButton}>
                <Text style={styles.counterButtonLabel}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setCount(count-1)} style={styles.counterButton}>
                <Text style={styles.counterButtonLabel}>Decrement</Text>
            </TouchableOpacity>
            </View>
            

        </View>
    )
}