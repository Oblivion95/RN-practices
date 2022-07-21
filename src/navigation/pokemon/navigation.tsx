import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/pokemon/home/Home';

const Stack = createStackNavigator();

const navigation = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}
    initialRouteName='Home'
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default navigation;