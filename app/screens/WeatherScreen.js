import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from '../components/Search';

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

  onPress = (data, details = null) => {
    // 'details' is provided when fetchDetails = true
    this.addCity(
      details.formatted_address,
      details.geometry.location.lat,
      details.geometry.location.lat,
    );
    // console.log(data, details);
  };

  addCity = (city, lat, lon) => {
    this.setState(prevState => ({
      cities: [
        ...prevState.cities,
        {
          city,
          lat,
          lon,
        },
      ],
    }));
    console.log(this.state.cities);
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
