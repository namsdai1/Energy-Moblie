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
import {useNavigation,CommonActions} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {icons} from '@assets';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import styles from './style';
import {Header, Thumbnail} from '@components';
import {connect} from 'react-redux';
import {getSize} from '@utils/responsive';
import {useData} from 'config/config';
import Loading from '@components/Loadding/Loading';
import storage from '@react-native-firebase/storage';
import {addComment, getProductbyIdAction} from '@redux/actions';
const mapStateToProps = state => {
  console.log(state.getCommentsReducer);
  return {
    error: state.getProductByIDReducer
      ? state.getProductByIDReducer.error
      : null,
    data: state.getProductByIDReducer ? state.getProductByIDReducer.data : null,
    loadding: state.getProductByIDReducer
      ? state.getProductByIDReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductbyIdAction: id => {
      dispatch(getProductbyIdAction(id));
    },
    addComment: input => {
      dispatch(addComment(input));
    },
  };
};
const VoteScreen = ({data, addComment}) => {
  const navigation = useNavigation();
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [defaultRating, setDefaultRating] = useState(0);
  const [nameProduct, setNameProduct] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [id_product, setId_product] = useState(null);
  //comment
  const [imageComment, setImageComment] = useState('');
  const [textCm, setTextCm] = useState('');
  const [loading, setLoading] = useState(false);
  const [transferred, setTransferred] = useState(0);
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
        // setImageComment(response.assets[0].uri)
        uploadImageFirebase(response.assets[0].uri);
      }
    });
  };
  useEffect(() => {
    if (data !== null) {
      const item = data.data;
      setImage(item.id_image.nameImage[0]);
      setNameProduct(item.nameProduct);
      setCategory(item.id_category.name_category);
      setId_product(item._id);
    }
  }, [data]);
  const uploadImageFirebase = async images => {
    const uploadUri = images;
    let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    //add firename

    const extension = fileName.split('.').pop();
    const name = fileName.split('.').slice(0, -1).join('.');
    fileName = name + Date.now() + '.' + extension;

    setLoading(true);
    setTransferred(0);
    const task = storage().ref(fileName, 'comment/').putFile(uploadUri);

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
      setImageComment(url);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    //  setImage(null);
  };
  return (
    <>
      <View style={styles.container}>
        <Header
          iconLeft={icons.back}
          leftPress={() => {
            navigation.goBack();
          }}
          title={'Đánh giá sản phẩm'}
        />
        <View style={styles.products}>
          <View style={{flex: 1}}>
            <Thumbnail
              source={{uri: image}}
              imageStyle={{width: getSize.s(50), height: getSize.s(50)}}
            />
          </View>
          <View
            style={{
              flex: 9,
              paddingHorizontal: getSize.m(4),
              justifyContent: 'center',
            }}>
            <Text>{nameProduct}</Text>
            <Text style={{color: theme.colors.greyText}}>Loại:{category}</Text>
          </View>
        </View>
        <View style={styles.icon}>
          {maxRating.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                source={
                  item <= defaultRating ? icons.star_filled : icons.star_corner
                }
                style={styles.check}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.camera}
          onPress={() => {
            openCamera();
          }}>
          {imageComment !== '' ? (
            <View>
              <Thumbnail
                onPress={() => {
                  openCamera();
                }}
                source={{uri: imageComment}}
                imageStyle={{width: getSize.s(120), height: getSize.s(80)}}
              />
            </View>
          ) : (
            <View style={{paddingVertical: 14, paddingHorizontal: 20}}>
              <Thumbnail
                source={icons.camera}
                imageStyle={{
                  width: getSize.s(50),
                  height: getSize.s(30),
                }}></Thumbnail>
              <Text
                style={{
                  color: theme.colors.primary,
                  fontSize: 16,
                  marginTop: getSize.m(10),
                }}>
                Thêm Hình Ảnh
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={{width: '100%', paddingHorizontal: 10}}>
          <TextInput
            placeholder={'Hãy chia sẽ cảm nhận của bạn'}
            multiline={true}
            numberOfLines={4}
            style={[
              styles.textArea,
              styles.fontSize,
              {borderColor: theme.colors.primary},
            ]}
            onChangeText={value => setTextCm(value)}></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => {
            addComment({
              content: textCm,
              image: imageComment,
              id_product: id_product,
              id_user: useData.id,
              rate: defaultRating,
            }),
              getProductbyIdAction(id_product),
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    {
                      name: routes.DETAILSCREENS,
                      params:{id:id_product}
                    },
                  ],
                  
                } ),
              );
          }}
          style={styles.button}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>ĐÁNH GIÁ</Text>
        </TouchableOpacity>
      </View>
      {/* Tao cai nay ms hien Loadding */}
      {loading && <Loading />}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteScreen);
