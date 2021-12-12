import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white, 
  },

  viewEdit: {
    backgroundColor: theme.colors.white,
  },

  viewText: {
    backgroundColor: theme.colors.white,
    height: 80,
  },

  view: {
    backgroundColor: theme.colors.white,
    position: 'relative',
    borderRadius: 50,
  },

  viewIcon: {
    backgroundColor: theme.colors.primary,
    height: 32,
    width: 32,
    margin: 8,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inViewIcon: {
    width: '70%',
    height: '70%',
    borderRadius: 100 / 2,
    backgroundColor: theme.colors.primary,
    alignSelf: 'center',
    tintColor: theme.colors.white
  },

  viewIsSeen: {
    backgroundColor: theme.colors.white,
    height: 16,
    width: 16,
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 6,
    right: 6,
  },

  inViewIsSeen: {
    width: '80%',
    height: '80%',
    borderRadius: 100 / 2,
    backgroundColor: theme.colors.red,
    alignSelf: 'center'
  },

  viewContent: {
    backgroundColor: theme.colors.grey,
    height: 72,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
  },

  viewContentImage: {
    width: 72,
    height: 72,
    borderRadius: 8,
    alignSelf: 'flex-start'
  },

  txtTitle: {
    color: theme.colors.gray,
    fontSize: 14,
    width: '96%',
  },

  txtTime: {
    color: theme.colors.placeholder,
    fontSize: 12,
  },

  txtContent: {
    color: theme.colors.gray,
    fontSize: 14,
    alignSelf: 'center',
    marginLeft: 4,
    width: '72%',
  },

});
