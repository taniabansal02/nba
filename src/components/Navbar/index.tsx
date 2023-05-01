import React from 'react';
import { View, Text, TouchableOpacity, Pressable , FlatList} from 'react-native';
import pngIcon, { Icons } from '../../assets/icons';
import { styles } from './style';
// import { Strings } from '../../strings';
import { Image } from 'react-native';
import images from '../../assets/images';
import { useQuery } from 'react-query';
import axios from 'axios';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from '../../screens/home';
// import { NavigationContainer } from '@react-navigation/native';
// import Players from '../../screens/players';
// import DrawerNavigator from '../drawer';


// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName='Home'>
//                 <Drawer.Screen name="Home" component={Home} />
//                 <Drawer.Screen name='Players' component={Players} />

//             </Drawer.Navigator>
//         </NavigationContainer>

//     );
// }


const Navbar = ({navigation}) => {
    const {isLoading, error, data} = useQuery('Teams', async () => {
        const res = await axios.get('https://free-nba.p.rapidapi.com/teams',
        {
          headers: {
            'X-RapidAPI-Key': '1336fa5b5dmsh54908f008934437p1f95c1jsnf7bfd1a79069',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
          }
        });
        console.log(res.data)
        return res.data;
      });
      if (isLoading) {
        return <View><Text>Loading...</Text></View>;
      }
      if (error) {
        return <View><Text>An error has occurred: {error.message}</Text></View>;
      }
      const renderItem = ({item}) => {
        return (
            <Text>{item.city}</Text>
        )
      }
    
    return (
<View style={{flex:1}}>
<Image source={images.banner} style={styles.banner} />

        <View style={styles.navbarView}>


            {/* <View ><Icons.hamburger /></View> */}
            {/* <TouchableOpacity onPress={() => MyDrawer()} > */}
            <Pressable onPress={() =>{
                navigation.openDrawer();
            }}>
            <Image source={pngIcon.ham} style={{ marginTop: -3 }} />
            </Pressable>
               
            {/* </TouchableOpacity> */}

            


            <Text>NEWS</Text>
            <Text>VIDEO</Text>
            <Text>STANDINGS</Text>
            <Text>GAMES</Text>

            {/* 
                <Text style={styles.headerText}> {Strings.header.home} </Text>
                <Icons.dashboard /> */}
        </View>
        {/* <DrawerNavigator /> */}
        <View>
            <FlatList renderItem={renderItem} data={data.data}></FlatList>
           
        </View>
        </View>
    );
};

export default Navbar;