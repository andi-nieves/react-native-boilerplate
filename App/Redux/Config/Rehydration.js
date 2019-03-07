import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import ReduxPersist from './ReduxPersist';

// eslint-disable-next-line
const DebugConfig = {
  useFixtures: false,
  ezLogin: false,
  yellowBox: __DEV__,
  reduxLogging: __DEV__,
  includeExamples: __DEV__,
  useReactotron: __DEV__,
};

const changeAppLoading = store => {
  if (DebugConfig.useReactotron) {
    console.tron.log(store);
  }
  // store.dispatch(Actions.isLoaded());
};

// eslint-disable-line
const updateReducers = (store: Object) => {
  const { reducerVersion } = ReduxPersist;

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        if (DebugConfig.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion,
            },
            preview: 'Reducer Version Change Detected',
            important: true,
          });
        }
        // Purge store
        persistStore(store, null, changeAppLoading.bind(this, store)).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null, changeAppLoading.bind(this, store));
      }
    })
    .catch(() => {
      persistStore(store, null, changeAppLoading.bind(this, store));
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
