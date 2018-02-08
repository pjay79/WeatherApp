import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import slideColors from '../../constants/slideColors';
import weatherIcons from '../../constants/weatherIcons';

const SlideItem = ({ item }) => (
  <View style={[styles.slide, { backgroundColor: slideColors[item.forecast.data.currently.icon] }]}>
    <Text style={styles.title}>{item.city}</Text>
    <Image style={styles.icon} source={weatherIcons[item.forecast.data.currently.icon]} />
    <Text style={styles.temperature}>{item.forecast.data.currently.temperature}</Text>
    <Text style={styles.description}>{item.forecast.data.currently.summary}</Text>
  </View>
);

SlideItem.propTypes = {
  item: PropTypes.shape({
    city: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    forecast: PropTypes.object.isRequired,
  }).isRequired,
};

export default SlideItem;
