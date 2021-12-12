import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    width: '47%',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.colors.smoke,
    backgroundColor: theme.colors.white,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    margin: getSize.m(5),
  },

  viewContent: {
    marginBottom: 8,
    borderRadius: 6,
  },

  viewContentImage: {
    width: '100%',
    height: getSize.v(180),
    borderRadius: 8,
    alignSelf: 'center',
  },

  txtTitle: {
    color: theme.colors.blackText,
    fontSize: 18,
    textAlign: 'left',
  },

  txtPrice: {
    color: theme.colors.blackText,
    fontWeight: 'bold',
    fontSize: 18,
    width: '100%',
    textAlign: 'left',
  },

  txtBought: {
    color: theme.colors.gray,
    fontSize: 12,
    textAlign: 'right',
    width: '40%',
    paddingRight: 4,
    marginBottom: 3,
    alignSelf: 'flex-end',
  },
});
