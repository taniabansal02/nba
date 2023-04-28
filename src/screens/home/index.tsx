import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { styles } from "./style";
import Navbar from "../../components/Navbar";
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