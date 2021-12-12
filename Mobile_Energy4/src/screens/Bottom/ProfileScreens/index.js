import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {routes} from '@navigation/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, Thumbnail} from '@components';
import {theme} from '@theme';
import EditProfile from './EditProfile';
import {useNavigation} from '@react-navigation/native';
import {getSize, height, width} from '@utils/responsive';
import {useData, token} from 'config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {getUserByID, logoutAction} from '@redux/actions';
import {connect} from 'react-redux';
import Loading from '@components/Loadding/Loading';
import {icons} from '@assets';
import { getFavoriteApi } from '@redux/api/favorite';
import { getFavoriteAction} from '@redux/actions/FavoriteAction';
const mapStateToProps = state => {
  return {
    error: state.getOneUserReducer ? state.getOneUserReducer.error : null,
    data: state.getOneUserReducer ? state.getOneUserReducer.data : null,
    loadding: state.getOneUserReducer ? state.getOneUserReducer.loadding : null,
    //loading
    loadding: state.getOneUserReducer.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => {
      dispatch(logoutAction());
    },
    getUserByID: id => {
      dispatch(getUserByID(id));
    },
  };
};
const ProfileScreens = ({logoutAction, data, error, getUserByID, loadding}) => {
    // tao useState Loadding
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const [checktoken, setChecktoken] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  const [url,setUrl]= useState('');
    //Loadding trong screen
    useEffect(() => {
      setLoading(loadding)
    }, [loadding])

  useEffect(() => {
    if (data !== null) {
      setName(data.data.name_user);
      setEmail(data.data.email_user);
      setPhone(data.data.phone_user);
      setAddress(data.data.address_user);
      setUrl(data.data.avt_user)
      useData['address']=data.data.address_user;
      useData['name']=data.data.name_user;
      useData['birthday']=data.data.born_day;
      useData['gender']=data.data.gender_user;
      useData['avatar']=data.data.avt_user;
      useData['phone']=data.data.phone_user;
    }
  }, [data]);
  useEffect(() => {
    if (useData.token !== null) {
      getUserByID(useData.id);
    }
  }, [getUserByID]);
  useEffect(() => {
    if (useData.token !== null) {
      console.log('token' + useData.token);
      setChecktoken(useData.token);
    }
  }, [useData.token]);

  useEffect(() => {
    if(error !== null){
      console.log(error);
      console.log('333333333333333333>>>>>>>>>>>>>>>>>>>>>')
      ToastAndroid.show('Lỗis: ' + error, ToastAndroid.SHORT);
    }
  }, [error])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {checktoken === null ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingVertical: getSize.m(20),
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.LOGINSCREENS);
              }}
              style={[
                styles.button,
                {width: width / 3, alignItems: 'flex-end'},
              ]}>
              <Text style={[styles.textbtn]}>Đăng nhập</Text>
            </TouchableOpacity>
            <View
              style={{
                paddingVertical: getSize.m(10),
                backgroundColor: theme.colors.white,
              }}>
              <Text style={styles.textbtn}>/</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.SIGNUPSCREENS);
              }}
              style={[
                styles.button,
                {width: width / 3, alignItems: 'flex-start'},
              ]}>
              <Text style={styles.textbtn}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        ) : (
  
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 9}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 9}}>
                  <View style={styles.userInfoSection}>
                    <View
                      style={{flexDirection: 'row', marginTop: getSize.m(15)}}>
                      <Avatar.Image
                        source={{
                          uri: url,
                        }}
                        size={getSize.s(80)}
                      />
                      <View
                        style={{
                          marginLeft: getSize.m(15),
                          justifyContent: 'center',
                        }}>
                        <Title style={[styles.title]}>{name}</Title>
                      </View>
                    </View>
                  </View>

                  <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                      <Icon name="email" color="white" size={getSize.m(24)} />
                      <Text
                        style={{
                          color: 'white',
                          marginLeft: 20,
                          fontSize: getSize.m(18),
                        }}>
                        {email}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Icon
                        name="map-marker-radius"
                        color="white"
                        size={getSize.m(24)}
                      />
                      <Text
                        style={[
                          {
                            color: 'white',
                            marginLeft: 20,
                            fontSize: getSize.m(18),
                          },
                          address !== '' ? null : {opacity: 0.5},
                        ]}>
                        {address !== '' ? address : 'Địa chỉ'}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Icon name="phone" color="white" size={getSize.m(24)} />
                      <Text
                        style={[
                          {
                            color: 'white',
                            marginLeft: 20,
                            fontSize: getSize.m(18),
                          },
                          phone !== null ? null : {opacity: 0.5},
                        ]}>0{phone !== null ? phone : 'Số điện thoại'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={styles.iconedit}>
                   <TouchableOpacity onPress={() =>{ navigation.navigate(routes.EDITPROFILE);}}>
              <MaterialIcons color={'white'} name={'navigate-next'} size={getSize.m(50)}/>
            </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* <TouchableOpacity onPress={() =>{ navigation.navigate(routes.EDITPROFILE);}}>
              <MaterialIcons color={'white'} icon={} size={getSize.m(24)}/>
            </TouchableOpacity> */}
          </View>
        )}
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>140.000.000 VND</Title>
          <Caption>Ví Tiền</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Đơn Hàng</Caption>
        </View>
      </View>

      <ScrollView style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            console.log(useData.token, useData.id);
            navigation.navigate(routes.LIKELISTSCREEN);
          }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Yêu Thích</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            getUserByID(useData.id);
          }}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Thanh Toán</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {navigation.navigate(routes.MYBILLSCREENS)}}>
          <View style={styles.menuItem}>
            <Icon name="history" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Đơn Hàng Của Tôi</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {
              ToastAndroid.show('Chưa có hỗ trợ!', ToastAndroid.SHORT);
        }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Hỗ Trợ</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            console.log(checktoken);
          }}>
          <View style={styles.menuItem}>
            <Icon name="cog-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Cài Đặt</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
           navigation.navigate(routes.CHANGEPASSSCREEN)
          }}>
          <View style={styles.menuItem}>
            <Icon name="key-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Đổi Mật Khẩu</Text>
          </View>
        </TouchableRipple>
        <TouchableOpacity
          onPress={async () => {
            
            await AsyncStorage.removeItem('token');
            useData['token'] = null;
            useData['id']=null;
            logoutAction();
            setChecktoken(null);
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

          }}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Đăng Xuất</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

            {/* Tao cai nay ms hien Loadding */}
            {loading && 
            (<Loading/>)
            }

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconedit:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:getSize.m(10)
  },
  userInfoSection: {
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
  },
  header: {
    width: width,
    height: getSize.v(240),
    backgroundColor: theme.colors.primary,
  },
  button: {
    paddingVertical: getSize.m(10),
    backgroundColor: theme.colors.white,
    paddingHorizontal: getSize.m(10),
  },
  textbtn: {
    fontWeight: 'bold',
    fontSize: getSize.m(18),
    color: theme.colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFAFA',
    paddingVertical: 8,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFFAFA',
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreens);
