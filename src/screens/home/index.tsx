// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, SafeAreaView } from 'react-native';
// import { styles } from './style';
// import images from '../../assets/images';

// import { useQuery } from 'react-query';
// import axios from 'axios';





// const Home = () => {


//   const {isLoading, error, data} = useQuery('Teams', async () => {
//     const res = await axios.get('https://free-nba.p.rapidapi.com/teams',
//     {
//       headers: {
//         'X-RapidAPI-Key': '1336fa5b5dmsh54908f008934437p1f95c1jsnf7bfd1a79069',
//         'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
//       }
//     });
//     console.log(res.data);
//   });
//   if (isLoading) {
//     return <View><Text>Loading...</Text></View>;
//   }
//   if (error) {
//     return <View><Text>An error has occurred: {error.message}</Text></View>;
//   }



  

//     return (
//         <SafeAreaView style={styles.body}>
//             <Image source={images.banner} style={styles.banner} />
//             {/* <Navbar navigation={navigation} /> */}

//             {/* const { isLoading, error, data } = useQuery('LatestNews', async () => {
//     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ba98ff1447a14572bdf276236083a22c');
//     return response.data;
//   });
//   if (isLoading) {
//     return <View><Text>Loading...</Text></View>;
//   }
//   if (error) {
//     return <View><Text>An error has occurred: {error.message}</Text></View>;
//   }
//              */}

             

             


//         </SafeAreaView>

//     )
// };

// export default Home;

import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { styles } from "./style";
import Navbar from "../../components/navbar";
import axios from 'axios';
import images from "../../assets/images";
import { Image } from "react-native";
import DrawerNavigator from "../../components/drawer";

const Home = () => {


    return (

        // <View style={styles.body}>
        //     <Image source={images.banner} style={styles.banner}/>
        //     <Navbar />
        // </View>
        <View style={{ flex: 1 }}>

            {/* <Image source={images.banner} style={styles.banner} /> */}
            {/* <Navbar /> */}

            {/* <Text style={{ marginTop: 70, backgroundColor: 'red' }}>hh</Text> */}
            <DrawerNavigator />
            

        </View>

    );
};

export default Home;