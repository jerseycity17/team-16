import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { Button } from 'react-native-elements'
import { database } from '../firebase/firebase'

class CheckIn extends Component {
  render() {
    return (
      <Modal
       animationType="slide"
       transparent={false}
       visible={this.props.visible}
       onRequestClose={() => {alert("Modal has been closed.")}}
     >
       <View style={{ flex: 1, backgroundColor: 'red' }}>
         <View style={{ flex: 4}} />
         <View style={{ flex: 3, backgroundColor: 'red' , alignItems: 'center', justifyContent: 'space-between'}}>
           <Text style={styles.textStyle}>Alert!</Text>
           <Text style={styles.description}>{this.props.disc}</Text>
         </View>
         <View style={{ flex: 6 }}></View>
         <Button
          title='I AM SAFE'
          large
          fontWeight='bold'
          backgroundColor='#fdc513'
          color='red'
          buttonStyle={styles.buttonStyle}
          borderRadius={25}
          onPress={() => database.ref().update({
          '/Syria/check_in/needCheckIn': false,
        })}
        />
        <View style={{ flex: 1 }}></View>
       </View>
     </Modal>
    )
  }
}

const styles = {
    buttonStyle: {
      alignItems: 'center'
    },
    textStyle: {
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
  },
  description: {
    fontSize: 24,
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center'
  }
}

export default CheckIn
