import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const NavBar = (props) => (
  <View style={[styles.viewContainer,{backgroundColor: props.backgroundColor}]}>
      <TouchableOpacity style={styles.leftSideStyle} onPress={() => {
          if (props.leftButton) props.leftButton()
      }}>
        {props.left && <Icon name="chevron-left" color="white" size={40} />}
      </TouchableOpacity>
      <Text style={[styles.textStyle, {fontSize: props.labelFont}]}>{props.label}</Text>
      <TouchableOpacity style={styles.rightSideStyle} onPress={() => {
        if (props.rightButton) props.rightButton()
      }}>
        {props.right && <Icon name="refresh" color="white" size={30} />}
      </TouchableOpacity>
  </View>
)

const styles = {
  viewContainer: {
    flex: 1,
    bottom: 0,
    paddingTop: 10,
    backgroundColor: "#06847e",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    flex: 6,
    alignItems: 'center',
    textAlign: 'center',
  },
  rightSideStyle: {
    flex: 2,
  },
  leftSideStyle: {
    flex: 2,
  }
}

export default NavBar;
