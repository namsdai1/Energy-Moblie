import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
  },
  button: {
    width: '95%',
    height: 48,
    marginVertical: 10,
    marginTop: 30,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
