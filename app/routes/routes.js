import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  WeatherScreen: {
    screen: WeatherScreen,
  },
});

export default MainNavigator;
