import Immutable from 'seamless-immutable';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import Config from './DebugConfig';
import { name as appName } from '../../../app.json';

if (Config.useReactotron) {
  Reactotron.configure({ name: appName })
    .useReactNative()
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin())
    .connect();

  Reactotron.clear();
  console.tron = Reactotron;
}
