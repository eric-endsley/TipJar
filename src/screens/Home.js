import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text } from 'react-native';

export default function Home({navigation}) {
  // render() {
    return(
      <>
      <View> 
        <Button color='blue' onPress={() => navigation.navigate('Login')} icon="account" mode="contained">
        Login/Register
        </Button>
      </View> 
      </>
    )
  // } 
}