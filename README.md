# Boilerplate

To rename project goto

- package.json \*

```
{
  "name": "yourprojectnamehere",

```

then

```
react-native upgrade
```

```
yarn / npm install / npm i
react-native link
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
  index.js
```

### Redux

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
