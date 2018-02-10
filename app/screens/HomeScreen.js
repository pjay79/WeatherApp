import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import Darksky from '../assets/images/darksky/poweredby-oneline.png';

class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'gold',
      elevation: 0,
      borderBottomWidth: 0,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon name="sun-o" size={50} color="black" />
        <Text style={styles.welcome}>The Weather</Text>
        <Image style={styles.darkskyLogo} source={Darksky} />
        <Button
          title="START"
          onPress={() => this.props.navigation.navigate('WeatherScreen')}
          style={{ backgroundColor: 'black' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  welcome: {
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

export default HomeScreen;
