import React from 'react';
import { Button } from 'react-native-paper';
import colors from '../config/colors'
import { View, Text, StyleSheet } from 'react-native';
import firebase from '../firebase/Firebase'


export default function HomeScreen({navigation}) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
      return (
        <>
        <View styles={styles.container}>
        <Button style={styles.button} onPress={() => navigation.navigate('Events')} icon="microphone-variant" mode="contained">
            View Events
          </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('LogOut')} icon="logout" mode="contained">
            LogOut
          </Button>
          <Button style={styles.button} onPress={() => navigation.navigate('Register')} icon="account" mode="contained">
            Register
          </Button>
        </View> 
        </>
      )
    } else {
        return(
        <>
        <View styles={styles.container}>
        <Button style={styles.button} onPress={() => navigation.navigate('Events')} icon="microphone-variant" mode="contained">
            View Events
          </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('LogOut')} icon="logout" mode="contained">
            LogOut
          </Button>
          <Button style={styles.button} onPress={() => navigation.navigate('Register')} icon="account" mode="contained">
            Register
          </Button>
        </View> 
        </>
      )
    } 
  });  
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    marginRight: 15,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: colors.grey
  }
  
})