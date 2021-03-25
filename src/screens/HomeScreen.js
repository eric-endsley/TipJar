import React from 'react';
import { Button } from 'react-native-paper';
import colors from '../config/colors'
import { View, StyleSheet } from 'react-native';
import firebase from '../firebase/Firebase'


export default function HomeScreen({navigation}) {

const handlePress = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
      navigation.navigate('Logout')
    } else {
      navigation.navigate('Login')
    } 
  })
}   
 
  return (
    <View styles={styles.container}>
    <Button style={styles.button} onPress={() => navigation.navigate('Events')} icon="microphone-variant" mode="contained">
        View Events
      </Button>
    <Button style={styles.button} onPress={handlePress} icon="account" mode="contained">
        Login/Logout
    </Button>
    </View> 

  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    marginRight: 15,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: colors.grey
  }
  
})