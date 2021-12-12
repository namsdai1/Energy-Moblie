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

  viewForm: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },

  txtTitle: {
    fontSize: 20,
    color: theme.colors.blackText,
    textAlign: 'left',
    fontWeight: 'normal',
  },

  txt: {
    fontSize: 16,
    color: theme.colors.blackText,
    textAlign: 'left',
  },

  txtNumberPhone: {
    fontSize: 16,
    color: theme.colors.blackText,
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

  viewButtonGetOTP: {
    height: 52,
    width: '100%',
    backgroundColor: theme.colors.primary,
    justifyContent:'center',
    position: 'absolute',
    alignSelf:'center',
    alignItems: 'center',
    bottom: 16,
    borderRadius: 6,
  },

  txtButtonGetOTP: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: theme.colors.blue,
  },

  txtLoginWith: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 16,
    color: theme.colors.greyTitle,
  },

  txtErorr: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.red,
  },

  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
  },

  viewInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewInInput: {
    paddingVertical: 16,
    width: 46,
    margin: 8,
    borderBottomWidth: 2,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtInInput: {
    textAlign: 'center',
    fontSize: 20,
  },

  viewFormResend: {
    position: 'relative'
  },

  viewDelete: {
    alignSelf: 'flex-end',
    position: 'absolute',
    left: 0
  },

  viewResendOTP: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0
  },

  txtDelete: {
    fontSize: 16,
    textAlign: 'left',
  },

  txtResendOTP: {
    fontSize: 16,
    textAlign: 'right',
    alignSelf: 'flex-end',
  },

});
