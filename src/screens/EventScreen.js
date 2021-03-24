import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors'

export default function EventScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Text>Events will display here</Text>
      <Button style={styles.button} onPress={() => navigation.navigate('EventForm')} icon="calendar-plus" mode="contained">
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
  },
  container: {
    flex: 1,
    alignContent: 'flex-end',
    backgroundColor: colors.grey

  }
})