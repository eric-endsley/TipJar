import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import register from '../firebase/register';
import colors from '../config/colors';

export default function RegisterScreen({navigation}) {
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organization, setOrganization] = useState()

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
        register(email, password, organization)
        Alert.alert('Success')
        navigation.navigate('Home')
      }  
  }
  return(
    <View style={styles.container}>
      <Text style={styles.header}></Text>
      <TextInput name="bandOrOrg" onChangeText={(text) => setOrganization(text)} placeholder="Enter your band or organization" />
      <TextInput name="email" onChangeText={(text) => setEmail(text)} placeholder="Enter your email" />
      <TextInput name="password" onChangeText={(text) => setPassword(text)} placeholder="Enter a password" />
      <TextInput name="confirmPassword" onChangeText={(text) => setConfirmPassword(text)} placeholder="Reenter your password" />
      <Button onPress={() => handlePress()}></Button>
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