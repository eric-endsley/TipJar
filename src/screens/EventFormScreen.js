import React, {useState} from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CustomSlider from '../components/CustomSlider'
import ImageForm from '../components/ImageForm'
import firebase from '../firebase/Firebase'
import colors from '../config/colors'

export default function EventFormScreen({navigation}) {
  const [name, setName] = useState("")
  const [performers, setPerformers] = useState("")
  const [venue, setVenue] = useState("")
  const [address, setAddress] = useState("")
  const [datetime, setDatetime] = useState("")

  return(
    <View style={styles.container}>
      <Text style={styles.header}>Add An Event</Text>
      <TextInput name="name" onChangeText={(text) => setName(text)} placeholder="Event Name" />
      <TextInput name="peformers" onChangeText={(text) => setPerformers(text)} placeholder="Performer Names" />
      <TextInput name="venue" onChangeText={(text) => setVenue(text)} placeholder="venue"/>
      <TextInput name="address" onChangeText={(text) => setAddress(text)} placeholder="Address" />
      <TextInput name="datetime" onChangeText={(text) => setDatetime(text)} placeholder="Date and Time" />
      <ImageForm  />
      <CustomSlider />
      <Button style={styles.button} onPress={() => onSubmit()} icon="calendar-plus" mode="contained">
            Add Event
      </Button>
    </View> 
  )

  function onSubmit() {
    var dbh = firebase.firestore();
    dbh.collection("events").add({
    name: name,
    performers: performers,
    venue: venue,
    address: address,
    datetime: datetime
  }).then((docRef) => {
    console.log("Document written with ID: ", docRef.id)
  }).catch(function(error) {
    console.error(error);
  });

    navigation.navigate('Events')
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    marginRight: 15,
    marginLeft: 15,
  },
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    backgroundColor: colors.grey,
    flex: 1
  }
})