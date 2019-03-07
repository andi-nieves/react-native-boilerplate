import React from 'react';
import { Provider } from 'react-redux';
import './Redux/Config/ReactotronConfig';
import createStore from './Redux/Reducer';
import Routes from './Routes';

const store = createStore();
export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
