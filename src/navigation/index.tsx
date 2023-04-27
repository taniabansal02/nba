import React, {useState, useEffect} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { ScreenNameKeys } from "../utils/constants/screenKey";
import Splash from "../screens/splash";
import Home from "../screens/home";


const Stack = createStackNavigator();

const Navigation = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
          setShowSplash(false);
        }, 4000)
      }, [])

    return(
        <NavigationContainer>
            <Stack.Navigator>
            {showSplash ?  <Stack.Screen name="ScreenNameKeys.Splash" component={Splash} options={{headerShown: false}} /> : null }
          <Stack.Screen name='ScreenNameKeys.Home' component={Home} options={{headerShown: false}} />

            </Stack.Navigator>
            
        </NavigationContainer>
    );
};

export default Navigation;