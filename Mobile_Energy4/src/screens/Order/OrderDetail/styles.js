import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
    position: 'relative',
  },

  viewHeader: {
    backgroundColor: theme.colors.white,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: theme.colors.gray,
    marginBottom: 4,
  },

  viewOrderId: {
    alignItems: 'flex-start',
    width: '100%',
    borderBottomWidth: 0.3,
    borderColor: theme.colors.smoke,
    paddingVertical: 8,
  },

  viewStatus: {
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: 16,
  },

  imageOrderBill: {
    width: 30,
    height: 38,   
  },

  txtStatus: {
    color: theme.colors.blackText,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    alignItems: 'center',
  },

  txtOrderDate: {
    color: theme.colors.gray,
    fontSize: 14,
    textAlign: 'left',
  },

  viewOderInfo: {  
    backgroundColor: theme.colors.white,
    marginBottom: 2,
  },

  viewInOderInfo: {  
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: 8,
  },

  viewProduct: {  
    borderTopWidth: 0.3,
    borderColor: theme.colors.gray,
  },

  imageProduct: {
    width: 80,
    height: 80,
  },

  txtNameProduct: {  
    fontSize: 18,
    color: theme.colors.blackText,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  txtInfoProduct: {
    color: theme.colors.grayLightText,
    fontSize: 16,
    textAlign: 'left',
    paddingVertical: 4,
  },

  txtPrice: {
    color: theme.colors.blackText,
    fontSize: 16,
    textAlign: 'left',
  },

  txtTotal: {
    color: theme.colors.blackText,
    fontSize: 18,
    textAlign: 'left',
    width: '50%',
  },

  txtTotall: {
    color: theme.colors.blackText,
    fontSize: 18,
    textAlign: 'right',
    width: '50%',
  },

  viewTotal: {  
    width: '100%',
    backgroundColor: theme.colors.white,
    marginBottom: 2,
  },

  viewInfo: {  
    width: '100%',
    backgroundColor: theme.colors.white,
  },

  txtAddress: {
    color: theme.colors.blackText,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  v5: {  
    height: 52,
    width: '92%',
    backgroundColor: theme.colors.primary,
    justifyContent:'center',
    position: 'absolute',
    alignSelf:'center',
    alignItems: 'center',
    bottom: 16,
    borderRadius: 6,
  },

  text: {
    color: theme.colors.black,
    fontSize: 16,
    textAlign: 'center',
    margin: 4,
  },

  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
  }
});
