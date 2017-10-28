import React, { Component } from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { database } from '../firebase/firebase';
import { connect } from 'react-redux';

class HealthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    componentWillMount() {
        // Grab list of emergency contct from database
        database.ref('/Syria/health').once('value').then((snapshot) => {
            console.log(snapshot.val().vaccine);
            this.setState({
                vaccines: snapshot.val().vaccine,
            });
        });
    };
    render() {
        console.log(this.state.vaccines);
        return (
            <View style={styles.container}>
                <Text>
                    Health Information
                </Text>
                <SectionList
                    sections={[
                        {title: "Vaccine", data: this.state.vaccines || []}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
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

export default connect(mapStateToProps)(HealthScreen);
