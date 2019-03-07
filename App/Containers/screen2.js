import React, { Component } from 'react';
import { View, Text } from 'react-native';

const style = {
  container: {
    flex: 1,
  },
};

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'hey',
    };
  }

  render() {
    const { sample } = this.state;
    return (
      <View style={style.container}>
        <Text>{sample}</Text>
      </View>
    );
  }
}
