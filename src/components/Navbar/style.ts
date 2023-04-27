import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
export const styles = StyleSheet.create({
   
    navbarView:{
        flexDirection: 'row', 
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop: 15,
        
     
        
    },
    
    headerText :{
        alignItems:'center', 
        color:'black', 
        fontFamily: fonts.lato, 
        fontSize:18, 
        lineHeight:22.5
    }
})