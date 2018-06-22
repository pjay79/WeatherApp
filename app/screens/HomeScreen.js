import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  AsyncStorage,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from '../components/Button';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    AsyncStorage.setItem('@SKIP_INTRO', 'true');
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={require('../assets/images/logo/sun.png')} />
          <Text style={styles.welcome}>The Weather</Text>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL('https://darksky.net/poweredby')}>
          <Image
            style={styles.darkskyLogo}
            source={require('../assets/images/darksky/poweredby-oneline.png')}
          />
        </TouchableOpacity>
        <Button title="START" onPress={() => this.props.navigation.navigate('Weather')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gold',
    paddingVertical: 50,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  welcome: {
    marginTop: 10,
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  darkskyLogo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
