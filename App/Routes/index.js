import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Containers/index';

const Router = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
