import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import Rehydration from "./Rehydration";
import ReduxPersist from "./ReduxPersist";

const Config = {
  useFixtures: false,
  ezLogin: false,
  yellowBox: __DEV__, // eslint-disable-line
  reduxLogging: __DEV__, // eslint-disable-line
  includeExamples: __DEV__, // eslint-disable-line
  useReactotron: __DEV__ // eslint-disable-line
};
// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];
  let store = null;

  /* ------------- Navigation Middleware ------------ */
  const navigationMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav
  );
  middleware.push(navigationMiddleware);

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron
    ? console.tron.createSagaMonitor()
    : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  console.log("Config.useReactotron", console.tron);
  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron
    ? createStore
    : createStore;

  // eslint-disable-next-line
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    // add redux devtools extension if present
    store = createAppropriateStore(
      rootReducer,
      compose(
        ...enhancers,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
      )
    );
  } else {
    store = createAppropriateStore(rootReducer, compose(...enhancers));
  }

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware
  };
};
