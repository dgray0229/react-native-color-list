import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

import ColorList from "./components/ColorList";
import ColorInfo from './components/ColorInfo';
import WebPage from "./components/WebPage";

const MainNavigator = createStackNavigator({
    Home: { screen: ColorList },
    Details: { screen: ColorInfo },
    Web: { screen: WebPage },
});

const App = createAppContainer(MainNavigator);

export default App;
