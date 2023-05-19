import { StyleSheet } from 'react-native';
import { colors } from '../../assets/theme/colors';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
    mainview: { 
        flex: 1, 
        backgroundColor: '#F4F4F4' 
    },
    heading: { 
        color: colors.black, 
        marginTop: 17, 
        marginBottom: 5, 
        fontFamily: fonts.lato,
         marginLeft: 10, 
         fontSize: 18 
        },
    activeDot: { 
        backgroundColor: '#ffff', 
        width: 7, 
        height: 7, 
        borderRadius: 4, 
        marginLeft: 4 
    },
    inactiveDot: { 
        backgroundColor: '#4b4b4b', 
        width: 7, 
        height: 7, 
        borderRadius: 4,
         marginLeft: 4 
        },
})