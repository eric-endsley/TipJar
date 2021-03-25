import firebase from '../firebase/Firebase'
import { Alert } from 'react-native'

export async function logout() {
  try {
    await firebase.auth().signOut(); 

  } catch (error) {
    Alert.alert('There is something wrong', error.message)
  }
}
