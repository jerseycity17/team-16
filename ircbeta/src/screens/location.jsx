import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { database } from '../firebase/firebase'
import { connect } from 'react-redux';

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentWillMount() {
    };

    componentDidMount() {
        database.ref('/Syria/staff').once('value').then((snapshot) => {
            console.log('firebase data ',snapshot.val());
        });
        navigator.geolocation.getCurrentPosition((position) => {
            var initialPosition = JSON.stringify(position);
            this.setState({initialPosition});
        }, (error) => {
            alert(error.message)
        }, {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
        });
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
        console.log(JSON.stringify(this.state));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Playground</Text>
            </View>
        );
    };
}

//This fetches from the global store
const mapStateToProps = (state) => {
    console.log(mapStateToProps)
    return {
    };
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps)(Locations)
