import { StyleSheet } from 'react-native';
import fonts from '../../../../assets/fonts';
import { colors } from '../../../../assets/theme/colors';

export const styles = StyleSheet.create({
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
      indicator:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      text:{
        color:colors.white,
      },
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
      buttonView:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 20,
      },
      btn:{
        backgroundColor: colors.greyHeading,
        height: 30,
        width: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnTxt:{
        color: colors.white, 
        fontFamily: fonts.lato, 
        fontSize: 16
      }

});