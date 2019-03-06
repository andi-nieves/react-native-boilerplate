import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import "./Redux/Config/ReactotronConfig";
import getTheme from "./Theme/components";
import variables from "./Theme/variables";
import Routes from "./Routes";
import createStore from "./Redux/Reducer";

const store = createStore();
// eslint-disable-next-line
export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </StyleProvider>
    );
  }
}
