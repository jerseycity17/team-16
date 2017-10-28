import React, { Component } from 'react';
import { View, Text } from 'react-native'
import AlertBar2 from '../components/AlertBar2';
import HealthHeader from '../components/HealthHeader';

class HealthView extends Component {
  render() {
    return (
      <View style={styles.healthContainer}>
        <AlertBar2 />
        <HealthHeader />
        <View style={styles.listContainer}>
        </View>
      </View>
    )
  }
}

const styles = {
  healthContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  headerContainer: {
    flex: 2,
    backgroundColor: 'blue'
  },
  listContainer: {
    flex: 8,
    backgroundColor: 'green'
  }
}

export default HealthView
