import { Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoadingScreen from './screens/LoadingScreen';
import IntroScreen from './screens/IntroScreen';
import HomeScreen from './screens/HomeScreen';
import WeatherScreen from './screens/WeatherScreen';

const MainNavigator = StackNavigator(
  {
    Loading: {
      screen: LoadingScreen,
    },
    Intro: {
      screen: IntroScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Weather: {
      screen: WeatherScreen,
    },
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  },
);

export default MainNavigator;
