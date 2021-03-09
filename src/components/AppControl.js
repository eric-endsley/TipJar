import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null
    }
  }

    render() {
      if (this.state.placeHolder == null) {
        return (
          <View>
            <Text>Blah Blah Blah</Text>
          </View>
        );
      }

    }  
}