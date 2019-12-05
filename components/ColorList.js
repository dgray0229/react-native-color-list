

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';


import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";
export default class ColorList extends Component {

    static navigationOptions = {
        title: 'Available Colors'
    }

    constructor() {
        super();
        const colors = [ 'red', 'green', 'blue', ];
        const availableColors = [];
        this.state = {
            availableColors,
            colors,
        };
        this.listColors = this.listColors.bind(this);
        this.newColor = this.newColor.bind(this);
        this.saveColors = this.saveColors.bind(this);
    }
    // backgroundColor: this.state.backgroundColor
    // backgroundColor: backgroundColor

    saveColors(colors) {
        AsyncStorage.setItem(
            '@ColorListStore:Colors',
            JSON.stringify(colors)
        )
    }
    listColors(colors) {
        colors.map(color => this.setState( prevState => ({ availableColors: [...prevState.availableColors, {color}] }) ));
        this.saveColors(colors);
    }
    newColor(color) {
        this.listColors([color]);
    }
    componentDidMount() {
        const { colors } = this.state;
        AsyncStorage.getItem(
            '@ColorListStore:Colors',
            (err, data) => {
                if (err) console.error('Error loading colors', err);
                console.log(data);
                const colors = JSON.parse(data);
                this.setState({colors});
            }
        );
        this.listColors(this.state.colors);
    }

    render() {
        const { navigate } = this.props.navigation;
        const { backgroundColor, availableColors } = this.state;
        return (
            <FlatList style={ [ styles.container, { backgroundColor } ] }
                      data={availableColors}
                      keyExtractor={(item, i) => item.color.toString()}
                      renderItem={({item}) => {
                          return (
                              <ColorButton backgroundColor={item.color}
                                           onSelect={ () => navigate('Details', { color: item.color }) }
                              />
                          );
                      }}
                      ListHeaderComponent={() => (
                          <ColorForm onNewColor={this.newColor}
                                     navigation={this.props.navigation} />
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