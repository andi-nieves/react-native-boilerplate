import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Containers/index';
import Screen2 from '../Containers/screen2';

const Router = createStackNavigator(
  {
    Home: { screen: Home },
    Screen2: { screen: Screen2 },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
