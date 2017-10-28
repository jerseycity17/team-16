import React, { Component } from 'react';
import { View, Text } from 'react-native'
import AlertBar2 from '../components/AlertBar2';
import HealthHeader from '../components/HealthHeader';
import { List, ListItem } from 'react-native-elements'

class HealthView extends Component {
  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subtitle}
        avatar={{uri:rowData.avatar_url}}
      />
    )
  }

  render() {
    return (
      <View style={styles.healthContainer}>
        <AlertBar2 onPress={() => this.props.navigation.goBack()} />
        <HealthHeader />
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
        </List>
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

export default HealthView
