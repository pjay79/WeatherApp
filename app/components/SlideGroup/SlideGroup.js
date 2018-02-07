import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

const { width: viewportWidth } = Dimensions.get('window');

const SlideGroup = ({ data, renderItem }) => (
  <View style={styles.container}>
    <Carousel
      layout="default"
      ref={(c) => {
        this.carousel = c;
      }}
      data={data}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth}
      slideStyle={{ width: viewportWidth }}
    />
  </View>
);

SlideGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    forecast: PropTypes.object.isRequired,
  })).isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default SlideGroup;
