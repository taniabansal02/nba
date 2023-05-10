import { StyleSheet } from 'react-native';
import fonts from '../../../../assets/fonts';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'black'
    },
    banner: {
        width: "100%",
        height: 100,
        resizeMode: 'cover',
        margin: 0
    },
    horizontalLine: {
        borderBottomColor: '#2f2f2f',
        borderWidth: 1,
        marginTop: -6,
    },
    swiperView: {
        backgroundColor: '#191c23',
        height: 470,
        marginHorizontal: 14,
        marginTop: 10
    },
    swiperImg: {
        resizeMode: 'cover',
        width: '100%',
        height: 300,
    },
    txtView : { 
        flex: 1, 
        alignItems: 'center', 
        marginTop: 15 
    },
    heading : { 
        color: '#ffffff', 
        fontFamily: fonts.latoRegular, 
        fontSize: 15 
    },
    subHead: { 
        color: '#6f7279', 
        fontFamily: fonts.latoRegular, 
        fontSize: 15, 
        marginTop: 3 
    },
    container : { 
        flexDirection: 'row', 
        justifyContent: 'space-around'
     },
     team1Logo : { 
        height: 52, 
        width: 52
    },
    teamNameTxt : { 
        color: 'white', 
        marginTop: 4 
    },
    scoreTxt : { 
        color: '#8f9299', 
        marginTop: 30, 
        fontFamily: fonts.tekoMedium, 
        fontSize: 44 
    },
    statusView : { 
        backgroundColor: '#ffff', 
        height: 30, 
        width: 50, 
        marginTop: 40, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    statusTxt : { 
        color: 'black', 
        fontFamily: fonts.lato, 
        fontSize: 16 
    },
    score2Txt : { 
        color: 'white', 
        marginTop: 30, 
        fontFamily: fonts.tekoMedium, 
        fontSize: 44 
    },
team2Logo : { 
    height: 50, 
    width: 50, 
}


    




})