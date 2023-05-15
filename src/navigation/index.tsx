import React, {useState, useEffect, lazy} from "react";
import { View, Text} from 'react-native';
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
import TeamProfilePage from "../screens/teamProfilePage";
import GamesProfilePage from "../screens/gamesProfilePage";
// import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "../screens/home/style";
import { colors } from "../assets/theme/colors";


const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Navigation = () => {
    const [showSplash, setShowSplash] = useState(true);

    const BottomNavigation = () => {
      return(
        <BottomTabs.Navigator  initialRouteName="Home" screenOptions={{lazy: false}} >
          <BottomTabs.Screen component={Home} name={ScreenNameKeys.Home}   options={{headerShown: false, 
          tabBarShowLabel: false,
         
        
           tabBarIcon: ({focused}) =>
            focused ? (
              // <Icon icon="faHouse" size={30} color={'#FD8C73'}/>
              
              <View style={{alignItems:'center', justifyContent:'center' }}>
                 <MaterialCommunityIcons name="home" size={30} color={'#e32f'}/>
                 <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Home</Text>
              </View>
              
                
                
             
              
              ) : (
              
              // <Icon icon='faHouse' size={25} color={'#878787'} />
              
                <MaterialCommunityIcons  name="home" size={30}  color={'#727272'}/>
                
              
            ),
            tabBarStyle:{backgroundColor: colors.white ,position:'absolute', height:70, bottom:25, right:20, left: 20, borderRadius:15 , shadowColor: '#7F5DF0', shadowOffset:{width:0, height: 10} , shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5},
            tabBarLabelStyle:{paddingTop:100, backgroundColor:'red'},
              
              // style = {{tintColor : tabInfo.focused ? '#FD8C73': '#878787'}}
            
            
            
          } }/>
          <BottomTabs.Screen component={Players} name={ScreenNameKeys.Players} options={{headerShown: false }}/>
          <BottomTabs.Screen component={Teams} name={ScreenNameKeys.Teams} options={{headerShown: false}}/>
          <BottomTabs.Screen component={Games} name={ScreenNameKeys.Games} options={{headerShown: false}} />
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
          <Stack.Screen name={ScreenNameKeys.TeamProfilePage} component={TeamProfilePage} options={{headerShown: false}} />
          <Stack.Screen name={ScreenNameKeys.GamesProfilePage} component={GamesProfilePage} options={{headerShown: false}} />
          
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Navigation;