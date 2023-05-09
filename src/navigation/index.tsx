import React, {useState, useEffect} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { ScreenNameKeys } from "../utils/constants/screenKey";
import Splash from "../screens/splash";
import Home from "../screens/home";
import Games from "../screens/games";
import Teams from "../screens/teams";
import Players from "../screens/players";
import ProfilePage from "../screens/profilePage";


const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Navigation = () => {
    const [showSplash, setShowSplash] = useState(true);

    const BottomNavigation = () => {
      return(
        <BottomTabs.Navigator initialRouteName="Home" >
          <BottomTabs.Screen component={Home} name={ScreenNameKeys.Home} options={{headerShown: false}}/>
          <BottomTabs.Screen component={Players} name={ScreenNameKeys.Players} options={{headerShown: false}}/>
          <BottomTabs.Screen component={Teams} name={ScreenNameKeys.Teams} options={{headerShown: false}}/>
          <BottomTabs.Screen component={Games} name={ScreenNameKeys.Games} options={{headerShown: false}}/>
        </BottomTabs.Navigator>
      );
    };

    useEffect(()=>{
        setTimeout(()=>{
          setShowSplash(false);
        }, 2000)
      }, [])

    return(
        <NavigationContainer>
            <Stack.Navigator>
            {showSplash ?  <Stack.Screen name={ScreenNameKeys.Splash} component={Splash} options={{headerShown: false}} /> : null }
          {/* <Stack.Screen name={ScreenNameKeys.Home} component={Home} options={{headerShown: false}} /> */}
          <Stack.Screen name='BottomNavigation' component={BottomNavigation} options={{headerShown: false}} />
          <Stack.Screen name={ScreenNameKeys.ProfilePage} component={ProfilePage} options={{headerShown: false}} />
          
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Navigation;