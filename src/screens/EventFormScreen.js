import React, {useState} from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CustomSlider from '../components/CustomSlider'
import ImageForm from '../components/ImageForm'
import * as Random from 'expo-random'
import firebase from '../components/Firebase'

const dbh = firebase.firestore();


export default function EventFormScreen({navigation}) {
  const [name, setName] = useState("")
  const [perf, setPerf] = useState("")
  
  return(
    <View>
      <Text style={styles.header}>Add An Event</Text>
      <TextInput name="name" onChangeText={(text) => setName(text)} placeholder="Event Name"></TextInput>
      <TextInput name="peformers" onChangeText={(text) => setPerf(text)} placeholder="Performer Names"></TextInput>
      <ImageForm  />
      <CustomSlider />
      <Button style={styles.button} onPress={() => onSubmit()} icon="calendar-plus" mode="contained">
            Add Event
      </Button>
    </View> 
  )

  function onSubmit() {
    const uid = Random.getRandomBytes(16).toString();
      // dbh.collection("events").doc(uid).set({
      // name: "jim",
      // performers: "jon",
      // id: uid
      firebase.database().ref('users/'+uid).set({
        name: name,
        performers: perf
    }).then(
      console.log("Document written!")
    ).catch(function(error) {
      console.error(error);
    })
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    marginRight: 15,
    marginLeft: 15,
  },
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
})