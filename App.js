import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

import ColorList from "./components/ColorList";
import ColorInfo from './components/ColorInfo';

const MainNavigator = createStackNavigator({
    Home: { screen: ColorList },
    Details: { screen: ColorInfo }
});

const App = createAppContainer(MainNavigator);

export default App;
