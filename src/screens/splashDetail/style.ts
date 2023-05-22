import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme/colors';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: colors.splashBg,
  },
  
  img: {
    height: 500,
    width: 360,
    marginTop: 30
  },
  txt: {
    color: colors.white,
    fontFamily: fonts.MerriExtraBoldItalic,
    fontSize: 45,
    
    marginTop: -30,
    marginLeft: 30
  },
  txt2: {
    color: colors.white,
    fontFamily: fonts.MerriExtraBoldItalic,
    fontSize: 45,
    marginLeft: 30,
    marginTop: -20,
  },
  btnview: {
    backgroundColor: colors.btncolor,
    height: 60,
    width: 130,
    borderRadius: 50,
    marginLeft: 30,
    marginTop: 20,
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
