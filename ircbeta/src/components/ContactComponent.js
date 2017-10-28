import React, { Component } from 'react'
import { Text, View } from 'react-native'

const ContactComponent = (props) => (
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
    <Text style={{ flex: 1 , textAlign: 'center'}}>{props.position}</Text>
    <Text style={{ flex: 1 , textAlign: 'center'}}>{props.officeNum ? props.officeNum: ''}</Text>
    <Text style={{ flex: 1 , textAlign: 'center'}}>{props.cellPhone ? props.cellPhone : ''}</Text>
  </View>
)

const styles = {
  container: {
    flex: 1
  }
}

export default ContactComponent
