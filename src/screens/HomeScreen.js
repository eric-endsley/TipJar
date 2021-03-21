import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';


  export default function HomeScreen({navigation}) {
    return(
      <>
      <View>
        <Button style={styles.button} onPress={() => navigation.navigate('Login')} icon="account" mode="contained">
          Login/Register
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('Events')} icon="microphone-variant" mode="contained">
          View Events
        </Button>
      </View> 
      </>
    )
      

  } 
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    marginRight: 15,
    marginLeft: 15,
  }
})