import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { database } from '../firebase/firebase'

class HomeScreen extends Component {
  componentDidMount() {
    database.ref('/staff').once('value').then((snapshot) => {
      console.log(snapshot)
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Hello Team 16, This is the alert screen</Text>
      </View>
    )
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


const mapStateToProps = (state) => {
  console.log('AlertScreen state', state)
  return { }
}

export default connect(mapStateToProps)(HomeScreen);
