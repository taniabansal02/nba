import React, { useEffect, useState } from "react";
import { View, FlatList, Text} from 'react-native';
import { styles } from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from "../../assets/theme/colors";
import Header from "../../components/header";
import pngIcon from "../../assets/icons";

const MyTeamDetail = (params) => {
    const [data,setData] = useState('');
    const key = params.route?.params?.item;
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };

    const getdetails = async() =>{
        const mydata= await AsyncStorage.getItem(key);
        setData(JSON.parse(mydata));
        console.log('data' , JSON.parse(mydata));
    }
     useEffect(()=>{
        getdetails();
     },[])

     const renderItem = (item) => {
        console.log('itemmmmm', item)
        return(
            <View style={styles.playerView}>

          {/* ******************* Icons ********************* */}
           <View
            style={[styles.playerIcons, { backgroundColor: generateColor() }]}>
            <Text style={styles.text}> {item?.item.first_name[0] ? item.item.first_name[0] : null}{item?.item.last_name[0] ? item.item.last_name[0] : null} </Text>
          </View>

          {/* ******************* Player Details ********************* */}
          <View style={styles.playerDetails}>
            <View style={styles.playerRow}>
              <Text
                style={styles.playerName}>
                {item?.item?.first_name ? item?.item?.first_name : null}{' '}
              </Text>
              <Text
                style={styles.playerName}>
                {item?.item?.last_name ? item?.item?.last_name : null}
              </Text>
            </View>

            <View style={styles.playerRow}>
              <Text
                style={styles.playerid}>
                #{item?.item?.id ? item?.item?.id : null} |{' '}
              </Text>
              <Text
                style={styles.playerid}>
                {item?.item?.position ? item?.item?.position : null}
              </Text>
            </View>
          </View> 
            </View>
        )
     }
    return(
        <View style={{backgroundColor:colors.greybg}}>
            <Header img={pngIcon.backArrow} title={key} />
            <Text > 
                List Of Players
            </Text>
            <FlatList data={data} renderItem={renderItem}/>
        </View>
    );
};

export default MyTeamDetail;