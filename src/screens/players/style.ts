import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts';
import { colors } from '../../assets/theme/colors';

export const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.bg, 
        flex: 1
    },
    headerView :{
        backgroundColor: '#191c23',
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
      horizontalLine:{
        borderBottomColor: '#3a3940',
        borderWidth: 1,
        marginTop: -2,
      }

})