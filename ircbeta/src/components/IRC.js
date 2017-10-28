import React, { Component } from 'react'
import { Text, View } from 'react-native'

class IRC extends Component {
  render() {
    return (
      <View style={styles.container2}>
        <View style={styles.rightStyle}>
          <Text style={styles.info}>I.R.C.</Text>
        </View>
      </View>
    )
  }
}
const styles = {
  container2: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#fdc513',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftStyle: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertStyle: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold'
  },
  info: {
    color: 'black',
    fontSize: 90,
    fontWeight: 'bold'
  }
}

export default IRC
