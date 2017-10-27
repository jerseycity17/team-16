import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Team 16! - J</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
