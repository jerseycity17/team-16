import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native'
import AlertBar2 from '../components/AlertBar2';
import HealthHeader from '../components/HealthHeader';
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'

class HealthView extends Component {
  componentWillMount() {
    console.log('Health view props', this.props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.healthList.vaccine);
  }

  renderRow(element) {
    console.log(element)
    return (
      <ListItem
        title={element}
      />
    )
  }

  render() {
    return (
      <View style={styles.healthContainer}>
        <AlertBar2 onPress={() => this.props.navigation.goBack()} onPress2={() => this.props.navigation.navigate('alert')} />
        <HealthHeader />
        <View style={{ flex: 9, backgroundColor: '#d3d3d3' }}>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.dataSource}
          />
        </List>
        </View>
      </View>
    )
  }
}

const styles = {
  healthContainer: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center'
  },
  headerContainer: {
    flex: 2,
    backgroundColor: 'blue'
  },
  listContainer: {
    flex: 8,
  },
  groupContainer: {
    flex: 1,
    margin: 20,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 25
  }
}

const mapStateToProps = state => {
  console.log('health')
  return {
    healthList: state.profile.firebase.health
  }
}
export default connect(mapStateToProps)(HealthView)
