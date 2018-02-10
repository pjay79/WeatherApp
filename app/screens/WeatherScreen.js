import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, AsyncStorage } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import SlideGroup from '../components/SlideGroup';
import SlideItem from '../components/SlideItem';
import Button from '../components/Button';
import Loading from '../components/Loading';
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
    isFetching: false,
    isModalVisible: false,
    activeSlide: 0,
  };

  componentDidMount() {
    // AsyncStorage.clear();
    this.fetchData();
  }

  onSnapToItem = index => this.setState({ activeSlide: index });

  onPress = async (data, details = null) => {
    try {
      await this.addCity(
        details.name,
        details.geometry.location.lat,
        details.geometry.location.lat,
      );
    } catch (error) {
      console.log(error);
    }
  };

  fetchData = async () => {
    try {
      this.toggleFetching();
      const result = await AsyncStorage.getItem('nextCities');
      if (result !== null || undefined) {
        const cities = JSON.parse(result);
        cities.map(city => this.addCity(city.city, city.lat, city.lon));
      } else {
        this.toggleFetching();
      }
    } catch (error) {
      console.log(error);
    }
  };

  toggleFetching = () => this.setState(prevState => ({ isFetching: !prevState.isFetching }));
  toggleLoading = () => this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  toggleModal = () => this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  closeModal = () => this.setState({ isModalVisible: false });

  addCity = async (city, lat, lon) => {
    try {
      this.toggleLoading();
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
      const { cities } = this.state;
      const nextCities = cities.map(each => ({
        city: each.city,
        lat: each.lat,
        lon: each.lon,
      }));
      console.log(nextCities);
      await AsyncStorage.setItem('nextCities', JSON.stringify(nextCities));
      this.closeModal();
      this.toggleLoading();
      this.toggleFetching();
    } catch (error) {
      console.log(error);
    }
  };

  addForecast = async (lat, lon) => {
    const result = await axios.get(`https://api.darksky.net/forecast/${darkSkyAPI}/${lat},${lon}?exclude=hourly,flags&units=ca`);
    return result;
  };

  renderItem = ({ item }) => <SlideItem item={item} />;

  render() {
    return (
      <View style={styles.container}>
        {this.state.isFetching ? <Loading /> : null}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContainer}>
            <Search onPress={this.onPress} />
            {this.state.isLoading ? <Loading /> : null}
            <Button
              onPress={() => this.toggleModal()}
              title="Close"
              style={{
                backgroundColor: 'black',
              }}
            />
          </View>
        </Modal>
        <SlideGroup
          data={this.state.cities}
          renderItem={this.renderItem}
          onSnapToItem={this.onSnapToItem}
          activeSlide={this.state.activeSlide}
        />
        <Text style={styles.iconCredits}>Icons designed by Eucalyp from Flaticon</Text>
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
  modalContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gold',
    height: height * 0.6,
  },
  iconCredits: {
    fontSize: 8,
  },
});

export default WeatherScreen;
