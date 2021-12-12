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
    height: 48,
    backgroundColor: theme.colors.white,
    borderColor:"#FFF",
    alignSelf: 'flex-start',
    borderBottomColor: theme.colors.gray,
    borderRadius: 0,
    borderWidth: 0.5,
    paddingLeft: 0,
  },

  txtTitle: {
    color: theme.colors.black,
    marginLeft:4,
    
  },

  txtSave: {
    color: theme.colors.black,
    marginLeft:4,
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    color:theme.colors.white,
  },

  backgroundBtnSave: {
    width: '100%',
    backgroundColor: theme.colors.white,
    height: 84,
    position: 'absolute',
    bottom:0,
    justifyContent:'center',

  },

  btnSave: {
    width: '92%',
    height: 52,
    backgroundColor:theme.colors.primary,
    borderRadius:6,
    alignSelf:'center',
    justifyContent:'center',
    paddingLeft: 16,
  },

});
