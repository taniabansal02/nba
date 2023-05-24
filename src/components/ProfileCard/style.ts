import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts';
import { colors } from '../../assets/theme/colors';
export const styles = StyleSheet.create({
   cardView: {
    backgroundColor:colors.white, 
    height:40, 
},
cardRow: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center', 
    marginHorizontal:15,  
},
titleTxt : {
    color:colors.lightGreyText, 
    fontFamily:fonts.MerriLight, 
    fontSize: 17
},
valText : {
    color: colors.black, 
    fontFamily:fonts.MerriLight, 
    fontSize: 17
}
})