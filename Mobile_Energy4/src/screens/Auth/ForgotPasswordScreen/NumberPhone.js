import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes.js';
import {connect} from 'react-redux';
import Loading from '@components/Loadding/Loading';

import {Block, Button, Text, TextInput, Thumbnail, Header} from '@components';
import {theme} from '@theme';

const NumberPhone = ({}) => {
  const navigation = useNavigation();
  const [textError, setTextError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('0369696969');

  const checkNumberPhone = () => {
    var validNumberPhone = /((09|03|07|08|05)+([0-9]{8})\b)/;

    if (phoneNumber === '') {
      setTextError('Số điện thoại không được để trống!');
    } else if (!validNumberPhone.test(phoneNumber)) {
      setTextError('Số điện thoại không đúng định dạng!');
    } else {
      ToastAndroid.show('Được, qua đi', ToastAndroid.SHORT);
      navigation.navigate(routes.SENDOTPSCREEN);
    }
  };

  return (
    <>
      <Header iconLeft={icons.back} leftPress={() => navigation.goBack()} />
      <Block flex padding={16} style={styles.container}>
        <Block style={styles.viewForm}>
          <Text style={styles.txtTitle}>Quên mật khẩu?</Text>
          <Text paddingTop={4} style={styles.txt}>
            Vui lòng nhập số điện thoại để lấy lại mật khẩu
          </Text>

          <Text paddingTop={40} style={styles.txtNumberPhone}>
            Số điện thoại
          </Text>
          <TextInput
            placeholderTextColor={theme.colors.grayText}
            style={styles.txtInput}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="numeric"
          />

          <Text style={styles.txtErorr}>{textError}</Text>
        </Block>

        <Block style={styles.viewButtonGetOTP}>
          <TouchableOpacity
            onPress={() => {
              checkNumberPhone();
            }}
            style={styles.button}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Nhận mã OTP
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </>
  );
};
export default NumberPhone;
