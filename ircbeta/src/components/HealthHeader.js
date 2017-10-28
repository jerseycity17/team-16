import React, { Component } from 'react'
import { Text, View } from 'react-native'

class HealthHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1} >Health Information</Text>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 2,
    backgroundColor: '#fdc513',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    fontSize: 36,
    flex: 1,
    paddingTop: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems : 'center',
  },
}

export default HealthHeader
