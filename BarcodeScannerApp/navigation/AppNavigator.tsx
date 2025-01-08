import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { RootStackParamList } from '../types/types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} /> {/* 正確使用 DetailsScreen */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;