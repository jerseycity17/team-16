/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import 'firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// Connect firebase
const firebaseConfig = {
  apiKey: "AIzaSyBs7lc-PurV3_2rxna2SlPmGFEfC0p7-M0",
  databaseURL: "https://codeforgood-team16.firebaseio.com/",
  // authDomain: "<your-auth-domain>",
  // storageBucket: "<your-storage-bucket>",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default class App extends Component<{}> {
  render() {
    return (
        <div>
            <Provider store={store}>
                {instructions}
            </Provider>
        </div>
    );
  }
}
