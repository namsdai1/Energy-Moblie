import React, {useState, useEffect, useRef} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Pressable,
  Picker,
  DatePicker,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  View,
} from 'react-native';
import {icons} from '@assets';
import {
  Block,
  Header,
  Thumbnail,
  Button,
  Text,
  ProductFlatList,
  ProductGridList,
} from '@components';
import styles from './style';
import {theme} from '@theme';
import {Image} from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment, {months} from 'moment';
import {getSize, height, width} from '@utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {useData} from 'config/config';
//import Loadding
import Loading from '@components/Loadding/Loading';

import {connect} from 'react-redux';
import {EditUserByID} from '@redux/actions';
const mapStateToProps = state => {
  return {
    error: state.updateUserReducer ? state.updateUserReducer.error : null,
    data: state.updateUserReducer ? state.updateUserReducer.data : null,
    loadding: state.updateUserReducer ? state.updateUserReducer.loadding : null,
    //loading
    loadding: state.updateUserReducer.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editUserByID: input => {
      dispatch(EditUserByID(input));
    },
  };
};
const EditProfile = ({editUserByID, data, loadding, error}) => {
  // tao useState Loadding
  const [loading, setLoading] = useState(false);
  //
  const navigation = useNavigation();

  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [address, setAddress] = useState();
  const [pickerValue, setPickerValue] = useState('Nam');
  const [date1, setDate1] = useState('');
  const [date, setDate] = useState();
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUri, setImageUri] = useState('');
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [textError, setTextError] = useState('');

  const bs = React.createRef();
  const fall = new Animated.Value(1);
  //Loadding trong screen
  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if(error !== null){
      console.log(error);
      console.log('++++++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>');
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error])

  useEffect(() => {
    convertdatetostring(null);
  }, []);
  useEffect(() => {
    if (data !== null) {
      console.log(data.data);
    }
  }, [data]);
  useEffect(() => {
    console.log('aa');
    setName(useData.name);
    setPickerValue(useData.gender);
    setAddress(useData.address);
    if(useData.birthday!==null){
      setDate(useData.birthday);
    }else{
      setDate(new Date());
    }
    setImageUri(useData.avatar);
    setPhoneNumber(useData.phone + '');
  }, []);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: width,
          height: 50,
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() => {
          openCamera();
        }}>
        <Block
          width={getSize.s(40)}
          height={getSize.s(40)}
          borderRadius={getSize.s(40) / 2}
          backgroundColor="red"
          justifyCenter
          marginRight={getSize.m(10)}>
          <Thumbnail
            imageStyle={{width: getSize.s(30), height: getSize.s(30)}}
            source={icons.name}
          />
        </Block>
        <Text style={{fontWeight: 'bold'}} size={20}>
          Chụp ảnh đại diện
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: width,
          height: 50,
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() => {
          openLibrary();
        }}>
        <Block
          width={getSize.s(40)}
          height={getSize.s(40)}
          borderRadius={getSize.s(40) / 2}
          backgroundColor="red"
          justifyCenter
          marginRight={getSize.m(10)}>
          <Thumbnail
            imageStyle={{width: getSize.s(30), height: getSize.s(30)}}
            source={icons.images}
          />
        </Block>
        <Text style={{fontWeight: 'bold'}} size={20}>
          Chọn ảnh đại diện
        </Text>
      </TouchableOpacity>
    </View>
  );
  const hedarBottom = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  };
  //camera && libary
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openCamera = () => {
    const options = {
      path: 'images',
      mediaType: 'photo',
    };
    launchCamera(options, response => {
      requestCameraPermission();
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.errorCode) {
        console.log('errorCode: ', response.errorCode);
      } else {
        setImage(response.assets[0].uri);
        uploadImageFirebase(response.assets[0].uri);
      }
    });
    bs.current.snapTo(1);
  };
  const openLibrary = () => {
    const options = {
      path: 'images',
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.errorCode) {
        console.log('User errorCode: ', response.errorCode);
      } else {
        // You can also display the image using data:
        setImage(response.assets[0].uri);
        uploadImageFirebase(response.assets[0].uri);
      }
    });
    bs.current.snapTo(1);
  };
  const convertdatetostring = currentDate => {
    console.log(currentDate);
    if (currentDate === null) {
      const f1 = new Date(Date.now());
      const day = f1.getDate();
      const month = f1.getMonth();
      const Year = f1.getFullYear();
      setDate1(day + '-' + (month + 1) + '-' + Year);
    } else {
      const f1 = new Date(currentDate);
      const day = f1.getDate();
      const month = f1.getMonth();
      const Year = f1.getFullYear();
      setDate1(day + '-' + (month + 1) + '-' + Year);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');

    setDate(currentDate);
    convertdatetostring(currentDate);
  };
  const uploadImageFirebase = async images => {
    const uploadUri = images;
    let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    //add firename

    const extension = fileName.split('.').pop();
    const name = fileName.split('.').slice(0, -1).join('.');
    fileName = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);
    const task = storage().ref(fileName).putFile(uploadUri);

    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });
    try {
      await task;
      const url = await storage().ref(fileName).getDownloadURL();

      setImageUri(url);
      setUploading(false);
    } catch (error) {
      console.log(error);
    }

    //  setImage(null);
  };

  const checkEditProfile = () => {

    var validNumberPhone = /((09|03|07|08|05)+([0-9]{8})\b)/;

    if (name === '' && phoneNumber === '' && address === '') {
      setTextError('Vui lòng nhập đầy đủ thông tin!');
    } 
    else if(name === ''){
      setTextError('Họ tên không được để trống!');
    }
    else if(phoneNumber === ''){
      setTextError('Số điện thoại không được để trống!');
    }
    else if(address === ''){
      setTextError('Địa chỉ không được để trống!');
    }
    else if (!validNumberPhone.test(phoneNumber)){
      setTextError('Số điện thoại không đúng định dạng!');
    }
    else {
      let input = {
        name_user: name,
        phone_user: phoneNumber,
        address_user: address,
        avt_user: imageUri,
        gender_user: pickerValue,
        born_day: date,
      };
      editUserByID(input);
      navigation.navigate(routes.PROFILESCREENS)
      //alert(imageUri);
    }
  };

  return (
    <Block style={[styles.container]}>
      <Animated.View
        style={{opacity: Animated.add(0.3, Animated.multiply(fall, 1.0))}}>
        {/* <ScrollView> */}
          <Header
            iconLeft={icons.back}
            leftPress={() =>
              navigation.navigate(routes.BOTTOMTABBAR, {
                screen: routes.PROFILESCREENS,
              })
            }
          />
          <TouchableOpacity>
            <Block
              justifyCenter
              alignCenter
              paddingHorizontal={16}
              style={styles.viewAvatar}>
              <Thumbnail
                onPress={() => {
                  bs.current.snapTo(0);
                }}
                style={styles.inViewAvatar}
                source={{
                  uri: imageUri,
                }}
                imageStyle={styles.inAvatar}></Thumbnail>

              <Thumbnail
                style={styles.inEditViewAvatar}
                source={icons.edit}></Thumbnail>
            </Block>
          </TouchableOpacity>
          <Block style={styles.viewEdit} padding={16}>
            <Block style={styles.viewText}>
              <Text style={styles.txtTitle}>Họ tên</Text>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={text => setName(text)}
                placeholder="Nhập họ tên"
              />
            </Block>

            <Block style={styles.viewText}>
              <Text style={styles.txtTitle}>Giới tính</Text>

              <Block style={styles.textInput}>
                <Picker
                  selectedValue={pickerValue}
                  onValueChange={itemValue => setPickerValue(itemValue)}>
                  <Picker.Item label="Nam" value="Nam" />
                  <Picker.Item label="Nữ" value="Nữ" />
                  <Picker.Item label="Khác" value="Khác" />
                </Picker>
              </Block>
            </Block>

            <Block style={styles.viewText}>
              <Text style={styles.txtTitle}>Ngày sinh</Text>
              <TouchableOpacity
                style={styles.textInput}
                onPress={() => {
                  setShow(true);
                }}>
                <Text style={styles.textInput}>{date1}</Text>
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </Block>

            <Block style={styles.viewText}>
              <Text style={styles.txtTitle}>Số điện thoại</Text>
              <TextInput
                keyboardType="numeric"
                fontSize={18}
                value={phoneNumber}
                style={styles.textInput}
                onChangeText={text => setPhoneNumber(text)}
                placeholder="Nhập số điện thoại"
              />
            </Block>
            <Block style={[styles.viewText]}>
              <Text size={15} style={styles.txtTitle}>
                Địa chỉ
              </Text>
              <TextInput
                value={address}
                style={styles.textInput}
                onChangeText={text => {
                  setAddress(text);
                }}
                placeholder="Nhập Địa Chỉ"
              />
            </Block>
            <Text style={[styles.txtErorr, {marginBottom: getSize.m(60)}]}>{textError}</Text>

          </Block>
        {/* </ScrollView> */}
          <Block style={styles.btnSave}>
            <TouchableOpacity        
              onPress={() => {
                checkEditProfile();
              }}>
              <Text fontSize={18} style={styles.txtSave}>
                Lưu thay đổi
              </Text>
            </TouchableOpacity>
          </Block>
        {uploading ? <Loading /> : null}
      </Animated.View>
      <BottomSheet
        ref={bs}
        snapPoints={[150, 0, 0]}
        borderRadius={10}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        renderContent={renderContent}
        renderHeader={hedarBottom}
      />
      {/* Tao cai nay ms hien Loadding */}
      {loading && <Loading />}
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
