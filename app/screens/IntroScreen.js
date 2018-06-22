import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Onboarding from 'react-native-onboarding-swiper';

export default class IntroScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Onboarding
        pages={[
          {
            backgroundColor: 'gold',
            image: <Entypo name="location" size={80} color="black" />,
            title: 'Start by adding your cities...',
            subtitle: 'POWERED BY GOOGLE PLACES API',
          },
          {
            backgroundColor: 'gold',
            image: <SimpleLineIcons name="cloud-download" size={80} color="black" />,
            title: 'To get the current weather...',
            subtitle: 'POWERED BY DARKSKY',
          },
        ]}
        onDone={() => this.props.navigation.navigate('Home')}
        onSkip={() => this.props.navigation.navigate('Home')}
      />
    );
  }
}

IntroScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
