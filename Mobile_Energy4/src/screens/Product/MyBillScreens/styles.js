import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  viewBill: {
    width: width / 2.8,
    height: width / 2.8,
    borderRadius: width / 5.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.thirdy,
  },
  imgBill: {
    width: '65%',
    height: '65%',
  },
});
