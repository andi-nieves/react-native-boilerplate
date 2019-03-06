import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { reducer as reduxForm } from 'redux-form';
import configureStore from '../Config/CreateStore';
import ReduxPersist from '../Config/ReduxPersist';
import rootSaga from '../Sagas';

import { reducer as Test } from './Test';

const combinedReducers = combineReducers({
	Test,
	reduxForm
});

export const reducers = (state, action) => {
	return combinedReducers(state, action);
};

export default () => {
	let finalReducers = reducers;
	if (ReduxPersist.active) {
		const persistConfig = ReduxPersist.storeConfig;
		finalReducers = persistReducer(persistConfig, reducers);
	}
	const configStore = configureStore(finalReducers, rootSaga);
	const { store, sagaMiddleware } = configStore;
	let { sagasManager } = configStore;
	// eslint-disable-next-line
	if (module.hot) {
		// eslint-disable-next-line
		module.hot.accept(() => {
			// eslint-disable-next-line
			let nextRootReducer = require('.').reducers;
			if (ReduxPersist.active) {
				const persistConfig = ReduxPersist.storeConfig;
				nextRootReducer = persistReducer(persistConfig, reducers);
			}

			store.replaceReducer(nextRootReducer);

			// eslint-disable-next-line
			const newYieldedSagas = require('../Sagas').default;
			sagasManager.cancel();
			sagasManager.done.then(() => {
				sagasManager = sagaMiddleware.run(newYieldedSagas);
			});
		});
	}
	return store;
};
