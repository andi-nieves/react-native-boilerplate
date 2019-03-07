import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, ListView } from 'react-native';
import Creators from "../Redux/Reducer/Test";

const style = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([{ id: 1, name: 'andy' }, { id: 2, name: 'kylie' }]),
    };
  }

  render() {
    const { dataSource } = this.state;
    console.log(dataSource);
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.headerTitle}>Boilerplate Demo</Text>
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={data => (
            <View>
              <Text>{data.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGitUsers: () => dispatch(Creators.getGitUsers()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
