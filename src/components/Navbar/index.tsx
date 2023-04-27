import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import pngIcon, { Icons } from '../../assets/icons';
import { styles } from './style';
import { Strings } from '../../strings';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/home';
import { NavigationContainer } from '@react-navigation/native';
import Players from '../../screens/players';
import DrawerNavigator from '../drawer';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name='Players' component={Players} />

            </Drawer.Navigator>
        </NavigationContainer>

    );
}


const Navbar = () => {
    return (
<View>


        <View style={styles.navbarView}>


            {/* <View ><Icons.hamburger /></View> */}
            <TouchableOpacity onPress={() => MyDrawer()} >
                <Image source={pngIcon.ham} style={{ marginTop: -3 }} />
            </TouchableOpacity>

            


            <Text>NEWS</Text>
            <Text>VIDEO</Text>
            <Text>STANDINGS</Text>
            <Text>GAMES</Text>

            {/* 
                <Text style={styles.headerText}> {Strings.header.home} </Text>
                <Icons.dashboard /> */}
        </View>
        {/* <DrawerNavigator /> */}
        </View>
        



    );
};

export default Navbar;