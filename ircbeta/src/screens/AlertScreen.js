import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { database } from '../firebase/firebase';
import Panel from '../components/Panel';

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
      {this.state.alerts &&
          this.state.alerts.map((alertItem, index) => {
        return (
            <Panel
              title={alertItem.title}
              description={alertItem.description}
              tier={alertItem.tier}
              key={index}
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
