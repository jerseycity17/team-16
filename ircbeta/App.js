import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
// import { country } from 'which-country';
const wc = require('which-country');

import store from './src/store/configureStore';
import action from './src/actions/';
import {database} from './src/firebase/firebase';

import {
  AlertScreen,
  HomeScreen,
  HealthScreen,
  PlaygroundScreen,
  LocationScreen,
  CustomsScreen,
  ContactScreen
} from './src/screens'

import FrontView from './src/screens/FrontView.js'
import HealthView from './src/screens/HealthView.js'

const check_in = database.ref('/Syria/check_in');
check_in.on('value', (snapshot) => {
    console.log(snapshot.val());
    if (snapshot.val()) {
        action.needCheckIn(store.dispatch, snapshot.val());
    }
});

export default class App extends React.Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            var initialPosition = JSON.stringify(position);
            console.log(position);
            action.updateGeolocation(store.dispatch, position.coords);
            action.updateCountryId(store.dispatch, wc([position.coords.longitude, position.coords.latitude]));
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
        database.ref('/Syria').once("value").then((snapshot) => {
           action.getFirebaseDB(store.dispatch, snapshot.val());
        });
    };
  render() {
    const MainNavigator = StackNavigator({
        home: {
          screen: HomeScreen,
          navigationOptions: {header : null},
        },
        location: {
          screen: LocationScreen,
          navigationOptions: {header : null},
        },
        health: {
          screen: HealthView,
          navigationOptions: {header : null},
        },
        customs: {
          screen: CustomsScreen,
          navigationOptions: {header : null},
        },
        contacts: {
          screen: ContactScreen,
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
