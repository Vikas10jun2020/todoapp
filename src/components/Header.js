import {View, Text} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: '#0F52BA',
        height: 60,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          paddingLeft: 15,
          fontWeight: 'bold',
        }}>
        {title || 'No Title'}
      </Text>
    </View>
  );
};

export default Header;
