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

export default class WeatherScreen extends Component {
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
    this.fetchData();
  }

  onSnapToItem = index => this.setState({ activeSlide: index });

  onPress = async (data, details) => {
    try {
      const { cities } = this.state;
      const addedCity = cities.find(item => item.city === details.name);
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
      this.setState(prevState => ({ isFetching: !prevState.isFetching }));
      const result = await AsyncStorage.getItem('nextCities');
      const cities = JSON.parse(result);
      cities.map(item => this.addCity(item.city, item.lat, item.lon));
      this.setState(prevState => ({ isFetching: !prevState.isFetching }));
    } catch (error) {
      this.setState(prevState => ({ isFetching: !prevState.isFetching }));
      console.log(error);
    }
  };

  addCity = async (city, lat, lon) => {
    try {
      this.setState(prevState => ({ isSearching: !prevState.isSearching }));
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
      const { cities } = this.state;
      const nextCities = cities.map(item => ({
        city: item.city,
        lat: item.lat,
        lon: item.lon,
      }));
      await AsyncStorage.setItem('nextCities', JSON.stringify(nextCities));
      this.setState(prevState => ({
        isSearching: !prevState.isSearching,
        isFetching: !prevState.isFetching,
        isModalVisible: false,
      }));
    } catch (error) {
      this.setState(prevState => ({ isSearching: !prevState.isSearching }));
      console.log(error);
    }
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
      this.setState(
        prevState => ({
          cities: prevState.cities.filter((_, i) => i !== index),
        }),
        () => {
          if (this.state.activeSlide === this.state.cities.length) {
            this.onSnapToItem(this.state.cities.length - 1);
          }
          const { cities } = this.state;
          const nextCities = cities.map(each => ({
            city: each.city,
            lat: each.lat,
            lon: each.lon,
          }));
          AsyncStorage.setItem('nextCities', JSON.stringify(nextCities));
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  toggleModal = () => this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));

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
            title="ADD CITY"
            style={{ backgroundColor: 'black' }}
          />
        ) : (
          <Button
            onPress={() => console.log('LIMIT REACHED')}
            title="LIMIT REACHED"
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
