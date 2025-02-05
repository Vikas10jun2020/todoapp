import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskStackNavigation from './TaskStackNavigation';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';

// 📂 Drawer Navigator
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

// 🏗 Stack Navigator
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="task-stack" component={TaskStackNavigation} />
    </Stack.Navigator>
  );
};

// 🌍 Main Navigation
const MainNavigation = () => {
  return <StackNavigator />;
};

export default MainNavigation;
