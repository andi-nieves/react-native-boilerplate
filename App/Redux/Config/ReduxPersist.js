import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage
  }
};

export default REDUX_PERSIST;
