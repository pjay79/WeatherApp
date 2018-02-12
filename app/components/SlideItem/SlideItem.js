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
