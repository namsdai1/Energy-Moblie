import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: theme.colors.white,
    marginHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: height,
    justifyContent: 'center',
  },
  check: {
    marginVertical: 10,
  },
  text: {
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginVertical:12,
    paddingHorizontal:getSize.m(40),
    paddingVertical: 12,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
