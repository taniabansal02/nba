import React, {useState, useEffect, lazy} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNameKeys} from '../utils/constants/screenKey';
import Splash from '../screens/splash';
import Home from '../screens/home';
import Games from '../screens/games';
import Teams from '../screens/teams';
import Players from '../screens/players';
import ProfilePage from '../screens/profilePage';
import TeamProfilePage from '../screens/teamProfilePage';
import GamesProfilePage from '../screens/gamesProfilePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../assets/theme/colors';
import MyTeams from '../screens/myTeams';
import CreateTeam from '../screens/createTeam';
import News from '../screens/news';
import {styles} from './style';
import { Strings } from '../strings';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Navigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  const BottomNavigation = () => {
    return (
      <BottomTabs.Navigator
        initialRouteName="Home"
        screenOptions={{lazy: false}}>
        <BottomTabs.Screen
          component={Home}
          name={ScreenNameKeys.Home}
          options={{
            headerShown: false,
            tabBarShowLabel: false,

            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="home"
                    size={30}
                    color={'#e32f'}
                  />
                  <Text style={styles.tabBarActiveLabel}>{Strings.navigation.home}</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="home"
                    size={30}
                    color={'#727272'}
                  />
                  <Text style={styles.tabBarInactiveLabel}>{Strings.navigation.home}</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: 70,
              bottom: 15,
              right: 20,
              left: 20,
              borderRadius: 15,
              shadowColor: '#7F5DF0',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
              paddingHorizontal:10,
            },
          }}
        />

        <BottomTabs.Screen
          component={Players}
          name={ScreenNameKeys.Players}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="account"
                    size={30}
                    color={'#e32f'}
                  />
                  <Text style={styles.tabBarActiveLabel}>{Strings.navigation.player}</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="account"
                    size={30}
                    color={'#727272'}
                  />
                  <Text style={styles.tabBarInactiveLabel}>{Strings.navigation.player}</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: 70,
              bottom: 15,
              right: 20,
              left: 20,
              borderRadius: 15,
              shadowColor: '#7F5DF0',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
              paddingHorizontal:10,
            },
          }}
        />

        <BottomTabs.Screen
          component={Teams}
          name={ScreenNameKeys.Teams}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="account-multiple"
                    size={30}
                    color={'#e32f'}
                  />
                  <Text style={styles.tabBarActiveLabel}>{Strings.navigation.teams}</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="account-multiple"
                    size={30}
                    color={'#727272'}
                  />
                  <Text style={styles.tabBarInactiveLabel}>{Strings.navigation.teams}</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: 70,
              bottom: 15,
              right: 20,
              left: 20,
              borderRadius: 15,
              shadowColor: '#7F5DF0',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
              paddingHorizontal:10,
            },
          }}
        />

        <BottomTabs.Screen
          component={Games}
          name={ScreenNameKeys.Games}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="basketball"
                    size={30}
                    color={'#e32f'}
                  />
                  <Text style={styles.tabBarActiveLabel}>{Strings.navigation.games}</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="basketball"
                    size={30}
                    color={'#727272'}
                  />
                  <Text style={styles.tabBarInactiveLabel}>{Strings.navigation.games}</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: 70,
              bottom: 15,
              right: 20,
              left: 20,
              borderRadius: 15,
              shadowColor: '#7F5DF0',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
              paddingHorizontal:10,
            },
          }}
        />

        <BottomTabs.Screen
          component={MyTeams}
          name="MyTeams"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="plus-circle"
                    size={30}
                    color={'#e32f'}
                  />
                  <Text style={styles.tabBarActiveLabel}>{Strings.navigation.createTeam}</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="plus-circle"
                    size={30}
                    color={'#727272'}
                  />
                  <Text style={styles.tabBarInactiveLabel}>{Strings.navigation.createTeam}</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: 70,
              bottom: 15,
              right: 20,
              left: 20,
              borderRadius: 15,
              shadowColor: '#7F5DF0',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
              paddingHorizontal:10,
            },
          }}
        />
      </BottomTabs.Navigator>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplash ? (
          <Stack.Screen
            name={ScreenNameKeys.Splash}
            component={Splash}
            options={{headerShown: false}}
          />
        ) : null}
       
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNameKeys.ProfilePage}
          component={ProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNameKeys.TeamProfilePage}
          component={TeamProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNameKeys.GamesProfilePage}
          component={GamesProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNameKeys.CreateTeam}
          component={CreateTeam}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'News'}
          component={News}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
