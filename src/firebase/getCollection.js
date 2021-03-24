import firebase from './Firebase';

const dbh = firebase.firestore();

export default function getCollection(collectionName) {
  dbh.collection(collectionName).get().then((querySnapshot) => {
      console.log(querySnapshot)
      return querySnapshot;  
    })
  }
