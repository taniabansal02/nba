import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets/theme/colors';

export const styles = StyleSheet.create({
    mainview : {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 11,
        height: 120,
      },
      img : {
        height: 90,
        width: 90,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#a32132',
      },
      playerName : {
        marginTop: 5,
        justifyContent: 'center',
        color: colors.black,
        marginBottom: 20,
      }
})