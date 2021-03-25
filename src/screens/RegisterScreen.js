import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import register from '../firebase/register';
import colors from '../config/colors';

export default function RegisterScreen({navigation}) {
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organization, setOrganization] = useState()

  const handlePress = () => {
      if (!email) {
        Alert.alert('Email is required');
      } if (!password) {
        Alert.alert('Password is required');
      } else if (!confirmPassword) {
        Alert.alert('Confirm password is required');
      } else if (password != confirmPassword) {
        Alert.alert('Passwords do not match');
      } else {
        register(email, password, organization);
        Alert.alert('Success');
        navigation.navigate('Home');
      }  
  }

  return(
    <View style={styles.container}>
      <TextInput name="bandOrOrg" onChangeText={(text) => setOrganization(text)} placeholder="Enter your band or organization" />
      <TextInput name="email" onChangeText={(text) => setEmail(text)} placeholder="Enter your email" />
      <TextInput name="password" onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder="Enter a password" />
      <TextInput name="confirmPassword" onChangeText={(text) => setConfirmPassword(text)} secureTextEntry={true} placeholder="Reenter your password" />
      <Button style={styles.button} onPress={handlePress} icon="account" mode="contained">
        Register Account
      </Button>
    </View>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    marginRight: 15,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: colors.grey
  }
})