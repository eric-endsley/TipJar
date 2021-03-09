import React from 'react';
import  { Appbar } from 'react-native-paper';

export default function Header() {
 
  const headerTheme = {
    dark: true,
    roundness: 3,
    colors: {
    primary: 'black',
    accent: 'blue',
    text: 'white'
    }
  }

  return (
    <Appbar.Header theme={headerTheme}>
      <Appbar.Content title='TipJar' subtitle='blah blah'/>
      <Appbar.Action icon='account-details' onClick={console.log("Clicked account")} />
    </Appbar.Header>
  );
}