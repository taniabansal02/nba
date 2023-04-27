import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { styles } from "./style";
import Navbar from "../../components/Navbar";
import axios from 'axios';
import images from "../../assets/images";
import { Image } from "react-native";

const Home = () => { 
        
   
    return(
        <View style={styles.body}>
            <Image source={images.banner} style={styles.banner}/>
            <Navbar />
           
            
        </View>
    );
};

export default Home;