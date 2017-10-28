import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
// import { country } from 'which-country';
const wc = require('which-country');

import store from './src/store/configureStore';
import action from './src/actions/';

import {
  AlertScreen,
  PlaygroundScreen,
  LocationScreen,
} from './src/screens'

export default class App extends React.Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            var initialPosition = JSON.stringify(position);
            console.log(position);
            action.updateGeolocation(store.dispatch, position.coords);
            console.log(wc([position.coords.longitude, position.coords.latitude]))
        }, (error) => {
            alert(error.message);
        }, {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
        });
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            action.updateGeolocation(store.dispatch, position.coords);
        });
        console.log(JSON.stringify(this.state));
    };
  render() {
    const MainNavigator = StackNavigator({
        playground: {
          screen: LocationScreen,
          navigationOptions: {header : null},
        },
      }, {
        lazy : true,
      },
    )

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
