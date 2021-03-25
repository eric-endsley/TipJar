import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import register from '../firebase/register'

export default function RegisterScreen({navigation}) {
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handlePress() {
      if (!email) {
        Alert.alert('Email is required')
      } if (!password) {
        Alert.alert('Password is required')
      } else if (!confirmPassword) {
        Alert.alert('Confirm password is required')
      } else if (password != confirmPassword) {
        Alert.alert('Passwords do not match')
      } else {
        register(email, password)
        Alert.alert('Success')
        navigation.navigate('Home')
      }  
  }
  return(
    <View style={styles.container}>
      <Text style={styles.header}></Text>
      <TextInput name="email" onChangeText={(text) => setEmail(text)} placeholder="Enter your email" />
      <TextInput name="password" onChangeText={(text) => setPassword(text)} placeholder="Enter a password" />
      <TextInput name="confirmPassword" onChangeText={(text) => setConfirmPassword(text)} placeholder="Reenter your password" />
      <Button onPress={() => handlePress()}></Button>
    </View>
    )
  // }
}