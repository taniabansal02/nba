import React from 'react';
import { View, Text} from 'react-native';
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

<View>
        <View style={styles.navbarView}>
             <Text>{Strings.header.home}</Text>
            <Text>{Strings.header.games}</Text>
            <Text>{Strings.header.teams}</Text>
            <Text>{Strings.header.players}</Text>
            <Text>{Strings.header.videos}</Text>
        </View>
        
        {/* <View>
            <FlatList renderItem={renderItem} data={data.data}></FlatList>
           
        </View> */}
        </View>
       
    );
};

export default Navbar;