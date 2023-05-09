import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import { Strings } from '../../strings';


const Navbar = () => {
    // const {isLoading, error, data} = useQuery('Teams', async () => {
    //     const res = await axios.get('https://free-nba.p.rapidapi.com/teams',
    //     {
    //       headers: {
    //         'X-RapidAPI-Key': '1336fa5b5dmsh54908f008934437p1f95c1jsnf7bfd1a79069',
    //         'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    //       }
    //     });
    //     console.log(res.data)
    //     return res.data;
    //   });
    //   if (isLoading) {
    //     return <View><Text>Loading...</Text></View>;
    //   }
    //   if (error) {
    //     return <View><Text>An error has occurred: {error.message}</Text></View>;
    //   }
    //   const renderItem = ({item}) => {
    //     return (
    //         <Text>{item.city}</Text>
    //     )
    //   }

    return (

        <View style={styles.mainView}>
            <View style={styles.navbarView}>
                <Text style={styles.headerText}>{Strings.common.home}</Text>
                <Text style={styles.headerText}>{Strings.common.games}</Text>
                <Text style={styles.headerText}>{Strings.common.teams}</Text>
                <Text style={styles.headerText}>{Strings.common.players}</Text>
                <Text style={styles.headerText}>{Strings.common.videos}</Text>
            </View>
        </View>

        // {/* <View>
        //     <FlatList renderItem={renderItem} data={data.data}></FlatList>

        // </View> */}


    );
};

export default Navbar;