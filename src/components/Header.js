// import React from 'react';
// import  { Appbar } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native'

// export default function Header() {
//   const navigation  = useNavigation();

//   const headerTheme = {
//     dark: true,
//     roundness: 3,
//     colors: {
//     primary: 'black',
//     accent: 'blue',
//     text: 'white'
//     }
//   }

//   return (
//     <>
//       <Appbar.Header theme={headerTheme}>
//         <Appbar.Content title='TipJar' subtitle='blah blah'/>
//         <Appbar.BackAction onPress={() => navigation.goBack()} />
//         <Appbar.Action icon='account-details' onPress={console.log("Clicked account")} />
//       </Appbar.Header>
//     </>
//   );
// }