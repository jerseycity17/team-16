import React, { Component } from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { database } from '../firebase/firebase';
import { connect } from 'react-redux';

class EmergencyContact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    componentWillMount() {
        // Grab list of emergency contct from database
        database.ref('/Syria/emergency').once('value').then((emergency_contact) => {
            emergency_contact = emergency_contact.val();
            let emergency = [];
            Object.keys(emergency_contact).forEach((contact_field) => {
                let contact_list = Object.keys(emergency_contact[contact_field]).map((contact_item) => {
                    return contact_item
                });
            });
            this.setState({
                emergency: emergency_contact.val(),
            });
            console.log(this.state.emergency);
        });
    };
    render() {
        console.log("Contact info: " + JSON.stringify(this.state.emergency));
        return (
            <View style={styles.container}>
                <Text>
                    Emergency Contact
                </Text>
                <SectionList
                    sections={[
                        {title: '', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
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

export default connect(mapStateToProps)(EmergencyContact);
