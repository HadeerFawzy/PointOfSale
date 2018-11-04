import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
const util = require('util');

export default class AddNewItem extends React.Component {
  static navigationOptions = {
    title: 'Add New Item',
  };

  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button 
          onPress={
            () => { 
              navigate("ItemsList", { newItemAdded: this.state.text});
            }
          }
          title="Done"
          color="#CEA36A"
        />
      </View>
    );
  }
}