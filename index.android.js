

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
} from 'react-native';

import ColorButton from "./components/ColorButton";
import ColorForm from "./components/ColorForm";
export default class ColorList extends Component {

  constructor() {
    super();
    const colors = [ 'red', 'green', 'blue', ];
    const availableColors = [];
    this.state = {
      backgroundColor: 'blue',
      availableColors,
      colors,
    }
    this.changeColor = this.changeColor.bind(this);
    this.listColors = this.listColors.bind(this);
    this.newColor = this.newColor.bind(this);
  }
  // backgroundColor: this.state.backgroundColor
  // backgroundColor: backgroundColor

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }
  listColors(colors) {
    colors.map(color => this.setState( prevState => ({ availableColors: [...prevState.availableColors, {color}] }) ));
  }
  newColor(color) {
    this.listColors([color]);
  }
  componentDidMount() {
    const { colors } = this.state;
    this.listColors(colors);
  }

  render() {
    const { backgroundColor, availableColors } = this.state;
    return (
        <FlatList style={ [ styles.container, { backgroundColor } ] }
                  data={availableColors}
                  keyExtractor={(item, i) => item.color.toString()}
                  renderItem={({item}) => {
                    console.log(item.color);
                    return (
                        <ColorButton backgroundColor={item.color}
                                     onSelect={ this.changeColor } />
                    );
                  }}
                  ListHeaderComponent={() => (
                      <ColorForm onNewColor={this.newColor} />
                  )}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'lightgrey',
    paddingTop: 40,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('ColorList', () => ColorList);
