import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import icons from '../utils/icons';
import {useNavigation} from '@react-navigation/native';

const Fab = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('task-stack');
      }}
      style={{
        position: 'absolute',
        bottom: 25,
        right: 20,
      }}>
      <Image source={icons.add} style={{height: 60, width: 60}} />
    </TouchableOpacity>
  );
};

export default Fab;
