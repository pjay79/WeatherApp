import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import Loading from '../components/Loading';

export default class LoadingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.checkIntro();
  }

  checkIntro = async () => {
    const value = await AsyncStorage.getItem('@SKIP_INTRO');
    if (value === 'true') {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('Intro');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
