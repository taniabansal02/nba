import React from 'react'
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/home';
import Players from '../../screens/players';
import CustomDrawer from './customDrawer';
import Navbar from '../Navbar';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            
            <Drawer.Screen name='Navbar' component={Navbar} options={{headerShown: false}} />
        </Drawer.Navigator>
        // <View>
        //     <Text> Drawer Screen </Text>
        // </View>
    )
}

export default DrawerNavigator;
