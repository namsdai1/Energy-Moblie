import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  viewPrimary: {
    height: height / 5.5,
    backgroundColor: theme.colors.primary,
  },
  viewAvt: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderWidth: 2,
    borderColor: theme.colors.white,
    padding: 1,
    marginRight: 5,
    position: 'relative',
  },
  avt: {
    width: '100%',
    height: '100%',
    borderRadius: 100 / 2,
  },
  viewEdit: {
    backgroundColor: theme.colors.white,
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    position: 'absolute',
    right: 2,
    bottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icEdit: {
    width: '60%',
    height: '60%',
    tintColor: theme.colors.primary,
  },
  viewBorder: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 20,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  viewInfo: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  titleInfo: {
    fontSize: 20,
  },
  btnEditInfo: {
    width: 28,
    height: 28,
    borderRadius: 5,
    padding: 5,
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icEditInfo: {
    width: '90%',
    height: '90%',
    tintColor: theme.colors.white,
  },
  boxInfo: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.grey,
    borderRadius: 8,
    marginVertical: 5,
  },
  titleBox: {
    marginVertical: 1,
    fontSize: 16,
  },
  contentBox: {
    marginVertical: 1,
    fontSize: 14,
    color: theme.colors.gray,
  },
});
