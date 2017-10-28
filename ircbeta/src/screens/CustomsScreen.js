import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect} from 'react-redux'
import Panel from './components/Panel';

class CustomsScreen extends Component {
    componentWillMount() {
        //Call to firebase database to pull customs
    }

    componentDidMount() {

    }

    render() {
        return {
            <ScrollView style={styles.container}>
                <Panel title="Social Interaction">
                    <Text>Dummy text</text>
                </Panel>
                <Panel title="Greetings">
                    <Text>Dummy text</text>
                </Panel>
                <Panel title="Men">
                    <Text>Dummy text</text>
                </Panel>
                <Panel title="Woman">
                    <Text>Dummy text</text>
                </Panel>
                <Panel title="Food">
                    <Text>Dummy text</text>
                </Panel>
            </ScrollView>
        }
    }
}

var styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#f4f7f9',
        paddingTop : 30
    }
});
