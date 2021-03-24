import firebase from './Firebase';

const dbh = firebase.firestore();

export default function getCollection(collectionName) {
  dbh.collection(collectionName).get().then((querySnapshot) => {
      let dataArray = []
      querySnapshot.forEach((doc) => {
      const dataObj = doc.data();
      dataObj["id"] = doc.id;
      dataArray.push(dataObj)
      })
      console.log(dataArray)
      return dataArray;
    })
  }
