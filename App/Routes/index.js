import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Containers/index';
import ViewDetails from '../Containers/ViewDetails';

const Router = createStackNavigator(
  {
    Home: { screen: Home },
    ViewDetails: { screen: ViewDetails },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
