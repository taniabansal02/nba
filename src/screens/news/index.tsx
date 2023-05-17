import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import { styles } from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from "../../assets/theme/colors";
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
        <View style={{backgroundColor:'red'}}>
            <Button title="Go back" />
            <Text style={{color: colors.white, backgroundColor:'green'}}>{data.first_name} </Text>
        </View>
    );
};

export default News;