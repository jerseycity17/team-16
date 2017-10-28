import React, { Component } from 'react'
import { Text, View } from 'react-native'

const IsosContact = (props) => (
  <View style={
    {
      flex: 1,
      backgroundColor: props.backgroundColor ? props.backgroundColor : 'white',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'black'
    }
  }>
    <Text style={{ flex: 1 , textAlign: 'center'}}>{props.name}</Text>
    <Text style={{ flex: 1 , textAlign: 'center'}}>{props.office}</Text>
    <Text style={{ flex: 1 , textAlign: 'center'}}>{props.cell}</Text>
  </View>
)

const styles = {
  container: {
    flex: 1
  }
}

export default IsosContact
