import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { database } from '../firebase/firebase'
import { connect } from 'react-redux';

class LocationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentWillMount() {

    };

    componentDidMount() {

    };

    render() {
        console.log("LocationScreen:", JSON.stringify(this.props.geolocation));
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(this.props.geolocation)}</Text>
            </View>
        );
    };
}

//This fetches from the global store
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const geolocation = state.profile.location;
    return {
        ...ownProps,
        geolocation,
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

export default connect(mapStateToProps)(LocationScreen)
