import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import SlideGroup from '../components/SlideGroup';
import SlideItem from '../components/SlideItem';
import Button from '../components/Button';
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
    isModalVisible: false,
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
    const result = await axios.get(`https://api.darksky.net/forecast/${darkSkyAPI}/${lat},${lon}?exclude=minutely,hourly,flags?units=si`);
    return result;
  };

  toggleModal = () => this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));

  renderItem = ({ item }) => <SlideItem item={item} />;

  render() {
    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContainer}>
            <Search onPress={this.onPress} />
            <Button
              onPress={() => this.toggleModal()}
              title="Close"
              style={{ backgroundColor: 'black' }}
            />
          </View>
        </Modal>
        <SlideGroup data={this.state.cities} renderItem={this.renderItem} />
        <Button
          onPress={() => this.toggleModal()}
          title="Add City"
          style={{ backgroundColor: 'black' }}
        />
      </View>
    );
  }
}

const { height } = Dimensions.get('window');

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
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    height: height * 0.6,
    marginTop: height * 0.2,
    marginBottom: height * 0.2,
  },
});

export default WeatherScreen;
