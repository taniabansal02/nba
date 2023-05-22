import {StyleSheet} from 'react-native';
import fonts from '../../../../assets/fonts';
import {colors} from '../../../../assets/theme/colors';

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
    marginHorizontal: 14,
  },
  input: {
    fontSize: 16,
    flex: 1,
    color: colors.black,
  },
  mainview: {
    backgroundColor: colors.white,
    flex: 1,
    marginBottom: 2,
    height: 140,
  },
  heading: {
    alignSelf: 'center',
    color: colors.greyHeadingText,
    marginTop: 6,
    fontFamily: fonts.MerriMedium,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 7,
    marginTop: 15,
  },
  gameView: {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'center',
  },
  icons: {
    height: 52,
    width: 52,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.black,
  },
  gameName: {
    color: colors.black,
    alignSelf: 'center',
    fontFamily: fonts.MerriRegular,
  },
  scoreTextView: {
    justifyContent: 'center',
    marginTop: -20,
  },
  scoreTeam1: {
    color: colors.active,
    fontFamily: fonts.MerriMedium,
    fontSize: 28,
    fontWeight: '500',
  },
  detailView: {
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'center',
  },
  detailText: {
    color: colors.black,
    fontFamily: fonts.MerriRegular,
  },
  scoreteam2: {
    color: colors.headerBg,
    fontFamily: fonts.MerriMedium,
    fontSize: 28,
    fontWeight: '500',
  },
  team2NameView: {
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
  },
  activityIndicator : {
    marginTop:20
  },
  Icontext : {
    color: colors.white
  }
});
