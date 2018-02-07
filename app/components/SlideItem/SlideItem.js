import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SlideItem = ({ item }) => (
  <View style={styles.slide}>
    <Text style={styles.title}>{item.city}</Text>
    <Text style={styles.title}>{item.forecast.data.currently.temperature}</Text>
    <Text style={styles.title}>{item.forecast.data.currently.summary}</Text>
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
