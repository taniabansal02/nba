import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#01b288',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileView: {
    backgroundColor: '#e7ebe7',
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
    color: '#434746',
    fontFamily: fonts.MerriRegular,
    fontSize: 18,
    marginBottom: 8,
  },
});
