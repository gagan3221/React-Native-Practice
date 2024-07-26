import React from "react";
import { View , StyleSheet , Text } from "react-native";
import PropTypes from 'prop-types';
import { styles } from "./assets/stylesheet";


export const GreetingChild = (props) =>{
    return(
        <View>
            <Text style = {styles.propText}>
            Hello , {props.name}!!!!
        </Text>
        </View>
    )
}
GreetingChild.defaultProps = {
    name : "HAGAN"
}
GreetingChild.propTypes = {
    name : PropTypes.string
}
export  function GreetingParent(){
    return(
        <View style={{flex:1}}>
        <GreetingChild name = "GAGAN"/>
        <GreetingChild name = "Okay"/>
        <GreetingChild/>
    </View>
    )
    
}

