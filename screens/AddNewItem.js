import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
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

export default class AddNewItem extends React.Component {
  static navigationOptions = {
    title: 'Add New Item',
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
      text: ''
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ backgroundColor: '#123657', flex: 1, alignItems: 'center'}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 0, borderBottomWidth: 1, width: 300, marginBottom: 30, marginTop: 30, color:'#fff'}}
          onChangeText={(text) => this.setState({text})}
          placeholder="Your Name"
          value={this.state.text}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor='#CEA36A'
          onPress={
            () => { 
              navigate("ItemsList", { newItemAdded: this.state.text});
            }
          }
        >
          <Text  style={styles.btnText}> Done </Text>
        </TouchableHighlight>
      </View>
    );
  }
}