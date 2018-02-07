import { StyleSheet, Dimensions } from 'react-native';

const { height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    height: viewportHeight,
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'gold',
  },
  title: {
    fontSize: 36,
    color: 'black',
  },
});

export default styles;
