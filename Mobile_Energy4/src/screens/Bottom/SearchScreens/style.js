import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {Image, Pressable, StatusBar} from 'react-native';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    paddingTop: StatusBar.currentHeight+20 ,
  },
  badge:{
    width:14,
    height:14,
    borderRadius:7,
    backgroundColor: theme.colors.red,
    position: 'absolute',
    right:-3,
    top:-5
  },
  
});
