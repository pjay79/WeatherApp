import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import LocationIcon from 'react-native-vector-icons/Entypo';
import WeatherIcon from 'react-native-vector-icons/SimpleLineIcons';
import Onboarding from 'react-native-onboarding-swiper';

class IntroScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'gold',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
  };

  async componentWillMount() {
    const value = await AsyncStorage.getItem('@SKIP_INTRO');
    if (value !== null) {
      this.props.navigation.navigate('Home');
    }
  }

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
            image: <WeatherIcon name="cloud-download" size={80} color="black" />,
            title: 'Then get the latest weather updates...',
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

export default IntroScreen;
