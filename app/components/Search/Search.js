import PropTypes from 'prop-types';
import React from 'react';
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
    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: googlePlacesAPI,
      language: 'en', // language of the results
      types: '(cities)', // default: 'geocode'
    }}
    styles={styles}
    currentLocation={false}
    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce.
    // By default 0ms.
  />
);

Search.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Search;
