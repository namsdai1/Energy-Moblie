import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import Phones from './Phones';
import {PrimaryButton} from './Button';
import Count from '@components/Count';
import {formatCurrency} from '@utils/utils';
import {connect} from 'react-redux';
import {
  addBillAction,
  addbillNullAction,
  getCartByUser,
  getStoreByIdAction,
  UpdateCartByUser,
} from '../../../redux/actions';
import {useData} from 'config/config';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {Block, Header, Thumbnail} from '@components';
import {icons} from '@assets';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '@components/Loadding/Loading';

const mapStateToProps = state => {
  console.log(state.getStoreByIdReducer);
  return {
    error: state.getCartByUserReducer ? state.getCartByUserReducer.error : null,
    data: state.getCartByUserReducer ? state.getCartByUserReducer.data : null,
    dataUpdate: state.updateCartByCartReducer
      ? state.updateCartByCartReducer.data
      : null,
    loadding: state.getCartByUserReducer
      ? state.getCartByUserReducer.loadding
      : null,

    loaddingStore: state.getStoreByIdReducer
      ? state.getStoreByIdReducer.loadding
      : null,
    dataStore: state.getStoreByIdReducer
      ? state.getStoreByIdReducer.data
      : null,
    errorStore: state.getStoreByIdReducer
      ? state.getStoreByIdReducer.error
      : null,

    dataPayment: state.addBillReducers.data,
    errorPayment: state.addBillReducers.error,
    loaddingPayment: state.addBillReducers.loadding,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCartByUser: id => {
      dispatch(getCartByUser(id));
    },
    UpdateCartByUser: input => {
      dispatch(UpdateCartByUser(input));
    },
    getStoreByIdAction: id => {
      dispatch(getStoreByIdAction(id));
    },
    addBillAction: input => {
      dispatch(addBillAction(input));
    },
    addbillNullAction: () => {
      dispatch(addbillNullAction());
    },
  };
};
const CartScreens = ({
  data,
  getCartByUser,
  UpdateCartByUser,
  dataUpdate,
  loaddingStore,
  dataStore,
  errorStore,
  getStoreByIdAction,
  addBillAction,
  dataPayment,
  addbillNullAction,
  loadding,
  error,
  errorPayment,
}) => {
  const navigation = useNavigation();
  const [dataCart, setDataCart] = useState([]);
  const [dataID, setDataID] = useState('');
  const [storeId, setStoreId] = useState('');
  const [dataTotal, setDataTotal] = useState(0);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (useData.token !== null) {
      getCartByUser(useData.id);
    }
  }, [UpdateCartByUser, dataUpdate, getCartByUser]);

  useEffect(() => {
    setLoading(loadding)
  }, [loadding])

  useEffect(() => {
    if(error !== null){
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error])

  useEffect(() => {
    if(errorStore !== null){
      console.log(errorStore);
      ToastAndroid.show('Lỗi: ' + errorStore, ToastAndroid.SHORT);
    }
  }, [errorStore])

  useEffect(() => {
    if(errorPayment !== null){
      console.log(errorPayment);
      ToastAndroid.show('Lỗi: ' + errorPayment, ToastAndroid.SHORT);
    }
  }, [errorPayment])

  const _setDataCart = aa => {
    setDataCart(aa.products);
    setDataTotal(aa.total);
  };
  useEffect(async () => {
    //
    //   if (data !== null) {
    //     console.log(data.data);
    //      setDataCart(data.data.products);
    //      setDataID(data.data._id);
    //      setDataTotal(data.data.total);
    //   }
    //
    if (useData.token !== null) {
      const cart = await AsyncStorage.getItem(useData.id);
      const aa = JSON.parse(cart);
      _setDataCart(aa);
      //  setDataCarts(aa);
    }
  }, [AsyncStorage.getItem(useData.id)]);
  useEffect(() => {
    if (dataStore !== null) {
      setName(dataStore.name);
      setPhone(dataStore.phone + '');
      setStoreId(dataStore.data._id);
      setAddress(dataStore.data.address_store + '');
    }
  }, [dataStore]);
  useEffect(async () => {
    if (dataPayment !== null) {
      addbillNullAction();
      await AsyncStorage.removeItem(useData.id);
      navigation.navigate(routes.ORDER_SUCCESS_SCREEN, {
        id: dataPayment.data._id,
      });
    }
  }, [dataPayment]);
  return (
    <SafeAreaView style={{backgroundColor: '#F5F5F5', flex: 1}}>
      <Header
        title={'Thanh toán'}
        iconLeft={icons.back}
        leftPress={() => navigation.goBack()}
        color={theme.colors.primary}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.ORDERLOCATION);
        }}>
        <Block
          paddingHorizontal={getSize.m(10)}
          paddingVertical={getSize.m(12)}
          style={{
            borderColor: theme.colors.lightGray,
            backgroundColor: COLORS.white,
            borderBottomWidth: 1,
          }}
          row>
          <Block style={{flex: 10}}>
            <Block row alignCenter>
              <Thumbnail
                source={icons.local}
                imageStyle={{width: getSize.s(25), height: getSize.s(25)}}
              />
              {name !== '' ? (
                <Block row alignCenter>
                  <Block
                    style={{
                      borderColor: theme.colors.lightGray,
                      borderRightWidth: 1,
                    }}>
                    <Text style={style.txtLocal}>{name}</Text>
                  </Block>
                  <Text style={style.txtLocal}>{phone}</Text>
                </Block>
              ) : (
                <Text style={style.txtLocal}>Mời nhập thông tin nhận hàng</Text>
              )}
            </Block>
            <Block>
              <Text
                numColumns={2}
                style={{
                  color: theme.colors.placeholder,
                  paddingLeft: getSize.m(6),
                }}>
                {address !== '' ? address : 'Xin mời chọn địa chỉ nhận hàng'}
              </Text>
            </Block>
          </Block>
          <Block flex alignEnd justifyCenter>
            <Thumbnail
              source={icons.next}
              imageStyle={{width: getSize.s(20), height: getSize.s(20)}}
            />
          </Block>
        </Block>
      </TouchableOpacity>
      <ScrollView>
        {dataCart.map((item, index) => (
          <CartCard
            setDataTotal={setDataTotal}
            dataTotal={dataTotal}
            item={item}
            index={index}
            dataCart={dataCart}
            dataID={dataID}
            UpdateCartByUser={UpdateCartByUser}
          />
        ))}
        <Block
          marginBottom={140}
          backgroundColor={theme.colors.white}
          row
          paddingVertical={12}
          paddingHorizontal={10}>
          {/* <Thumbnail/> */}
          <Block style={{flex: 2.5}} row alignCenter>
            <Thumbnail
              source={icons.dollar}
              imageStyle={{width: getSize.s(30), height: getSize.s(30)}}
            />
            <Text
              style={[
                style.txtText,
                {color: theme.colors.gray, marginLeft: getSize.m(10)},
              ]}>
              Phương thức thanh toán
            </Text>
          </Block>
          <Block flex row justifyCenter alignCenter>
            <Text style={[style.txtText, {color: 'black', textAlign: 'right'}]}>
              Thanh toán tại siêu thị
            </Text>
            <Thumbnail
              source={icons.next}
              imageStyle={{width: getSize.s(20), height: getSize.s(20)}}
            />
          </Block>
        </Block>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          paddingVertical: 12,
          position: 'absolute',
          bottom: 0,
          marginTop: 8,
          backgroundColor: COLORS.white,
        }}>
        <View style={{width: '50%', justifyContent: 'center'}}>
          <Text style={{fontSize: 18}}>Tổng</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
            {formatCurrency(dataTotal)}
          </Text>
        </View>
        <View style={{width: '50%'}}>
          <PrimaryButton
            title="Thanh Toán"
            onPress={() => {
              console.log(dataCart);
              console.log({
                id_user: useData.id,
                total: dataTotal,
                id_store: storeId,
                name: name,
                phone: phone,
                products: dataCart,
              });
              if (name !== '' && phone !== '' && address !== '') {
                addBillAction({
                  id_user: useData.id,
                  id_cart: dataID,
                  id_store: storeId,
                  name: name,
                  phone: phone,
                  total: dataTotal,
                  products: dataCart,
                });
              } else {
                ToastAndroid.show(
                  'Vui lòng nhập đầy đủ thông tin',
                  ToastAndroid.LONG,
                );
              }
            }}
          />
        </View>
      </View>
      {/*Có cái này mới hiện loading!!!*/}
      {loading && (<Loading/>)}
    </SafeAreaView>
  );
};
const CartCard = ({
  setDataTotal,
  item,
  index,
  dataCart,
  dataID,
  UpdateCartByUser,
  dataTotal,
  getCartByUser,
}) => {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setAmount(item.amount);
  }, [getCartByUser]);
  const {id_image, price_product, nameProduct} = item;

  return (
    <View style={style.cartCard}>
      <Image source={{uri: id_image}} style={{height: 90, width: 80}} />
      <View
        style={{
          marginLeft: 10,
          paddingVertical: 20,
          flex: 1,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{nameProduct}</Text>
        <Text style={style.txtText}>Phân loại:{nameProduct}</Text>
        <Block row>
          <Text style={[style.txtText, {flex: 7}]}>
            {formatCurrency(price_product)}
          </Text>
          <Block flex alignEnd>
            <Text style={{fontSize: 16, color: COLORS.grey}}>X{amount}</Text>
          </Block>
        </Block>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: COLORS.primary,
    paddingTop: StatusBar.currentHeight + 12,
    paddingBottom: 12,
  },
  txtText: {
    fontSize: 16,
    color: COLORS.grey,
  },
  cartCard: {
    marginVertical: 5,

    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderColor: COLORS.grey,
  },
  actionBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  txtLocal: {
    fontWeight: 'bold',
    fontSize: getSize.m(16),
    paddingHorizontal: getSize.m(6),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreens);
