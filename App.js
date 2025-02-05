import './gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';
import {StatusBar} from 'react-native';
const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#0F52BA');
  });
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
//lll
export default App;
