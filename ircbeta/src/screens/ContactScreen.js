import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AlertBar2 from '../components/AlertBar2'
import ContactComponent from '../components/ContactComponent'
import IsosContact from '../components/IsosContact'
import IsosAfter from '../components/IsosAfter'
import RSSA from '../components/RSSA'

class ContactScreen extends Component {
  state = {
    sampleData: [
      {
        name: 'William',
        position: 'VP IPD',
        officeNum: '2125512949',
        cellPhone: '6094907097'
    },
    {
      name: 'John',
      position: 'SR.VP IPD',
      officeNum: '3127512949',
      cellPhone: '8604907097'
    },
    {
      name: 'Mike',
      position: 'Pres IPD',
      officeNum: '722712949',
      cellPhone: '851907097'
    },
  ],
    isosData: [
      {
        phone: '4316161361',
        place: 'Philadelphia Center'
      },
      {
        phone: '4316161361',
        place: 'London Alarm Center'
      }
    ],
    isosAfterData: [
      {
        name: 'John C',
        office: '512512161',
        cell: '123456789'
      },
      {
        name: 'John A',
        office: '51212515',
        cell: '12161789'
      },
    ],
    RSSAData: [
      {
        name: 'Meep A',
        office: '9724792',
        cell: '15107917'
      }
    ]
  }
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <AlertBar2 onPress={() => this.props.navigation.goBack()}/>
        <View style={styles.innerContainerCon}>
          <View style={styles.yellowCard1}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Emergency Contacts</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold'}}>For emergencies, call in the following order</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold'}}>Outside the U.S, add +1</Text>
          </View>
          <ContactComponent
            backgroundColor='#ffa700'
            name="Name"
            position="Top"
            officeNum="Office Num"
            cellPhone="Cell Phone"
          />
          {this.state.sampleData.map((obj, index) => (
            <ContactComponent
              name={obj.name}
              position={obj.position}
              officeNum={obj.officeNum}
              cellPhone={obj.cellPhone}
              key={index}
            />
          ))}
          <View style={styles.yellowCard2}>
            <Text style={{ textAlign: 'center' }}>In case of Medical Emergency, call ISOS:</Text>
          </View>
          {this.state.isosData.map((obj, index)=> (
            <IsosContact
              phone={obj.phone}
              key={index}
              place={obj.place}
            />
          ))}
          <View style={styles.yellowCard2}>
            <Text style={{ textAlign: 'center' }}>Contact one of the following immediately after
            </Text>
          </View>
          {this.state.isosAfterData.map((obj, index) => (
            <IsosAfter
              name={obj.name}
              office={obj.office}
              cell={obj.cell}
              key={index}
            />
          ))}
          <RSSA backgroundColor='#ffa700' cell='Cell' name="Name" office="12512521" />
          {this.state.RSSAData.map((obj, index) => (
            <RSSA
              cell={obj.cell}
              name={obj.name}
              office={obj.office}
              key={index}
            />
          ))}
          <View style={styles.yellowCard2}>
            <Text style={{ textAlign: 'center' }}>IRC NY HQ: 212-551-3000
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
  text1: {
    fontSize: 36,
    flex: 1,
    paddingTop: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems : 'center',
  },
  cardHeader: {
    flex: 3,
    backgroundColor: '#fdc513'
  },
  innerContainerCon: {
    flex: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  yellowCard1 : {
    flex: 2,
    backgroundColor: '#ffa700',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  yellowCard2 : {
    flex: 1,
    backgroundColor: '#ffa700',
    justifyContent: 'center'
  },
  whiteCard1 : {
    flex: 1,
    backgroundColor: 'white'
  }
}

export default ContactScreen
