import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  body: {
    width: 328,
    height: 351,
    position: 'absolute',
    top: height / 4,
    backgroundColor: '#ffff',
    borderRadius: 15,
    alignItems: 'center',
  },
  products: {
    flexDirection: 'row',
    borderBottomWidth: 0.7,
    borderColor: theme.colors.gray,
    paddingVertical: getSize.m(6),
    paddingHorizontal: getSize.m(10),
  },
  fontSize:{
    fontSize:getSize.m(18),
},
  textArea:{
    width:'100%',
    height:200,
    borderRadius:5,
    borderWidth:2,
    borderColor:'#888888',
    padding:10,
    textAlignVertical: 'top',
    backgroundColor: theme.colors.grey
  },
  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 2,
    margin:10
  },
  icon: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: width,
    height: height,
  },
  check: {
    width: 40,
    height: 40,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  text: {
    color: '#50ABF1',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text_1: {
    color: '#909090',
    fontSize: 16,
  },
  textin: {
    width: 264,
    height: 167,
    marginTop: 20,
    backgroundColor: '#ff88',
    borderRadius: 8,
  },
  nut: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '95%',
    height: 48,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#1DA1F2',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
