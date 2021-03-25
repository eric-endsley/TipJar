import firebase from './Firebase'

export async function registration(email, password, organization) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const dbh = firebase.firestore();
    dbh.collection("users")
    .doc(currentUser.uid)
    .set({
      email: currentUser.email,
      bandOrOrg: organization
    });
  } catch(error) {
    Alert.alert("There is something wrong", error.message);
  }
}

