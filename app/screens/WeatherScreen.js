import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Search from '../components/Search';
import darkSkyAPI from '../config/darkSky';

class WeatherScreen extends Component {
  static navigationOptions = {
    title: 'Current weather',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'gold',
      elevation: 0,
      borderBottomWidth: 0,
    },
  };

  state = {
    cities: [],
  };

  onPress = async (data, details = null) => {
    await this.addCity(
      details.formatted_address,
      details.geometry.location.lat,
      details.geometry.location.lat,
    );
  };

  addCity = async (city, lat, lon) => {
    const forecast = await this.addForecast(lat, lon);
    this.setState(prevState => ({
      cities: [
        ...prevState.cities,
        {
          city,
          lat,
          lon,
          forecast,
        },
      ],
    }));
    console.log(this.state.cities);
  };

  addForecast = async (lat, lon) => {
    const searchForecast = await axios.get(`https://api.darksky.net/forecast/${darkSkyAPI}/${lat},${lon}`);
    return searchForecast;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Add city:</Text>
        <Search onPress={this.onPress} />
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
  },
});

export default WeatherScreen;
