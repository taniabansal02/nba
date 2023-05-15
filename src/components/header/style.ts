import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import { colors } from "../../assets/theme/colors";


export const styles = StyleSheet.create({
    header : { 
        backgroundColor: colors.headerBg,
        height: 60, 
       
       
        flexDirection: 'row',
        alignItems: 'center',
        
        
      },
      arrow : { 
        marginLeft: 15, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
      headerTxt : {
        color: colors.white, 
        fontFamily:fonts.MerriBold, 
        fontSize:20,
        marginLeft: 20,
      },
      headerView :{
        backgroundColor: colors.headerBg,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
      },
      headerText:{
        color: 'white',
        fontFamily: fonts.lato,
        fontSize: 20,
        marginLeft: 20,
      },
})