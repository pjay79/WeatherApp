import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, AsyncStorage } from 'react-native';
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
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'gold',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
  };

  state = {
    cities: [],
    isSearching: false,
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
      const { cities } = this.state;
      const addedCity = cities.find(city => city.city === details.name);
      if (!addedCity) {
        await this.addCity(
          details.name,
          details.geometry.location.lat,
          details.geometry.location.lat,
        );
      } else {
        this.toggleModal();
      }
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

  addCity = async (city, lat, lon) => {
    try {
      this.toggleSearching();
      const forecast = await this.addForecast(lat, lon);
      await this.setState(prevState => ({
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
      this.saveData();
      this.closeModal();
      this.toggleSearching();
      this.toggleFetching();
    } catch (error) {
      console.log(error);
    }
    console.log(this.state.cities);
  };

  addForecast = async (lat, lon) => {
    try {
      const result = await axios.get(`https://api.darksky.net/forecast/${darkSkyAPI}/${lat},${lon}?exclude=hourly,flags&units=ca`);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  deleteCity = async (index) => {
    try {
      await this.setState(prevState => ({
        cities: prevState.cities.filter((_, i) => i !== index),
      }));

      try {
        if (this.state.activeSlide === this.state.cities.length) {
          this.onSnapToItem(this.state.cities.length - 1);
        } else {
          this.onSnapToItem(index);
        }
      } catch (error) {
        console.log(error);
      }

      this.saveData();
    } catch (error) {
      console.log(error);
    }
  };

  saveData = async () => {
    try {
      const { cities } = this.state;
      const nextCities = cities.map(each => ({
        city: each.city,
        lat: each.lat,
        lon: each.lon,
      }));
      await AsyncStorage.setItem('nextCities', JSON.stringify(nextCities));
    } catch (error) {
      console.log(error);
    }
  };

  toggleFetching = () => this.setState(prevState => ({ isFetching: !prevState.isFetching }));
  toggleSearching = () => this.setState(prevState => ({ isSearching: !prevState.isSearching }));
  toggleModal = () => this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  closeModal = () => this.setState({ isModalVisible: false });

  renderItem = ({ item, index }) => (
    <SlideItem item={item} index={index} deleteCity={this.deleteCity} />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.isFetching ? <Loading /> : null}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContainer}>
            <Search onPress={this.onPress} />
            {this.state.isSearching ? <Loading /> : null}
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
        {this.state.cities.length < 6 ? (
          <Button
            onPress={() => this.toggleModal()}
            title="Add City"
            style={{ backgroundColor: 'black' }}
          />
        ) : (
          <Button
            onPress={() => console.log('Maximum cities added')}
            title="Maximum cities added"
            style={{ backgroundColor: 'black' }}
          />
        )}
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
});

export default WeatherScreen;
