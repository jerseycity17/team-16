import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { database } from '../firebase/firebase';
import Panel from '../components/Panel';
import firebase from 'firebase'

class AlertScreen extends Component {
  state = {
    alerts: [
      {
        title: 'Hello',
        description: "I'm dead",
        tier: 7
      },
      {
        title: 'Hellagagago',
        description: "I'm deafad",
        tier: 2
      },
      {
        title: 'Hellagagagago',
        description: "I'm deafafafad",
        tier: 4
      }
    ]
  }
  componentDidMount() {
    console.log(this.state.alerts)
    database.ref('/staff').once('value').then((snapshot) => {
      console.log(snapshot)
    })
  }

  componenetWillMount() {
     this.props.alerts;
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
      {this.state.alerts.map((listObject) => {
        console.log(listObject)
        return (
        <Panel 
          title={listObject.title}
          description={listObject.description}
        />
        )
      })}
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


const mapStateToProps = (state, ownProps) => {
  console.log('AlertScreen state', state)
  const alertList = state.alert.alerts;
  return {
    ...ownProps,
    alerts: alertList,
  };
}

export default connect(null)(AlertScreen);
