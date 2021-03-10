import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text } from 'react-native';

// export default class Home extends React.Component({navigation}) {
//   constructor(props){
//   super(props)
//   }

//   render() {
  export default function Home({navigation}) {
    return(
      <>
      <View> 
        <Button color='blue' onPress={() => navigation.navigate('Login')} icon="account" mode="contained">
        Login/Register
        </Button>
      </View> 
      </>
    )
  } 
// }