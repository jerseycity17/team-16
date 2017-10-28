import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { database } from '../firebase/firebase';
import Panel from '../components/Panel';
import AlertBar2 from '../components/AlertBar2';

class AlertScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    componentWillMount() {
        const alerts = database.ref('/Syria/alerts/');
        alerts.on('value', (snapshot) => {
            this.setState({
                alerts: snapshot.val(),
            });
        });
    };

  componentDidMount() {
  };
  render() {
    return(
      <View style={{ flex: 1 }}>
        <AlertBar2 onPress={() => this.props.navigation.goBack()}/>
        <View style={{ flex: 9, backgroundColor: '#d3d3d3'}}>
        <ScrollView>
      {
          this.state.alerts &&
          Object.keys(this.state.alerts).map((alertId, index) => {
              const alertItem = this.state.alerts[alertId]
              return (
                <Panel
                  backgroundColor="red"
                  title={alertItem.title}
                  description={alertItem.description}
                  tier={alertItem.tier}
                  key={index}
                />
                )
            })
        }
      </ScrollView>
      </View>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


const mapStateToProps = (state, ownProps) => {
  console.log('AlertScreen state', state)
  // const alertList = state.alert.alerts;
  return {
    ...ownProps,
    // alerts: alertList,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    dispatch: (action) => dispatch(action),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertScreen);
