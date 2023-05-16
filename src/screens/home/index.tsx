import React from 'react';
import { View, ScrollView} from 'react-native';
import { styles } from './style';
import images from '../../assets/images';
import Swiper from 'react-native-swiper';
import TopPlayerData from './components/TopPlayers';
import SwiperDetails from './components/SwiperDetails';
import Header from '../../components/header';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/theme/colors';

const Home = () => {

  { /* One to One matches  */ }
  const matches = [
    {
      img: images.knick,
    },
    {
      img: images.lak,
    },
  ];

  return (
    
  
      // <LinearGradient colors={['#dbdbdb'] } style={styles.linearGradient}>
   <ScrollView style={{flex:1, backgroundColor:'#F4F4F4'}}>
      <Header title='Dashboard' />

      

      {/* ******************* Render Top Player Data ********************* */}
      <TopPlayerData />


      {/* ******************* Upcomming Matches ********************* */}
      <Swiper autoplay paginationStyle={{ position: 'absolute', bottom: 300 }} dot={<View style={{ backgroundColor: '#4b4b4b', width: 7, height: 7, borderRadius: 4, marginLeft: 4 }}></View>} activeDot={<View style={{ backgroundColor: '#ffff', width: 7, height: 7, borderRadius: 4, marginLeft: 4 }}></View>}>

        {/* ****** Swiper Slider 1 ****** */}

        <SwiperDetails
          slider1img={matches[0].img}
          heading='West - Conf. Semifinals'
          subheading='Game 4'
          team1logo={images.warrior}
          team1name='Warriors'
          score1='101'
          status='Final'
          score2='104'
          team2logo={images.laker}
          team2name='Lakers'
          txt='LAL leads 3-1'
        />

        {/* ****** Swiper Slider 2 ****** */}

        <SwiperDetails
          slider1img={matches[1].img}
          heading='East - Conf. Semifinals'
          subheading='Game 4'
          team1logo={images.knicksLogo}
          team1name='Knicks'
          score1='101'
          status='Final'
          score2='109'
          team2logo={images.heatLogo}
          team2name='Heat'
          txt='MIA leads 3-1'
        />
      </Swiper>
      </ScrollView>
      // </LinearGradient>
    
    
  );
};

export default Home;
