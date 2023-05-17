import { StyleSheet } from "react-native";
import { colors } from "../../assets/theme/colors";
import fonts from "../../assets/fonts";

export const styles = StyleSheet.create({
    input: {
        fontSize: 16, 
        flex: 1, 
        color: colors.black,
      },
      inputView : {
        backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      width: '65%',
      height: 45,
      marginHorizontal: 20,
      elevation: 5,
      borderRadius: 1,
      paddingLeft: 10,
      },  
      btn:{
        backgroundColor: colors.greyHeading,
        height: 45,
        width: 90,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      btnTxt:{
        color: colors.white, 
        fontFamily: fonts.lato, 
        fontSize: 16
      }
})