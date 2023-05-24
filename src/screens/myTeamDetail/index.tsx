import React, { useEffect, useState } from "react";
import { View, FlatList, Text} from 'react-native';
import { styles } from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from "../../assets/theme/colors";
import Header from "../../components/header";
import pngIcon from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from "../../utils/constants/screenKey";
import { Strings } from "../../strings";

const MyTeamDetail = (params) => {
  const navigation = useNavigation();
    const [data,setData] = useState('');
    const key = params.route?.params?.item;

   const navigateToMyTeams = () => {
    navigation.navigate(ScreenNameKeys.MyTeams);
   }

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };

    const getdetails = async() =>{
        const mydata= await AsyncStorage.getItem(key);
        setData(JSON.parse(mydata));
    }
     useEffect(()=>{
        getdetails();
     },[])

     const renderItem = (item) => {
        return(
            <View style={styles.teamView}>

          {/* ******************* Icons ********************* */}
           <View
            style={[styles.teamIcons, { backgroundColor: generateColor() }]}>
            <Text style={styles.text}> {item?.item.first_name[0] ? item.item.first_name[0] : null}{item?.item.last_name[0] ? item.item.last_name[0] : null} </Text>
          </View>

          {/* ******************* Team Details ********************* */}
          <View style={styles.teamDetails}>
            <View style={styles.teamRow}>
              <Text style={styles.teamName}>{item?.item?.first_name ? item?.item?.first_name : null}{ }</Text>
              <Text style={styles.teamName}>{item?.item?.last_name ? item?.item?.last_name : null}</Text>
            </View>

            <View style={styles.teamRow}>
              <Text style={styles.teamid}> {Strings.teams.symbol}{item?.item?.id ? item?.item?.id : null} |{' '} </Text>
              <Text style={styles.teamid}> {item?.item?.position ? item?.item?.position : null} </Text>
            </View>
          </View> 
            </View>
        )
     }
    return(
        <View style={{backgroundColor:colors.bg, flex:1}}>
            <Header img={pngIcon.backArrow} title={key} fun={() => navigateToMyTeams()}/>
            <Text style={styles.heading}> 
                {Strings.teams.listOfPlayers}
            </Text>
            <FlatList style={styles.list} data={data} renderItem={renderItem}/>
        </View>
    );
};

export default MyTeamDetail;