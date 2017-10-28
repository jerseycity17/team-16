import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect} from 'react-redux'
import Panel from '../components/Panel';
import AlertBar2 from '../components/AlertBar2'

class CustomsScreen extends Component {
    componentWillMount() {
        //Call to firebase database to pull customs
    }

    componentDidMount() {

    }

    render() {
        return (
          <View style={{ flex: 1, backgroundColor: "#d3d3d3" }}>
            <AlertBar2 onPress={() => this.props.navigation.goBack()} />
            <View style={{ flex: 9, backgroundColor: "#d3d3d3" }}>
            <ScrollView style={styles.container}>
                <Panel title="Social Interaction" description="Description here" />
                <Panel title="Greetings" description="Description here" />
                <Panel title="Men" description="Description here" />
                <Panel title="Woman" description="Description here" />
                <Panel title="Food" description="Description here" />
            </ScrollView>
            </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#d3d3d3',
        paddingTop : 30
    }
});

export default CustomsScreen
