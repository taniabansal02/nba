import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts';
import { colors } from '../../assets/theme/colors';


export const styles = StyleSheet.create({
  heading : { 
    marginTop: 15, 
    marginHorizontal: 20, 
    fontFamily: fonts.MerriBold, 
    color: colors.black, 
    fontSize: 20, 
    marginBottom: 15 
  },
      teamView: {
        
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        backgroundColor: colors.white,
        height: 70,
      },
      teamIcons:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 20,
      },
      teamDetails : {
        flexDirection:'column',
        marginLeft: 20
      },
      teamRow:{
        flexDirection: 'row'
      },
      teamName:{
        color: colors.black, 
        fontFamily: fonts.MerriMedium, 
        fontSize: 18
      },
      teamid:{
        color: '#83868d', 
        fontFamily: fonts.lato, 
        fontSize: 17
      },
      text:{
        color: colors.white,
      },
      list : {
        marginBottom: 10,
      }
      
});