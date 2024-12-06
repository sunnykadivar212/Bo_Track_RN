import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Demo = () => {
  const token = AsyncStorage.getItem('authentication_token');
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>{token}</Text>
    </View>
  );
};

export default Demo;
