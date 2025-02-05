import {ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../utils/icons';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Drawer');
    }, 3000);
  }, []);
  return (
    <ImageBackground style={{flex: 1}} source={icons.splash}></ImageBackground>
  );
};

export default SplashScreen;
