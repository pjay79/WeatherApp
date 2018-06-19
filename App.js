import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './app/routes/MainNavigator';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <MainNavigator />;
  }
}
