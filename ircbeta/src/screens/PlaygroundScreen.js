import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { database } from '../firebase/firebase'
import { connect } from 'react-redux';

class PlaygroundScreen extends Component {
  componentWillMount() {

  }

  componentDidMount() {
    database.ref('/staff').once('value').then((snapshot) => {
      console.log('firebase data ',snapshot)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Playground</Text>
      </View>
    )
  }
}

//This fetches from the global store
const mapStateToProps = (state) => {
  console.log(mapStateToProps)
  return {

  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps)(PlaygroundScreen)
