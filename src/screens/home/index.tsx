import React from 'react';
import { View, ScrollView, Text} from 'react-native';
import { styles } from './style';
import images from '../../assets/images';
import Swiper from 'react-native-swiper';
import TopPlayerData from './components/TopPlayers';
import SwiperDetails from './components/SwiperDetails';
import Header from '../../components/header';
import { colors } from '../../assets/theme/colors';
import fonts from '../../assets/fonts';
import { Strings } from '../../strings';

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
   <ScrollView style={styles.mainview}>

      <Header title='Dashboard' />

      {/* ******************* Render Top Player Data ********************* */}
      <TopPlayerData />

     <Text style={styles.heading}>{Strings.home.trending}</Text>

      {/* ******************* Upcomming Matches ********************* */}
      <Swiper autoplay paginationStyle={{ position: 'absolute', bottom: 250 }} dot={<View style={styles.inactiveDot}></View>} activeDot={<View style={styles.activeDot}></View>}>

        {/* ****** Swiper Slider 1 ****** */}

        <SwiperDetails
          slider1img={matches[0].img}
          heading= {Strings.swiper1Details.swiperImg1Title}
          subheading= {Strings.swiper1Details.subHead}
          team1logo={images.warrior}
          team1name={Strings.swiper1Details.team1name}
          score1={Strings.swiper1Details.team1score}
          status= {Strings.swiper1Details.status}
          score2={Strings.swiper1Details.team2score}
          team2logo={images.laker}
          team2name={Strings.swiper1Details.team2name}
          txt= {Strings.swiper1Details.label}
        />

        {/* ****** Swiper Slider 2 ****** */}

        <SwiperDetails
          slider1img={matches[1].img}
          heading= {Strings.swiper2Details.swiperImg1Title}
          subheading= {Strings.swiper2Details.subHead}
          team1logo={images.knicksLogo}
          team1name={Strings.swiper2Details.team1name}
          score1={Strings.swiper2Details.team1score}
          status= {Strings.swiper2Details.status}
          score2={Strings.swiper2Details.team2score}
          team2logo={images.heatLogo}
          team2name={Strings.swiper2Details.team2name}
          txt= {Strings.swiper2Details.label}
        />
      </Swiper>
      </ScrollView>
      // </LinearGradient>
    
    
  );
};

export default Home;
