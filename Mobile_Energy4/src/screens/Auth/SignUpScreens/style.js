import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },

  viewLogo: {
    width: 100,
    height: 130,
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  viewInLogo: {
    width: '100%',
    height: '100%',
  },

  viewFormLogin: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },

  txtTitle: {
    fontSize: 18,
    color: theme.colors.secondary,
    textAlign: 'left',
  },

  txtInput: {
    marginVertical: height * 0.01,
    color: theme.colors.black,
    backgroundColor: theme.colors.smoke,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 8,
  },

  viewForgotPassword: {
    alignSelf: 'flex-end',
  },

  txtForgotPassword: {
    fontSize: 16,
    textAlign: 'right',
    color: theme.colors.secondary,
  },

  viewButtonRegister: {
    backgroundColor: theme.colors.primary,
    height: 56,
  },

  txtButtonRegister: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  txtLoginWith: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 16,
    color: theme.colors.greyTitle,
  },

  viewLoginWith: {
    alignSelf: 'center',
    marginVertical: height * 0.04,
  },

  thumb1: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 16,
  },

  viewSignIn: {
    position: 'absolute',
    bottom: 0,
    alignSelf:'center',
    height: 30,
  },

  txtSignIn: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },

  txtErorr: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.red,
  },

});
