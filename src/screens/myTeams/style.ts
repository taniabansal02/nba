import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme/colors';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    flex: 1,
    color: colors.black,
  },
  inputView: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    height: 45,
    marginHorizontal: 15,
    elevation: 5,
    borderRadius: 1,
    paddingLeft: 10,
  },
  heading: {
    marginTop: 15,
    marginHorizontal: 15,
    fontFamily: fonts.MerriBold,
    color: colors.black,
    fontSize: 20,
    marginBottom: 15,
  },

  teamView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    backgroundColor: colors.white,
    height: 70,
  },
  teamDetails: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  playerRow: {
    flexDirection: 'row',
  },
  teamName: {
    color: colors.black,
    fontFamily: fonts.MerriMedium,
    fontSize: 18,
  },

  btn: {
    backgroundColor: colors.greyHeading,
    height: 45,
    width: 110,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.white,
    fontFamily: fonts.lato,
    fontSize: 16,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  text: {
    color: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  teamRow: {
    flexDirection: 'row',
    marginTop: 30,
    gap: -10,
  },
});
