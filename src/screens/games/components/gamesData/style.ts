import { StyleSheet } from "react-native";
import fonts from "../../../../assets/fonts";
import { colors } from "../../../../assets/theme/colors";

export const styles = StyleSheet.create({

    text :{
        color: '#ffffff',
    }, 

    searchBar: {
      backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      width: '90%',
      height: 45,
      marginHorizontal: 20,
      elevation: 5,
      borderRadius: 1,
    },
    searchIcon: {
      marginHorizontal: 14
    },
    input: {
      fontSize: 16, 
      flex: 1, 
      color: colors.black,
    },
      list:{
        marginTop: 20
      },
      container : 
      {backgroundColor:colors.white, 
        height: 140, 
        marginBottom:5
      },
      heading : {
        color: colors.greyHeadingText,  
        marginLeft:'37%', 
        marginTop:20
      }
      
})