import {StyleSheet} from 'react-native';
import fonts from '../../../../assets/fonts';
import {colors} from '../../../../assets/theme/colors';

export const styles = StyleSheet.create({
  swiperView: {
    backgroundColor: colors.cardbg,
    height: 470,
    marginHorizontal: 14,
    marginTop: 10,
    borderRadius: 5,
  },
  swiperImg: {
    resizeMode: 'cover',
    width: '100%',
    height: 300,
  },
  txtView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  heading: {
    color: colors.greyHeadingText,
    fontFamily: fonts.MerriRegular,
    fontSize: 15,
  },
  subHead: {
    color: colors.greyText,
    fontFamily: fonts.MerriRegular,
    fontSize: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  team1Logo: {
    height: 52,
    width: 52,
  },
  teamNameTxt: {
    color: colors.black,
    marginTop: 4,
  },
  scoreTxt: {
    color: colors.scoreTxt,
    marginTop: 30,
    fontFamily: fonts.tekoMedium,
    fontSize: 44,
  },
  statusView: {
    backgroundColor: colors.bg,
    height: 30,
    width: 50,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusTxt: {
    color: 'black',
    fontFamily: fonts.lato,
    fontSize: 16,
  },
  score2Txt: {
    color: colors.black,
    marginTop: 30,
    fontFamily: fonts.tekoMedium,
    fontSize: 44,
  },
  team2Logo: {
    height: 50,
    width: 50,
  },
});
