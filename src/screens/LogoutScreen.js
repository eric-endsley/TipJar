import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import logout from '../firebase/logout';
import colors from '../config/colors';

export default function LogoutScreen({navigation}) {
    const handlePress = () => {
      logout();
      Alert.alert("Succesfully logged out")
      navigation.navigate("Home")
  }

  return( 
    <View style={styles.container}>
      <Button style={styles.button} onPress={handlePress} icon="logout" mode="contained">
        Confirm Log Out
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