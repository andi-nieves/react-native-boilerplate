import { Component } from 'react';
import './Redux/Config/ReactotronConfig';
import getTheme from './Theme/components';
import variables from './Theme/variables';
import createStore from './Redux/Reducer';

const store = createStore();
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
