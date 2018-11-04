import React from 'react';
import { Text, View, Button } from 'react-native';
const util = require('util');

export default class ItemsList extends React.Component {
  static navigationOptions = {
    title: 'Items List',
  };

  render() {
    return (
      <View>
        <Text>This is ItemsList SCREEN</Text>
        <Button
          
          title="Add New Item +"
          color="#CEA36A"
          
        />
      </View>
    );
  }
}