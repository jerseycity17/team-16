import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class AlertBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftStyle}>
          <Text style={styles.alertStyle}>ALERT</Text>
        </View>
        <TouchableOpacity style={styles.rightStyle} onPress={this.props.onPress2}>
          <Text style={styles.info}>Expanded refugee vetting could block innocent...</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1.5,
    flexDirection: 'row'
  },
  leftStyle: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightStyle: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  alertStyle: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold'
  },
  info: {
    color: 'black',
    fontSize: 20
  }
}

export default AlertBar
