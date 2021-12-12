import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes.js';
import {connect} from 'react-redux';
import {signUpAction} from '../../../redux/actions';
import Loading from '@components/Loadding/Loading';

import {
  Block,
  Button,
  Text,
  TextInput,
  Thumbnail,
  PressText,
  Header,
} from '@components';
import { theme } from '@theme';
const mapStateToProps = state => {
  return {
    error: state.signupReducer.error,  
    data: state.signupReducer.data,
    loadding: state.signupReducer.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUpAction: user => {
      dispatch(signUpAction(user));
    },
  };
};
const SignUpScreens = ({signUpAction, data,loadding, error}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [textError, setTextError] = useState('');

  useEffect(() => {
    if (data !== null) {
      //alert(data);
    }
  }, [data]);

  useEffect(() => {
    if(error !== null){
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error])
  
    //Loadding trong screen
    useEffect(() => {
      setLoading(loadding)
    }, [loadding])

    const checkRegister = () => {

      var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
      if (email === '' && password === '' && username === '' && password2 === '') {
        setTextError('Vui lòng nhập đầy đủ thông tin!');
      } 
      else if(email === ''){
        setTextError('Email không được để trống!');
      }
      else if(password === ''){
        setTextError('Mật khẩu không được để trống!');
      }
      else if(username === ''){
        setTextError('Họ tên không được để trống!');
      }
      else if(password2 === ''){
        setTextError('Mật khẩu không được để trống!');
      }
      else if (!validRegex.test(email)){
        setTextError('Email không hợp lệ!');
      }
      else if (!validPassword.test(password)) {
        setTextError('Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số!');
      } 
      else if (password != password2) {
        setTextError('Mật khẩu phải trùng nhau!');
      } 
      else {
        let user = {
          email_user: email,
          pwd_user: password,
          name_user: username,
        };
        signUpAction(user);
       }
       setTextError('');
    };

    return (
      <>
      <Header
          title="Đăng ký"
          iconLeft={icons.back}
          leftPress={() =>
            navigation.goBack()
          }
        />
      <Block flex paddingHorizontal={16} style={styles.container}>
  
        <Thumbnail
          source={icons.logoo}
          style={styles.viewLogo}
          imageStyle={styles.viewInLogo} />
  
        <Block style={styles.viewFormLogin}>
  
          <Text style={styles.txtTitle}>Tạo tài khoản mới</Text>
  
          <TextInput
            iconleft={icons.userlg}
            placeholder="Nhập họ tên..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setUsername(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} />
  
          <TextInput
            iconleft={icons.email}
            placeholder="Nhập email..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setEmail(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} 
            keyboardType='email-address'/>
  
          <TextInput
            iconleft={icons.psdlg}
            issecure
            placeholder="Nhập password..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setPassword(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} />
  
          <TextInput
            iconleft={icons.psdlg}
            issecure
            placeholder="Nhập lại password..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setPassword2(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} />

          <Button
            shadow
            title="ĐĂNG KÝ"
            onPress={() => {
              checkRegister();
            }}
            style={styles.viewButtonRegister}
            titleStyle={styles.txtButtonRegister} />
  
          <Text style={styles.txtErorr}>{textError}</Text>

        </Block>
  
        <Block style={styles.viewSignIn}>
  
          <PressText
            title="ĐÃ CÓ TÀI KHOẢN? ĐĂNG NHẬP"
            onPress={() => navigation.navigate(routes.LOGINSCREENS)}
            titleStyle={styles.txtSignIn} />
  
        </Block>
        {/* Tao cai nay ms hien Loadding */}
            {loading && 
        (<Loading/>)}
      </Block>
      </>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreens);
