import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import { StackNavigator } from 'react-navigation';

import {
  AlertScreen,
  PlaygroundScreen
} from './src/screens'

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
        playground: {
          screen: PlaygroundScreen,
          navigationOptions: {header : null}
        },
      }, {
        lazy : true,
      },
    )

    return (
      <View style={styles.container}>
        <Text>HELLO TEAM 16 - John Here</Text>
      </View>
    );
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
