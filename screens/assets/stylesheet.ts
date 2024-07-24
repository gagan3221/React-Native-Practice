
import { StyleSheet  } from "react-native";


export const styles = StyleSheet.create({
    counterContainer : {
        flex : 1,
    },
    counterButton : {
        backgroundColor : '#36454F',
        width : 120 ,
        height : 40,
        alignSelf : 'center',
        alignItems : 'center'
    },
    counterButtonLabel : {
        color : 'white' ,
        fontSize : 22,
        fontWeight : 'bold'
    },
    countTextContainer : {
        alignSelf : "center",
        marginBottom : 30,
        marginTop : 120
    },
    countText : {
        fontSize : 34,
        color : 'black' ,
        fontFamily : 'serif'
    }
});