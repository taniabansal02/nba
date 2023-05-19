import React from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNameKeys} from '../../utils/constants/screenKey';
import Animated, {FadeIn} from 'react-native-reanimated';
import images from '../../assets/images';
import {styles} from './style';
import {Strings} from '../../strings';

const SplashDetail = () => {
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate(ScreenNameKeys.Bottomtab);
  };

  return (
    <SafeAreaView style={styles.mainview}>
      <Animated.ScrollView entering={FadeIn.duration(500)}>
        <Image
          source={images.splashphoto}
          resizeMode="cover"
          style={styles.img}
        />
        <Text style={styles.txt}> {Strings.splash.hey}</Text>
        <Text style={styles.txt2}> {Strings.splash.play}</Text>
        <TouchableOpacity
          style={styles.btnview}
          onPress={() => navigateToHome()}>
          <Text style={styles.btnTxt}>{Strings.splash.next}</Text>
        </TouchableOpacity>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default SplashDetail;
