import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import { colors } from '../../assets/theme/colors';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.headerBg,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerView:{
    flexDirection:'row', 
    marginLeft:20
  },
  headerTxt:{
    color: colors.white, 
    fontFamily:fonts.MerriBold, 
    fontSize:20
  },
  arrow: {
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileView: {
    backgroundColor: colors.bg,
    flex: 1,
  },
  imgView: {
    alignItems: 'center',
  },
  img: {
    height: 220,
    width: '100%',
    resizeMode: 'cover',
  },
  heading: {
    marginTop: 8,
    marginLeft: 10,
    color: colors.greyHeading,
    fontFamily: fonts.MerriRegular,
    fontSize: 18,
    marginBottom: 8,
  },
});
