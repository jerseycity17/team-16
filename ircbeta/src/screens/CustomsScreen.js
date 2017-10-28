import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import Panel from '../components/Panel';
import AlertBar2 from '../components/AlertBar2'

class CustomsScreen extends Component {
    constructor(props){
      super(props)

      this.state = {
        keys : Object.keys(this.props.customs)
      }
    }
    componentWillMount() {
        //Call to firebase database to pull customs
    }


    render() {
        return (
          <View style={{ flex: 1, backgroundColor: "#d3d3d3" }}>
            <AlertBar2 onPress={() => this.props.navigation.goBack()} onPress2={() => this.props.navigation.navigate('alert')} />
            <View style={{ flex: 9, backgroundColor: "#d3d3d3" }}>
            <ScrollView style={styles.container}>
              {this.state.keys.map((key,index) => (
                <Panel
                  title={key}
                  description={this.props.customs[key]}
                  key={index}
                />
              ))}
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

mapStateToProps = (state) => {
  // console.log('Customs Screen mapState', state.profile.firebase.customs)
  console.log(state)
  return {
    customs: state.profile.firebase.customs
  }
}

export default connect(mapStateToProps)(CustomsScreen)
