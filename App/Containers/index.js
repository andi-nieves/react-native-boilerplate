import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import { get } from 'lodash';
import Creators from '../Redux/Reducer/Test';

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
  row: {
    padding: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.3,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtitle: {
    fontSize: 12,
    color: '#aaa',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    const { getGitUsers } = this.props;
    getGitUsers();
  }

  componentDidMount() {
    const { getGitUsers } = this.props;
    getGitUsers();
  }

  formatUsersData = () => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    const res = get(this.props, 'test.users', []);
    return ds.cloneWithRows(res);
  };

  render() {
    const { navigation } = this.props;
    const dataSource = this.formatUsersData();
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.headerTitle}>Boilerplate Demo v1</Text>
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={data => (
            <View style={style.row}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ViewDetails', { params: data });
                }}
              >
                <Text style={style.name}>{data.login}</Text>
                <Text style={style.subtitle}>{data.html_url}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

App.defaultProps = {
  getGitUsers: () => {},
  navigation: {},
};
App.propTypes = {
  getGitUsers: PropTypes.func,
  navigation: PropTypes.instanceOf(Object),
};
const mapDispatchToProps = dispatch => ({
  getGitUsers: () => dispatch(Creators.getGitUsers()),
});

const mapStateToProps = state => ({
  test: state.Test,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
