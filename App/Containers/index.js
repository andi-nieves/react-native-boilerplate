import React, { Component } from "react";
import { Container, Content, Text, Button } from "native-base";
import SwimplyHeader from "../Component/Header";
import SwimplyFooter from "../Component/Footer";
import Creators from "../Redux/Reducer/Test";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { navigation } = this.props;
    console.log(this);
    return (
      <Container>
        <SwimplyHeader />
        <Content>
          <Text>This is Content Section</Text>
          <Button
            onPress={() => {
              // console.log("hey");
              this.props.getGitUsers();
              // navigation.navigate("Screen2");
            }}
          >
            <Text>Screen 2</Text>
          </Button>
        </Content>
        <SwimplyFooter />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGitUsers: () => dispatch(Creators.getGitUsers())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
