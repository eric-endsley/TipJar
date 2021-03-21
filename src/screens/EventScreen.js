import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

export default function EventScreen({navigation}) {
  return(
    <View>
      <Text>Events will display here</Text>
      <Button style={styles.button} onPress={() => navigation.navigate('EventFormScreen')} icon="calendar-plus" mode="contained">
            Add a New Event
      </Button>
    </View> 
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    marginRight: 15,
    marginLeft: 15,
  }
})