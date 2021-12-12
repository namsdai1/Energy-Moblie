import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },

  header: {
    backgroundColor: theme.colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: StatusBar.currentHeight + 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },

  viewIcon: {
    width: 34,
    height: 34,
    backgroundColor: theme.colors.white,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: theme.colors.white,
    fontSize: getSize.m(20),
  },

  blockTop: {
    marginTop: 16 + 28 + StatusBar.currentHeight,
    width: width,
    paddingHorizontal: getSize.s(12),
    paddingVertical: 8,
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  searchBox: {
    backgroundColor: theme.colors.aqua,
    borderColor: theme.colors.aqua,
  },

  search: {
    color: theme.colors.white,
    fontSize: getSize.v(15),
  },

  bannerBlock: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    marginVertical: getSize.s(16),
  },

  banner: {
    borderRadius: 10,
  },

  blockCategory: {
    paddingHorizontal: getSize.s(10),
    paddingVertical: getSize.s(6),
  },

  blockProductContainer: {
    marginVertical: getSize.s(6),
    width: width,
    backgroundColor: theme.colors.thirdy,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: getSize.s(12),
    paddingVertical: getSize.s(12),
  },

  blockTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },

  textTitle: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: getSize.m(16),
  },
  viewMore: {
    flexDirection: 'row',
  },
  txtMore: {
    color: theme.colors.primary,
  },
});
