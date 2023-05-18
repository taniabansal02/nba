import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts';
import { colors } from '../../assets/theme/colors';

export const styles = StyleSheet.create({
      playerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        backgroundColor: colors.white,
        height: 70,
      },
      playerIcons:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 20,
      },
      playerDetails : {
        flexDirection:'column',
        marginLeft: 20
      },
      playerRow:{
        flexDirection: 'row'
      },
      playerName:{
        color: colors.black, 
        fontFamily: fonts.MerriMedium, 
        fontSize: 18
      },
      playerid:{
        color: '#83868d', 
        fontFamily: fonts.lato, 
        fontSize: 17
      },
      
});