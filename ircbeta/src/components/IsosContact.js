import React, { Component } from 'react'
import { Text, View } from 'react-native'

const IsosContact = (props) => (
  <View style={
    {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'black'
    }
  }>
    <Text style={{ flex: 1 , textAlign: 'center'}}>{props.phone}</Text>
    <Text style={{ flex: 1 , textAlign: 'center'}}>{props.place}</Text>
  </View>
)

const styles = {
  container: {
    flex: 1
  }
}

export default IsosContact
