import React, { Component } from 'react';
import {
  Container, Content, Text, Button
} from 'native-base';
import SwimplyHeader from '../Component/Header';
import SwimplyFooter from '../Component/Footer';

export default class Screen2 extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <SwimplyHeader />
        <Content>
          <Text>This is Content 2 Section</Text>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text>Screen 1</Text>
          </Button>
        </Content>
        <SwimplyFooter />
      </Container>
    );
  }
}
