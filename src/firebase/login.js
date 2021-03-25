import firebase from '../firebase/Firebase';
import { Alert } from 'react-native'

export default async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (error) {
    Alert.alert("There is something wrong", error.message);
  }
}