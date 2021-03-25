import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import EventScreen from '../screens/EventScreen';
import EventFormScreen from '../screens/EventFormScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
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
        <Stack.Screen name="Register" component={RegisterScreen} options={headerStyleNavy}/>
        <Stack.Screen name="Events" component={EventScreen} options={headerStyleNavy}/>
        <Stack.Screen name="EventForm" component={EventFormScreen} options={headerStyleNavy}/>
        <Stack.Screen name="Login" component={LoginScreen} options={headerStyleNavy}/>
        <Stack.Screen name="Logout" component={LogoutScreen} options={headerStyleNavy}/>
      </Stack.Navigator>
  )
}


