import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AppNavigator from './src/navigators/AppNavigator';

export default function App() {
  return (
    <React.Fragment>
        <Header />
          <AppNavigator /> 
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
