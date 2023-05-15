import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";


export const styles = StyleSheet.create({
    
    mainView : {
      flex: 1
    },
    header : { 
      backgroundColor: '#01b288',
      height: 60, 
      justifyContent: 'center' 
    },
    arrow : { 
      marginLeft: 15, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    profileView : {
      backgroundColor: '#e7ebe7', 
      flex:1 
    },
    imgView:{
      alignItems: 'center'
    },
    img : {
      height: 140,
       width: 140, 
       marginTop: 30
      },
      textView : {
        flexDirection: 'row',
         marginTop:4
        },

        titleTxt : {
          color:'black', 
          fontFamily: fonts.MerriMedium, 
          fontSize:24   
        },
        cityTxt : {
          fontSize:17, 
          marginTop:4, 
          fontFamily:fonts.MerriRegular
        },
        heading : {
          marginTop:18, 
          marginLeft:10, 
          color:'black', 
          fontFamily: fonts.MerriMedium, 
          fontSize:21, 
          marginBottom:15
        }


});

