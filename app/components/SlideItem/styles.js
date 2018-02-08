import { StyleSheet, Dimensions } from 'react-native';

const { height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    height: viewportHeight,
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  title: {
    fontSize: 36,
    color: 'black',
    marginBottom: 50,
  },
  temperature: {
    fontSize: 24,
    color: 'black',
  },
  description: {
    fontSize: 18,
    color: 'black',
  },
  icon: {
    height: 100,
    width: 100,
    marginBottom: 25,
  },
});

export default styles;
