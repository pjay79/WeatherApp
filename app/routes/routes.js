import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';
import WeatherScreen from '../screens/WeatherScreen';

const MainNavigator = StackNavigator({
  IntroScreen: {
    screen: IntroScreen,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
  WeatherScreen: {
    screen: WeatherScreen,
  },
});

export default MainNavigator;
