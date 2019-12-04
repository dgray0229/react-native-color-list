import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import ColorList from "./components/ColorList";
import ColorInfo from './components/ColorInfo';

const App = StackNavigator({
  Home: { screen: ColorList },
  Details: { screen: ColorInfo }
});

AppRegistry.registerComponent('ColorList', () => App);
