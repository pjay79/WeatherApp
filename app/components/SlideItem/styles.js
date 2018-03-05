import { StyleSheet, Dimensions } from 'react-native';

const { height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    height: viewportHeight,
    paddingBottom: 200,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gold',
  },
  title: {
    fontSize: 36,
    color: 'black',
  },
  icon: {
    height: 80,
    width: 80,
    marginBottom: 25,
  },
  temperature: {
    fontSize: 24,
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  details: {},
  subDetails: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subDetailsIcon: {
    height: 14,
    width: 14,
    marginRight: 20,
  },
  subDetailsText: {
    fontSize: 14,
  },
  deleteIcon: {
    marginBottom: 20,
  },
});

export default styles;
