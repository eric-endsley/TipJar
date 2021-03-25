import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import EventScreen from '../screens/EventScreen';
import EventFormScreen from '../screens/EventFormScreen';
import React from 'react';
import colors from '../config/colors'


const Stack = createStackNavigator();

export default function AppNavigator() {
  const headerStyleNavy = {
    headerStyle: {
      backgroundColor: colors.navy,
    },
    headerTintColor: colors.white
  }
  return (
      <Stack.Navigator>
      {/* // <Stack.Navigator screenOptions={{
      //   headerShown: false
      // }}> */}
        <Stack.Screen name="Home" component={HomeScreen} options={headerStyleNavy} />
        <Stack.Screen name="Login" component={LoginScreen} options={headerStyleNavy}/>
        <Stack.Screen name="Events" component={EventScreen} options={headerStyleNavy}/>
        <Stack.Screen name="EventForm" component={EventFormScreen} options={headerStyleNavy}/>
      </Stack.Navigator>
  )
}


