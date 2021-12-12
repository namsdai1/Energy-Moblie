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

  viewEdit: {
    backgroundColor: theme.colors.white,
  },

  viewText: {
    backgroundColor: theme.colors.white,
    height: 80,
  },

  textInput: {
    height: 40,
    backgroundColor:theme.colors.white,
    borderBottomWidth: 0.5,
    borderColor:"#A6A6A6",
    fontSize: 18,
  },

  viewAvatar: {
    backgroundColor: theme.colors.primary,
    height: 140,
  },

  inViewAvatar: {
    width: 90,
    height: 90,
    borderRadius: 100 / 2,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  inAvatar: {
    width: '96%',
    height: '96%',
    borderRadius: 100 / 2,
  },

  inEditViewAvatar: {
    width: 32,
    height: 32,
    borderRadius: 100 / 2,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 20,
  },
  
  inEditAvatar: {
    width: '90%',
    height: '90%',
    borderRadius: 100 / 2,
    alignSelf: 'center'
  },

  txtUsn: {
    color: theme.colors.white,
    fontWeight: 'bold',
    marginVertical: 2,
    fontSize: 16,
  },
  
  txtTitle: {
    color: theme.colors.black,
    marginLeft:4,
  },

  txtSave: {
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    color:theme.colors.white,
  },

  btnSave: {
    height: 52,
    width: '92%',
    flex:1,
    backgroundColor: theme.colors.primary,
    justifyContent:'center',
    position: 'absolute',
    alignSelf:'center',
    alignItems: 'center',
    bottom: 0,
    borderRadius: 6,
  },

  txtErorr: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.red,
  },

});
