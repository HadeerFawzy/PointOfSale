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
      paramsChanged: false,
      listArray: [ 'itemOne', 'itemTwo', 'itemThree', 'itemFour', 'itemFive', 'itemSix' ]
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    // let {newItem} = '';
    // newItem = this.props.navigation.state.params ? this.props.navigation.state.params.newItemAdded : 'undefined';
    // console.log(newItem); 

    // if (newItem !== '') {   
    //   this.setState({ 
    //     listArray: this.state.listArray.concat([newItem])
    //   })
    // }

    console.log(nextProps);
    console.log(this.props);

    nextProps.navigation.state.params ? this.setState({ 
      listArray: this.state.listArray.concat([nextProps.navigation.state.params.newItemAdded])
    }) : 'undefined';

  }

  render() {
    const {navigate} = this.props.navigation;

    // this.checkParams();
    
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