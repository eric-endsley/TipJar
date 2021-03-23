import React, {useState} from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CustomSlider from '../components/CustomSlider'
import ImagePicker from '../components/ImagePicker'

export default function EventFormScreen({navigation}) {
  const [value, setValue] = useState(0);
  return(
    <View>
      <Text style={styles.header}>Add An Event</Text>
      <TextInput placeholder="Event Name"></TextInput>
      <TextInput placeholder="Performer Names"></TextInput>
      <CustomSlider />
      <ImagePicker />
      <Text>Is this thing on?</Text>
      <Button style={styles.button} onPress={() => console.log("submitted")} icon="calendar-plus" mode="contained">
            Add Event
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
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
})