import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import weatherIcons from '../../constants/weatherIcons';

const SlideItem = ({ item, index, deleteCity }) => (
  <View style={styles.slide}>
    <Text style={styles.title}>{item.city}</Text>
    <Image style={styles.icon} source={weatherIcons[item.forecast.data.daily.data[0].icon]} />
    <Text style={styles.temperature}>{item.forecast.data.currently.temperature}&deg;C</Text>
    <Text style={styles.description}>{item.forecast.data.daily.data[0].summary.toUpperCase()}</Text>
    <View style={styles.details}>
      <View style={styles.subDetails}>
        <Image
          style={styles.subDetailsIcon}
          source={require('../../assets/images/weatherIcons/humidity.png')}
        />
        <Text style={styles.subDetailsText}>Humidity: {item.forecast.data.currently.humidity}</Text>
      </View>
      <View style={styles.subDetails}>
        <Image
          style={styles.subDetailsIcon}
          source={require('../../assets/images/weatherIcons/sunblock.png')}
        />
        <Text style={styles.subDetailsText}>uvIndex: {item.forecast.data.currently.uvIndex}</Text>
      </View>
      <View style={styles.subDetails}>
        <Image
          style={styles.subDetailsIcon}
          source={require('../../assets/images/weatherIcons/gust.png')}
        />
        <Text style={styles.subDetailsText}>Wind: {item.forecast.data.currently.windGust}km/h</Text>
      </View>
    </View>
    <TouchableOpacity onPress={() => deleteCity(index)} style={styles.deleteIcon}>
      <Icon name="trash-o" size={20} />
    </TouchableOpacity>
  </View>
);

SlideItem.propTypes = {
  item: PropTypes.shape({
    city: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    forecast: PropTypes.object.isRequired,
  }).isRequired,
  deleteCity: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SlideItem;
