import React from 'react';
import { Text, View, Button } from 'react-native';
const util = require('util');

export default class ItemsList extends React.Component {
  static navigationOptions = {
    title: 'Items List',
  };



  constructor (props) {
    super(props);
    this.state = {
      listArray: [ 'itemOne', 'itemTwo', 'itemThree', 'itemFour', 'itemFive', 'itemSix' ]
    };
  }

  render() {
    var {navigate} = this.props.navigation;
    return (
      <View>

        {this.state.listArray.map((data, index, array) =>
          <Text key={index}>{data}</Text>
        )}

    
        <Button
          onPress={
            () => navigate("AddNewItem", {})
          }
          title="Add New Item +"
          color="#CEA36A"
        />
      </View>
    );
  }
}