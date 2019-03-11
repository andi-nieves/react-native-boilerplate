<h1 align="center">
  REACT-NATIVE BOILER PLATE
</h1>

<p align="center">
  <a href="https://github.com/facebook/react-native/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/react">
    <img src="https://badge.fury.io/js/react.svg" alt="Current npm package version." />
  </a>
  <a href="https://www.npmjs.org/package/react-native">
    <img src="https://badge.fury.io/js/react-native.svg" alt="Current npm package version." />
  </a>
  <a href="https://facebook.github.io/react-native/docs/contributing">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

### INSTALLATION

To rename project goto

- package.json \*

```
{
  "name": "yourprojectnamehere",
}
```

then

```
yarn // npm install
npm run init
```

### FEATURES

- React Router
- Redux
- Saga
- Persist
- ESLINT
- Logger
- Husky
- Reactotron
- Useful scripts e.g. npm run ios:production

### Folder Structure

```
- App
  - Assets
  - Component // Reusable Components
  - Containers // Screens
  - Redux
    - Config
      - CreateStore.js
      - DebugConfig.js
      - ImmutablePersistenceTransform.js
      - ReactotronConfig.js
      - ReduxPersist.js
      - Rehydration.js
    - Reducer
      - index.js
    - Sagas
      - index.js
  - Routes
    - index.js // StackNavigator
  - Services
    - Api.js
    - ApiConfig.js
    - ApiTransform.js
  - index.js
```

### Redux - Creators & Types

```javascript
import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

export const INITIAL_STATE = Immutable({
  users: []
});

const { Types, Creators } = createActions({
  getGitUsers: null,
  setState: ["data"]
});

const setState = (state, data) => {
  return state.merge(data.data);
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_STATE]: setState,
  [Types.GET_GIT_USERS]: null
});

export const TestTypes = Types;
export default Creators;
```

```javascript
import Creators as TestCreators from '../Redux/Reducer/Test';

const mapDispatchToProps = dispatch => ({
  getGitUsers: () => dispatch(TestCreators.getGitUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourClassName);

```
