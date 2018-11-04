import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import ItemsList from './screens/ItemsList'
import AddNewItem from './screens/AddNewItem'

const Navigation = createStackNavigator({
  ItemsList: { screen: ItemsList },
  AddNewItem: { screen: AddNewItem }
});

export default Navigation;

