import React, {useEffect, useRef, useState} from 'react';
import {View, ToastAndroid, ScrollView, StatusBar} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {routes} from '../../../navigation/routes.js';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import {connect} from 'react-redux';
import {loginAction} from '../../../redux/actions';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
//import Loadding
import Loading from '@components/Loadding/Loading';

import {
  Block,
  Button,
  Text,
  Header,
  TextInput,
  Thumbnail,
  PressText,
} from '@components';
import {useData} from 'config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import style from '@components/Card/FlatCard/style';

const mapStateToProps = state => {
  return {
    error: state.loginReducers ? state.loginReducers.error : null,
    data: state.loginReducers ? state.loginReducers.data : null,
    //loading
    loadding: state.loginReducers.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (user, password) => {
      dispatch(loginAction(user, password));
    },
  };
};
const LoginScreens = ({loginAction, data, loadding, error}) => {
  // tao useState Loadding
  const [loading, setLoading] = useState(false);
  //
  //const {email_user, pwd_user} = data;

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textError, setTextError] = useState('');

  function* _login() {}

  //Loadding trong screen
  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if(error !== null){
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error])

  useEffect(async () => {
    if (data !== null) {
      await AsyncStorage.setItem('token', data.data.accesToken);
      const tolen = data.data.accesToken;
      var decoded = jwt_decode(tolen);
      useData.token = tolen;
      useData.id = decoded.id;
      console.log(data);
      console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH DATA');

      _login();
      // navigation.dispatch(
      //         CommonActions.reset({
      //           index: 1,
      //           routes: [
      //             { name:  routes.PROFILESCREENS},
      //             {
      //               name: routes.HOMESCREENS,
      //             },
      //           ],
      //         })
      //       );
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: routes.BOTTOMTABBAR,
            },
          ],
        }),
      );
    }
  }, [data]);

  const checkLogin = () => {
    if (email === '' && password === '') {
      setTextError('Email và mật khẩu không được để trống!');
    } 
    else if(email === ''){
      setTextError('Email không được để trống!');
    }
    else if(password === ''){
      setTextError('Mật khẩu không được để trống!');
    }
    else {
      loginAction(email, password);
      setTextError('');
     }
  };

  return (
    <>
      <Header
        title="Đăng nhập"
        iconLeft={icons.back}
        leftPress={() => navigation.goBack()}
      />
      <Block flex paddingHorizontal={getSize.m(16)} style={styles.container}>
        <Thumbnail
          source={icons.logoo}
          style={styles.viewLogo}
          imageStyle={styles.viewInLogo}
        />

        <Block style={styles.viewFormLogin}>
          <Text style={styles.txtTitle}>Đăng nhập để tiếp tục</Text>

          <TextInput
            iconleft={icons.email}
            placeholder="Nhập email..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setEmail(text)}
            style={styles.txtInput}
            iconStyle={{
              width: 24,
              height: 24,
              tintColor: theme.colors.grayText,
            }}
            keyboardType="email-address"
            autoFocus={true}
          />

          <TextInput
            iconleft={icons.psdlg}
            issecure
            placeholder="Nhập password..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setPassword(text)}
            style={styles.txtInput}
            iconStyle={{
              width: 24,
              height: 24,
              tintColor: theme.colors.grayText,
            }}
          />
          <PressText
            title="Quên mật khẩu?"
            onPressOut={() => {
              console.log('Quên mật khẩu'),
              navigation.navigate(routes.NUMBERPHONESCREEN)}
            }
            style={styles.viewForgotPassword}
            titleStyle={styles.txtForgotPassword}
          />
          
          <Button
            shadow
            title="ĐĂNG NHẬP"
            onPress={() => {
              
              checkLogin();  
            }}
            style={styles.viewButtonLogin}
            titleStyle={styles.txtButtonLogin}
          />

          <Text style={styles.txtErorr}>{textError}</Text>

        </Block>
        <Block style={styles.viewLoginWith}>
          <Text style={styles.txtLoginWith}>Hoặc đăng nhập với</Text>
          <Block row>
            <Thumbnail
              source={icons.facebook}
              onPress={() => console.log('Facebook')}
              style={styles.thumb1}
            />
            <Thumbnail
              source={icons.twitter}
              onPress={() => console.log('Twitter')}
              style={styles.thumb1}
            />
            <Thumbnail
              source={icons.google}
              onPress={() => console.log('Google')}
              style={styles.thumb1}
            />
          </Block>
        </Block>

        <Block style={styles.viewSignUp}>
          <PressText
            title="BẠN CHƯA CÓ TÀI KHOẢN? ĐĂNG KÝ"
            onPress={() => navigation.navigate(routes.SIGNUPSCREENS)}
            titleStyle={styles.txtSignUp}
          />
        </Block>
        {/* Tao cai nay ms hien Loadding */}
        {loading && <Loading />}
      </Block>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreens);
