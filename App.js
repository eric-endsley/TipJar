import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Control from './src/components/AppControl';


export default function App() {
  return (
    <React.Fragment>
        <Header />
        <View style={styles.container}>
          <Control />
          <StatusBar />
        </View>
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
