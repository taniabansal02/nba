import React from "react";
import { View} from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from "./style";

const Splash = () => {
    return(
        <View style={styles.mainview}>
            <LottieView
            source={require('../../assets/lottie/waveLoading.json')} 
            autoPlay
            loop={false}
            resizeMode="cover"
            />
        </View>
    );
};

export default Splash;