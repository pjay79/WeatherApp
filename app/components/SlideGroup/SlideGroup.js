import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';

const { width: viewportWidth } = Dimensions.get('window');

const SlideGroup = ({
  data, renderItem, activeSlide, onSnapToItem,
}) => (
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
      onSnapToItem={onSnapToItem}
    />
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeSlide}
      containerStyle={{ backgroundColor: 'gold' }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
      }}
      inactiveDotStyle={{
        // Define styles for inactive dots here
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
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
  onSnapToItem: PropTypes.func.isRequired,
  activeSlide: PropTypes.number.isRequired,
};

export default SlideGroup;
