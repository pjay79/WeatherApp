import React from 'react';
import PropTypes from 'prop-types';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import googlePlacesAPI from '../../config/google';
import styles from './styles';

const Search = ({ onPress }) => (
  <GooglePlacesAutocomplete
    placeholder="Search"
    minLength={2} // minimum length of text to search
    autoFocus={false}
    returnKeyType="go" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
    listViewDisplayed="auto" // true/false/undefined
    fetchDetails
    renderDescription={row => row.description} // custom description render
    onPress={onPress}
    getDefaultValue={() => ''}
    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: googlePlacesAPI,
      language: 'en', // language of the results
      types: '(cities)', // default: 'geocode'
    }}
    styles={styles}
    currentLocation
    // Will add a 'Current location' button at the top of the predefined places list
    currentLocationLabel="Current location"
    nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    GoogleReverseGeocodingQuery={{
      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
    }}
    GooglePlacesSearchQuery={{
      // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
      rankby: 'distance',
      // types: 'food',
    }}
    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
    // filter the reverse geocoding results by types
    // ['locality', 'administrative_area_level_3']
    // if you want to display only cities
    // predefinedPlaces={[homePlace, workPlace]}
    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce.
    // By default 0ms.
    // renderLeftButton={() => <Image source={require('path/custom/left-icon')} />}
    // renderRightButton={() => <Text>Select</Text>}
  />
);

Search.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Search;
