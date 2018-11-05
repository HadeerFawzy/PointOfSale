import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
const util = require('util');

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CEA36A',
    borderRadius: 12,
    padding: 12,
    width: 300,
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  btnText: {
    color: '#123657', 
    fontSize: 16, 
    fontWeight: 'bold'
  },
});

export default class ItemsList extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Items List',
    headerStyle: {
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
      backgroundColor: '#123657',
      boxShadow: 'none',
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      height: 100,
    },
    headerTitleStyle: {   
      color: '#91a2b3',
      alignSelf: 'center',
      fontSize: 30, 
      fontWeight: 'normal',
      flex: 1, 
      textAlign: 'center',
    },
  };

  constructor (props) {
    super(props);
    this.state = {   
      paramsChanged: false,
      listArray: [ 'itemOne', 'itemTwo', 'itemThree', 'itemFour', 'itemFive', 'itemSix' ]
    };
  }

  // help resource 
  // https://stackoverflow.com/questions/43313158/react-native-passing-props-between-components-and-componentwillmount-method
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(this.props);
    nextProps.navigation.state.params ? this.setState({ 
      listArray: this.state.listArray.concat([nextProps.navigation.state.params.newItemAdded])
    }) : 'undefined';

  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ backgroundColor: '#123657', flex: 1, alignItems: 'center'}}>

        {this.state.listArray.map((data, index, array) =>
          <Text style={{ color: 'white', fontSize: 18, marginBottom: 20}} key={index}>{data}</Text>
        )}
        
        <TouchableHighlight
          style={styles.button}
          underlayColor='#CEA36A'
          onPress={
            () => navigate("AddNewItem", {})
          }
        >
          <Text  style={styles.btnText}> Add New Item + </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

