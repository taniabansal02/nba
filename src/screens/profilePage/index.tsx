import React from "react";
import { View, Text, ActivityIndicator } from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import { styles } from "./style";
import { Strings } from "../../strings";

const ProfilePage = (prop) => {
    
    const item = prop.params;
    // console.log(first_name);
    // console.log(last_name);
    // console.log(id);

    console.log(prop.route.params);

    // const {isLoading, error, data} = useQuery('Players', async () => {
    //     const res = await axios.get('https://free-nba.p.rapidapi.com/players/14', {
    //         headers: {
    //             'X-RapidAPI-Key': 'b92d35722emshdb1f96ecbf0e730p1497f4jsn124949e0a308',
    //             'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    //           },
    //     });
       
    //     return res.data.data;
    //   });
    //   if (isLoading) {
    //     return (
    //       <View style={styles.indicator}>
    //         <ActivityIndicator size="large" color="#5500dc" />
    //       </View>
    //     );
    //   }
    //   if (error) {
    //     return (
    //       <View>
    //         <Text style={styles.text}>{Strings.common.err} {error.message}</Text>
    //       </View>
    //     );
    //   }
    return(
        <View style={styles.mainView}>
            <Text style={styles.text}> profile Page </Text>
        </View>
    );
};

export default ProfilePage;