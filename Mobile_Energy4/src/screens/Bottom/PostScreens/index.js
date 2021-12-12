import React, {useState} from 'react';
import {
  ToastAndroid,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  Platform,
  UIManager,
  LayoutAnimation,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Block, Text, Thumbnail, Button, Header} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import Product_Card from './data_card';
import { routes } from '@navigation/routes';
const {height} = Dimensions.get('screen');
const categori = [
  {id: 1, name: 'Bài đã duyệt'},
  {id: 2, name: 'Bài chưa duyệt'},
  {id: 3, name: 'Bài từ chối'},
  {id: 4, name: 'Cần thanh toán'},
];
const data = [
  {
    id: 1,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://vnn-imgs-f.vgcloud.vn/2019/10/08/17/samsung-se-bo-galaxy-fold-va-galaxy-note-de-ra-dong-flagship-moi-3.jpg',
    quantity: 1,
    currentime: 20,
    show: false,
  },
  {
    id: 2,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 2,
    status: 'Chưa thanh toán',
    currentime: 20,
    show: false,
  },
  {
    id: 3,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Đã thanh toán',
    currentime: 20,
    show: false,
  },
  {
    id: 4,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Chưa thanh toán',
    currentime: 20,
    show: false,
  },
  {
    id: 5,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Đã thanh toán',
    currentime: 20,
    show: false,
  },
  {
    id: 6,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Chưa thanh toán',
    currentime: 20,
    show: false,
  },
];
const PostScreens = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState();
  const setStatusFilter = id => {
    setStatus(id);
  };
  const jewelStyle = id => {
    if (id === status) {
      return {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: theme.colors.primary,
        justifyContent: 'center',
      };
    } else {
      return {
        padding: 5,
        justifyContent: 'center',
      };
    }
  };
  return (
    <Block flex>
      {/* header */}
      <Block
        row
        backgroundColor={theme.colors.primary}
        paddingHorizontal={8}
        justifyCenter
        alignCenter
        style={styles.header}>
        <Block style={{flex: 2}}>
          <Text
            style={{fontWeight: 'bold'}}
            size={20}
            color={theme.colors.white}>
            Quản lí bài đăng
          </Text>
        </Block>
        <Block flex row justifyEnd>
          {/* search */}
          <Pressable onPress={() =>{navigation.navigate(routes.SEARCHSCREEN)}}>
            <Thumbnail
              source={icons.search}
              style={{
                marginHorizontal: 2,
                width: 27,
                height: 27,
                marginRight: 15,
              }}
              resizeMode="contain"
            />
          </Pressable>
          {/* chat */}
          <Pressable>
            <Thumbnail
              source={icons.wchat}
              style={{marginHorizontal: 2, width: 27, height: 27}}
              resizeMode="contain"
            />
            <Block alignCenter justifyCenter style={styles.badge}>
              <Text size={11} color={theme.colors.white}>
                1
              </Text>
            </Block>
          </Pressable>
        </Block>
      </Block>
      {/* content */}
      <Block style={{height: height / 20, backgroundColor: theme.colors.white}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {categori.map((item, index) => (
            <TouchableOpacity
              style={[jewelStyle(item.id)]}
              onPress={() => {
                setStatusFilter(item.id);
              }}>
              <Text style={{fontWeight: 'bold'}} size={16}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Block>
      <Block flex alignCenter justifyCenter marginTop={10}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item, index}) => <Product_Card item={item} />}
        />
      </Block>
    </Block>
  );
};

export default PostScreens;
