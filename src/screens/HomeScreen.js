import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text } from 'react-native';


  export default function HomeScreen({navigation}) {
    const buttonStyle = {
      backgroundColor: 'black',
      marginRight: 15,
      marginLeft: 15,
    
    }

    return(
      <>
      <View>
        <Button style={buttonStyle} onPress={() => navigation.navigate('Login')} icon="account" mode="contained">
          Login/Register
        </Button>
        <Button style={buttonStyle} onPress={() => console.log("View Events")} icon="microphone-variant" mode="contained">
          View Events
        </Button>
      </View> 
      </>
    )
  } 
