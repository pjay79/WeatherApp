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
    marginBottom: 30,
  },
  temperature: {
    fontSize: 24,
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  icon: {
    height: 80,
    width: 80,
    marginBottom: 25,
  },
  deleteIcon: {
    marginTop: 10,
  },
});

export default styles;
