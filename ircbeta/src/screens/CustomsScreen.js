import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect} from 'react-redux'
import Panel from '../components/Panel';

class CustomsScreen extends Component {
    componentWillMount() {
        //Call to firebase database to pull customs
    }

    componentDidMount() {

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Panel title="Social Interaction" description="Description here" />
                <Panel title="Greetings" description="Description here" />
                <Panel title="Men" description="Description here" />
                <Panel title="Woman" description="Description here" />
                <Panel title="Food" description="Description here" />
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#f4f7f9',
        paddingTop : 30
    }
});

export default CustomsScreen