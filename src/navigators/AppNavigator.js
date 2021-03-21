import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import EventScreen from '../screens/EventScreen';
import React from 'react';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
      <Stack.Navigator>
      {/* // <Stack.Navigator screenOptions={{
      //   headerShown: false
      // }}> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Events" component={EventScreen} />
      </Stack.Navigator>
  )
}
