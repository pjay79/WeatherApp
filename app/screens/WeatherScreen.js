import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import { BallIndicator } from 'react-native-indicators';
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
    isLoading: false,
    isModalVisible: false,
  };

  onPress = async (data, details = null) => {
    await this.addCity(details.name, details.geometry.location.lat, details.geometry.location.lat);
    console.log(details);
  };

  addCity = async (city, lat, lon) => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
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
    this.toggleModal();
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
    console.log(this.state.cities);
  };

  addForecast = async (lat, lon) => {
    const result = await axios.get(`https://api.darksky.net/forecast/${darkSkyAPI}/${lat},${lon}?exclude=minutely,hourly,flags&units=ca`);
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
            {this.state.isLoading ? <BallIndicator /> : null}
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
    paddingBottom: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  modalContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gold',
    height: height * 0.6,
  },
});

export default WeatherScreen;
