import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';

const WebPage = ({ navigation }) => (
    <WebView style={styles.container} source={navigation.state.params}
    contentInset={{ top: -650 }}/>
);

WebPage.navigationOptions = {
    title: 'All Colors'
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WebPage;