import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import { StackNavigator } from 'react-navigation';

import {
  AlertScreen,
  PlaygroundScreen,
  CustomsScreen
} from './src/screens'

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
        playground: {
          screen: CustomsScreen,
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
