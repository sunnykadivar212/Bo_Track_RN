import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login/loginscreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
