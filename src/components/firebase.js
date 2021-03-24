import firebase from 'firebase';
import 'firebase/firestore';
import {EXPO_FIREBASE_API_KEY, EXPO_FIREBASE_AUTH_DOMAIN, EXPO_FIREBASE_DATABASE_URL, EXPO_FIREBASE_PROJECT_ID,EXPO_FIREBASE_STORAGE_BUCKET,
EXPO_FIREBASE_MESSAGING_SENDER_ID, EXPO_FIREBASE_APP_ID, EXPO_FIREBASE_MEASUREMENT_ID } from '@env'

console.log(EXPO_FIREBASE_API_KEY)
console.log(EXPO_FIREBASE_AUTH_DOMAIN)
console.log(EXPO_FIREBASE_DATABASE_URL)
console.log(EXPO_FIREBASE_PROJECT_ID)
console.log(EXPO_FIREBASE_STORAGE_BUCKET)
console.log(EXPO_FIREBASE_MESSAGING_SENDER_ID)
console.log(EXPO_FIREBASE_APP_ID )
const firebaseConfig = {
  // apiKey: EXPO_FIREBASE_API_KEY,
  // authDomain: EXPO_FIREBASE_AUTH_DOMAIN,
  // databaseURL: EXPO_FIREBASE_DATABASE_URL,
  // projectId: EXPO_FIREBASE_PROJECT_ID,
  // storageBucket: EXPO_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: EXPO_FIREBASE_MESSAGING_SENDER_ID,
  // appId: EXPO_FIREBASE_APP_ID, 
  // measurementId: EXPO_FIREBASE_MEASUREMENT_ID
  apiKey: "AIzaSyBam0qgn_3_wJ0Ni6Pj6vf70SeEuhmqmtw",
  authDomain: "tipjar-ee858.firebaseapp.com",
  databaseURL: "https://tipjar-ee858-default-rtdb.firebaseio.com",
  projectId: "tipjar-ee858",
  storageBucket: "tipjar-ee858.appspot.com",
  messagingSenderId: "168866212659",
  appId: "1:168866212659:web:8655929a8f0a4c2c156c46",
  measurementId: "G-M89E783SN6"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
} else {
  firebase.app();
}

firebase.setLogLevel("debug")

export default firebase;