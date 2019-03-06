import Immutable from "seamless-immutable";
import Reactotron from "reactotron-react-native";
import { reactotronRedux as reduxPlugin } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

import Config from "./DebugConfig";

if (Config.useReactotron) {
  Reactotron.configure({ name: "Swimply" })
    .useReactNative()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();

  Reactotron.clear();
  console.tron = Reactotron;
}
