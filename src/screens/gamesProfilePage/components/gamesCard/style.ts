import { StyleSheet } from 'react-native';
import fonts from '../../../../assets/fonts';

export const styles = StyleSheet.create({
   cardView: {
    backgroundColor:'#ffffff', 
    height:40, 
},
cardRow: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center', 
    marginHorizontal:15,  
},
titleTxt : {
    color:'#7d7d7d', 
    fontFamily:fonts.MerriLight, 
    fontSize: 17
},
valText : {
    color:'black', 
    fontFamily:fonts.MerriLight, 
    fontSize: 17
}
})