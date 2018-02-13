import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationIcon from 'react-native-vector-icons/Entypo';
import WeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Onboarding from 'react-native-onboarding-swiper';

class IntroScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'gold',
      elevation: 0,
      borderBottomWidth: 0,
    },
  };

  render() {
    return (
      <Onboarding
        pages={[
          {
            backgroundColor: 'gold',
            image: <LocationIcon name="location" size={80} color="black" />,
            title: 'Start by adding your cities...',
            subtitle: 'POWERED BY GOOGLE PLACES API',
          },
          {
            backgroundColor: 'gold',
            image: <WeatherIcon name="weather-partlycloudy" size={80} color="black" />,
            title: 'Then get the latest weather updates...',
            subtitle: 'POWERED BY DARKSKY',
          },
        ]}
        onDone={() => this.props.navigation.navigate('HomeScreen')}
        onSkip={() => this.props.navigation.navigate('HomeScreen')}
      />
    );
  }
}

IntroScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default IntroScreen;
