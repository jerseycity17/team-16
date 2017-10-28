import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { database } from '../firebase/firebase';
import { connect } from 'react-redux';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    componentWillMount() {
        // Grab list of emergency contct from database
        database.ref('/Syria/emergency').once('value').then((emergency_contact) => {
            this.setState({
                emergency: emergency_contact,
            });
        });
    };
    render() {
        console.log(this.state.emergency);
        return (
            <View style={styles.container}>
                <Text>
                    {JSON.stringify(this.state.emergency)}
                </Text>
            </View>
        );
    };
}

//This fetches from the global store
const mapStateToProps = (state) => {
  console.log(mapStateToProps)
  return {

  }
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps)(Contact);
