import React from 'react';
import { Text, View, Button } from 'react-native';
const util = require('util');

export default class AddNewItem extends React.Component {
  static navigationOptions = {
    title: 'Add New Item',
  };

  render() {
    return (
      <View>
        <Text>This is AddNewItem SCREEN</Text>
      </View>
    );
  }
}