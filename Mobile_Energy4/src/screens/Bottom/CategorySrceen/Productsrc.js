import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import Phones from './Phones';
import {PrimaryButton} from './Button';
import Count from '@components/Count';
import {formatCurrency} from '@utils/utils';
import {connect} from 'react-redux';
import {getCartByUser, getProductByCategoriesChild, UpdateCartByUser} from '../../../redux/actions';
import {useData} from 'config/config';
import {useNavigation,useRoute} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {Header, Product, Thumbnail} from '@components';
import {icons} from '@assets';
import {getSize} from '@utils/responsive';

const mapStateToProps = state => {
    console.log(state.getProductByCategoriesChildReducer.data)
    return {
      error: state.getProductByCategoriesChildReducer ? state.getProductByCategoriesChildReducer.error : null,
     data: state.getProductByCategoriesChildReducer ? state.getProductByCategoriesChildReducer.data : null,
  
     loadding: state.getProductByCategoriesChildReducer? state.getProductByCategoriesChildReducer.loadding: null,
      
  
  };
  }
  const mapDispatchToProps = dispatch => {
    console.log('asdasdas->>')
   return {
     getProductByCategoriesChild: (id) => {
       dispatch(getProductByCategoriesChild(id));
     },
   };
  };
const Productsrc  = ({getProductByCategoriesChild,data, error}) => {
    const [data1, setData1] = useState([])
    const route = useRoute();
    const {item} = route.params;
    useEffect(() => {
        getProductByCategoriesChild(item)

    },[])
    useEffect(() => {

        if(data !== null){
            setData1(data)
            console.log('=====================>>')
        }
    },[data])

    useEffect(() => {
      if(error !== null){
        console.log(error);
        ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
      }
    }, [error])

    return (<Product data={data1}/>)
};
export default connect (mapStateToProps, mapDispatchToProps)(Productsrc);




