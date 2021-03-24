import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../config/colors'
import getCollection from '../firebase/getCollection'

const eventData = getCollection("events")
console.log(eventData)

export default function EventScreen({navigation}) {
  return(
    <View style={styles.container}>
      <FlatList
        data={eventData}
        keyExtractor={event => event.id}
        renderItem={({event}) =>
        <Text>{event.name} {event.performers}</Text>} 
      />
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
    backgroundColor: colors.grey

  }
})