import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import login from '../firebase/login';
import colors from '../config/colors';

export default function LoginScreen({navigation}) {
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    login(email, password);
    navigation.navigate("Home")
}

  return( 
    <View style={styles.container}>
      <TextInput name="email" onChangeText={(text) => setEmail(text)} placeholder="Enter your email" />
      <TextInput name="password" onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder="Enter your password" />
      <Button style={styles.button} onPress={handlePress} icon="login" mode="contained">
        Confirm Log Out
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