import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import { styles } from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
const News = (params) => {
    const [data,setData] = useState('');
     console.log(params.route?.params?.item);
    const key = params.route?.params?.item;

    const getdetails = async() =>{
        const mydata= await AsyncStorage.getItem(key);
        setData(JSON.parse(mydata));
        console.log(JSON.parse(mydata));
    }
     useEffect(()=>{
        getdetails();
     },[])
    return(
        <View>
            <Text> News Page </Text>
        </View>
    );
};

export default News;