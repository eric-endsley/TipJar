import React, {useState, useEffect} from 'react';
import { Button } from 'react-native-paper';
import { ActivityIndicator, View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import EventCard from '../components/EventCard'
import ListSeparator from '../components/ListSeparator'
import colors from '../config/colors'
import dataToFlatList from '../firebase/dataToFlatList'
import firebase from '../firebase/Firebase'

export default function EventScreen({navigation}) {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([])

  const handlePress = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) { 
        navigation.navigate('EventForm')
      } else {
        Alert.alert("You need to be logged in to do that")
        navigation.navigate('Login')
      }
    })
  }

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
      <Text style={styles.header}>Events Near You</Text>
      <FlatList
        data={eventData}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ListSeparator}
        renderItem={({item}) =>
        <EventCard name={item.name} performers={item.performers} venue={item.venue} address={item.address} datetime={item.datetime}/>} />
      <Button style={styles.button} onPress={handlePress} icon="calendar-plus" mode="contained">
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
  },
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
})