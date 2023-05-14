import { StyleSheet } from 'react-native';
import fonts from '../../../../assets/fonts';

export const styles = StyleSheet.create({
   cardView: {
    backgroundColor:'#ffffff', 
    height:40, 
    marginTop:3
},
cardRow: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center', 
    marginHorizontal:30
},
titleTxt : {
    color:'#7d7d7d', 
    fontFamily:fonts.MerriRegular, 
    fontSize:20
},
valText : {
    color:'black', 
    fontFamily:fonts.MerriRegular, 
    fontSize:20
}
})