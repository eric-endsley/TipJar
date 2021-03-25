import React, {useState, useEffect} from 'react';
import { Button } from 'react-native-paper';
import { ActivityIndicator, View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../config/colors'
import dataToFlatList from '../firebase/dataToFlatList'
import firebase from '../firebase/Firebase'

export default function EventScreen({navigation}) {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([])

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('events')
      .onSnapshot((querySnapshot => {
        setEventData(dataToFlatList(querySnapshot));
      }))
    setLoading(false)
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />
  }

  return(
    <View style={styles.container}>
      <FlatList
        data={eventData}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
        <Text>{item.name} {item.performers} {item.address} {item.datetime} </Text>} />
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