import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Dimensions,
  ToastAndroid,
  ImageBackground,
  Button,
} from 'react-native';
import {routes} from '@navigation/routes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {icons} from '@assets';
import {theme} from '@theme';
import styles from './style';

const OrderSuccessScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={icons.finish}
        style={styles.image}></Image>

      {/* <View style={styles.body}> */}
      <Text style={styles.text}>Đặt hàng thành công</Text>
      <Text style={{color: '#7FB0DD'}}>Mã đơn hàng:</Text>
      <Text style={{color: '#1DA1F2'}}>{id}</Text>
      {/* </View> */}

      <TouchableOpacity
        onPress={() => navigation.navigate(routes.HOMESCREENS)}
        style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>TIẾP TỤC</Text>
      </TouchableOpacity>
    </View>
  );
};
export default OrderSuccessScreen;
