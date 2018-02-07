import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

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
        <Icon name="sun-o" size={30} color="black" />
        <Text style={styles.welcome}>Weather</Text>
        <Text style={styles.description}>POWERED BY DARKSKY</Text>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  description: {
    color: 'black',
    fontSize: 14,
    letterSpacing: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
