import React, { useEffect } from 'react';
import { View, Text, FlatList, ScrollView, ImageBackground } from 'react-native';
import { styles } from './style';

// import axios from 'axios';
import images from '../../assets/images';
import { Image } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import TopPlayerData from './components/TopPlayers';
import Navbar from '../../components/Navbar';
import fonts from '../../assets/fonts';

const Home = () => {


  {
    /* One to One matches  */
  }
  const matches = [
    {
      img: images.knick,
    },
    {
      img: images.lak,
    },
  ];





  return (
    <ScrollView style={styles.body}>

      {/* ******************* Banner ********************* */}
      <Image source={images.banner} style={styles.banner} />

      {/* ******************* Navbar ********************* */}
      <Navbar />

      {/* ******************* Horizontal Line ********************* */}
      <View style={styles.horizontalLine}></View>


      {/* ******************* Render Top Player Data ********************* */}
      <TopPlayerData />


      {/* ******************* Upcomming Matches ********************* */}
      <Swiper autoplay paginationStyle={{position:'absolute',  bottom: 230}} dot={<View style={{backgroundColor:'#4b4b4b', width: 7, height: 7, borderRadius: 4, marginLeft:4}}></View>} activeDot={<View style={{backgroundColor:'#ffff', width: 7, height: 7, borderRadius: 4, marginLeft:4}}></View>}>

        {/* ****** Swiper mainview ****** */}
        <View style={styles.swiperView}>
          <Image style={styles.swiperImg1} source={matches[0].img} />

          <View style={{ flex: 1, alignItems: 'center', marginTop: 15 }}>
            <Text style={{ color: '#ffff', fontFamily: fonts.latoRegular, fontSize: 15 }}> East - Conf. Semifinals</Text>
            <Text style={{ color: '#6f7279', fontFamily: fonts.latoRegular, fontSize: 15, marginTop: 3 }}> Game 4</Text>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

            <View>
              <Image source={images.knicksLogo} style={{ height: 52, width: 52, }} />
              <Text style={{ color: 'white', marginTop: 4 }}>Knicks</Text>
            </View>


            <Text style={{ color: '#8f9299', marginTop: 30, fontFamily: fonts.tekoMedium, fontSize: 44 }}>101</Text>

            <View style={{ backgroundColor: '#ffff', height: 30, width: 50, marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'black', fontFamily: fonts.lato, fontSize: 16 }}> Final</Text>
            </View>
            <Text style={{ color: 'white', marginTop: 30, fontFamily: fonts.tekoMedium, fontSize: 44 }}>109</Text>




            <View>
              <Image source={images.heatLogo} style={{ height: 50, width: 50, }} />
              <Text style={{ color: 'white', marginTop: 4 }}>Heat</Text>
            </View>

          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#6f7279', fontFamily: fonts.latoRegular, fontSize: 15, }}> MIA leads 3-1</Text>
          </View>
        </View>

{/* ****** Swiper mainview ****** */}
        <View style={styles.swiperView}>
          <Image style={styles.swiperImg2} source={matches[1].img} />
          <View style={{ flex: 1, alignItems: 'center', marginTop: 15 }}>
            <Text style={{ color: '#ffff', fontFamily: fonts.latoRegular, fontSize: 15 }}> West - Conf. Semifinals</Text>
            <Text style={{ color: '#6f7279', fontFamily: fonts.latoRegular, fontSize: 15, marginTop: 3 }}> Game 4</Text>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

            <View>
              <Image source={images.warrior} style={{ height: 52, width: 52, }} />
              <Text style={{ color: 'white', marginTop: 4 }}>Warriors</Text>
            </View>


            <Text style={{ color: '#8f9299', marginTop: 30, fontFamily: fonts.tekoMedium, fontSize: 44 }}>101</Text>

            <View style={{ backgroundColor: '#ffff', height: 30, width: 50, marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'black', fontFamily: fonts.lato, fontSize: 16 }}> Final</Text>
            </View>
            <Text style={{ color: 'white', marginTop: 30, fontFamily: fonts.tekoMedium, fontSize: 44 }}>104</Text>




            <View>
              <Image source={images.laker} style={{ height: 50, width: 70, }} />
              <Text style={{ color: 'white', marginTop: 4 }}>Lakers</Text>
            </View>

          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#6f7279', fontFamily: fonts.latoRegular, fontSize: 15, }}> LAL leads 3-1</Text>
          </View>
        </View>

        {/* <Image style={{resizeMode:'cover', width:'100%'}} source={matches[0].img} /> */}

      </Swiper>
      {/* <Swiper showsButtons autoplay style={{height:400, marginTop:10,  marginHorizontal:20}}>
         <View style={{flex:1, marginHorizontal:10}}>
            <Image style={{height:300, width:"100%", backgroundColor:'white'}} source={matches[0].img} />
            <View style={{backgroundColor:'#191c23', height:200, width:'100%'}}>
                <Text style={{color:'white'}}>hii</Text>
            </View>
         
         </View>

         <View style={{flex:1}}>
            <Image style={{height:300, width:"100%"}} source={matches[1].img} />
            <View style={{backgroundColor:'#191c23', height:200, width:'100%'}}>
                <Text style={{color:'white'}}>hii</Text>
            </View>
            
         </View>

      </Swiper> */}






    </ScrollView>
  );
};

export default Home;
