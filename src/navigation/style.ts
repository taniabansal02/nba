import { StyleSheet } from "react-native";
import { colors } from "../assets/theme/colors";

export const styles = StyleSheet.create({
    iconView : { 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    tabBarActiveLabel : { 
        color:  '#e32f45', 
        fontSize: 12 
    },
    tabBarInactiveLabel : {
         color:  '#748c94', 
         fontSize: 12 
    }
})