import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme/colors';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: colors.splashBg,
  },
  setting : {
    marginHorizontal : 30,
    marginVertical : 30
  },
  img: {
    height: 600,
    width: 360,
    marginTop: -20,
  },
  txt: {
    color: colors.white,
    fontFamily: fonts.MerriExtraBoldItalic,
    fontSize: 45,
    
    marginTop: -60,
  },
  txt2: {
    color: colors.white,
    fontFamily: fonts.MerriExtraBoldItalic,
    fontSize: 45,
   
    marginTop: -20,
  },
  btnview: {
    backgroundColor: colors.btncolor,
    height: 60,
    width: 130,
    borderRadius: 50,
    
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  btnTxt: {
    color: colors.white, 
    fontFamily: 
    fonts.MerriMedium, 
    fontSize: 18
},
});
