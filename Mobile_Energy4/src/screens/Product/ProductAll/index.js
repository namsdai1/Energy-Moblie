import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Block, Text, Thumbnail, Button, Header, TextInput} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getSize} from '@utils/responsive';
import {routes} from '@navigation/routes';
import {formatCurrency} from '@utils/utils';
import Product_Card from '@components/Card/ProductCard2';
import {
  getFavoriteAction,
  getProduct,
  getProductByCategoriesChild,
} from '@redux/actions';
import {connect} from 'react-redux';
import {
  GET_PRODUCT,
  GET_PRODUCT_BY_CATEGORYS_CHILD,
} from '@redux/actions/ProductAction';
import {GET_FAVORITE} from '@redux/actions/FavoriteAction';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const categori = [
  {id: 1, name: 'Liên quan'},
  {id: 2, name: 'Bán chạy'},
  {id: 3, name: 'Giá'},
];
const mapStateToProps = state => {
  return {
    loadingCategories: state.getProductByCategoriesChildReducer
      ? state.getProductByCategoriesChildReducer.loading
      : null,
    dataCategories: state.getProductByCategoriesChildReducer
      ? state.getProductByCategoriesChildReducer.data
      : null,
    errorCategories: state.getProductByCategoriesChildReducer
      ? state.getProductByCategoriesChildReducer.error
      : null,

    errorPrdt: state.getProductReducer ? state.getProductReducer.error : null,
    dataPrdt: state.getProductReducer ? state.getProductReducer.data : null,
    loaddingPrdt: state.getProductReducer
      ? state.getProductReducer.loadding
      : null,
    errorFavorite: state.getFavoriteReducer
      ? state.getFavoriteReducer.error
      : null,
    data1Favorite: state.getFavoriteReducer
      ? state.getFavoriteReducer.data
      : null,
    loaddingFavorite: state.getFavoriteReducer
      ? state.getFavoriteReducer.loadding
      : null,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProductByCategoriesChild: id => {
      dispatch(getProductByCategoriesChild(id));
    },
    getProduct: input => {
      dispatch(getProduct(input));
    },
    getFavoriteAction: () => {
      dispatch(getFavoriteAction());
    },
  };
};

const Product = ({
  getProductByCategoriesChild,
  getProduct,
  dataCategories,
  dataPrdt,
  errorCategories,
  getFavoriteAction,
  data1Favorite,
}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id, type} = route.params;
  const [status, setStatus] = useState(1);
  const [data, setData] = useState([]);
  const [checkPrice, setCheckPrice] = useState(false);
  const [title, setTitle] = useState('');
  const setStatusFilter = id => {
    setStatus(id);
  };
  useEffect(() => {
    if (type === GET_PRODUCT_BY_CATEGORYS_CHILD) {
      getProductByCategoriesChild({name: id, price: null, sell: null});
    }
    if (type === GET_PRODUCT) {
      getProduct({
        price: null,
        sell: 1,
      });
      setStatus(2);
    }
    if (type === GET_FAVORITE) {
      getFavoriteAction();
    }
  }, []);
  useEffect(() => {
    if (type === GET_PRODUCT_BY_CATEGORYS_CHILD) {
      if (dataCategories !== null) {
        setData(dataCategories.data);
        setTitle(dataCategories?.data[0]?.id_category?.name_category);
      }
    } else {
      if (dataCategories !== null) {
        setData(dataCategories.data);
        setTitle(dataCategories?.data[0]?.id_category?.name_category);
      }
    }

    if (type === GET_FAVORITE) {
      if (data1Favorite !== null) {
        setData(data1Favorite.data);
        setTitle('Sản Phẩm Yêu Thích');
      }
    }

    if (type === GET_PRODUCT) {
      if (dataPrdt !== null) {
        setData(dataPrdt.data);
        setTitle('Sản Phẩm');
      }
    }
  }, [dataCategories, dataPrdt, data1Favorite]);

  useEffect(() => {
    if (errorCategories !== null) {
      console.log(errorCategories);
      ToastAndroid.show('Lỗi: ' + errorCategories, ToastAndroid.SHORT);
    }
  }, [errorCategories]);

  const jewelStyle = id => {
    if (id === status) {
      return {
        justifyContent: 'center',
        color: theme.colors.primary,
        borderBottomWidth: 1,
        borderColor: theme.colors.primary,
        paddingVertical: getSize.s(10),
      };
    } else {
      return {
        justifyContent: 'center',
        color: theme.colors.black,
        paddingVertical: getSize.s(10),
        borderBottomWidth: 1,
        borderColor: '#808080',
      };
    }
  };
  const jewelStyle2 = id => {
    if (id === status) {
      return {
        color: theme.colors.primary,
      };
    } else {
      return {
        color: '#808080',
      };
    }
  };
  const _setDateType = (text, textid) => {
    //  const dataAo1 = dataMaster;
    if (text === 'Bán chạy') {
      if (type === GET_PRODUCT_BY_CATEGORYS_CHILD) {
        getProductByCategoriesChild({name: id, price: null, sell: -1});
      }
      if (type === GET_PRODUCT) {
        getProduct({
          price: null,
          sell: 1,
        });
      }
    }
    if (text === 'Giá') {
      if (textid === status) {
        setCheckPrice(!checkPrice);
        if (checkPrice) {
          if (type === GET_PRODUCT_BY_CATEGORYS_CHILD) {
            getProductByCategoriesChild({name: id, price: -1, sell: null});
          }
          if (type === GET_PRODUCT) {
            getProduct({
              price: -1,
              sell: null,
            });
          }
        } else {
          if (type === GET_PRODUCT_BY_CATEGORYS_CHILD) {
            getProductByCategoriesChild({name: id, price: 1, sell: null});
          }
          if (type === GET_PRODUCT) {
            getProduct({
              price: 1,
              sell: null,
            });
          }
        }
      } else {
        if (type === GET_PRODUCT_BY_CATEGORYS_CHILD) {
          getProductByCategoriesChild({name: id, price: -1, sell: null});
        }
        if (type === GET_PRODUCT) {
          getProduct({
            price: -1,
            sell: null,
          });
        }
      }
    }

    if (text === 'Liên quan') {
      if (type === GET_PRODUCT_BY_CATEGORYS_CHILD) {
        getProductByCategoriesChild({name: id, price: null, sell: null});
      }
      if (type === GET_PRODUCT) {
        getProduct({
          price: null,
          sell: 1,
        });
      }
    }
  };
  return (
    <Block flex>
      {/* header */}
      <Block
        height={getSize.s(90)}
        backgroundColor={theme.colors.primary}
        paddingHorizontal={getSize.m(10)}>
        <Block
          row
          height={'60%'}
          justifyCenter
          alignCenter
          style={styles.header}>
          <Block justifyCenter alignStart style={{flex: 2}}>
            <Thumbnail
              source={icons.back}
              style={{width: getSize.s(20), height: getSize.s(20)}}
              resizeMode="contain"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Block>
          {/* <TextInput
            placeholder="Tìm kiếm"
            underlineColorAndroid="transparent"
            onChangeText={text => seachFilter(text)}
            alignCenter
            placeholderTextColor={'white'}
            paddingVertical={getSize.m(2)}
            style={{flex: 18, backgroundColor: '#77C8EB'}}
            inputstyle={{color: 'white', fontSize: getSize.m(18)}}
            width={'100%'}
            height={getSize.s(35)}
            iconleft={icons.search}></TextInput> */}
          <TouchableOpacity
            style={{width: '100%', flex: 18, height: getSize.s(35)}}
            onPress={() => {
              navigation.navigate(routes.SEARCHSCREEN);
            }}>
            <Block
              alignCenter
              row
              paddingVertical={getSize.m(2)}
              style={{backgroundColor: '#77C8EB'}}
              width={'100%'}
              height={'100%'}
              paddingHorizontal={getSize.m(8)}>
              <Thumbnail
                source={icons.search}
                style={{width: 20, height: 20, marginRight: getSize.m(5)}}
                resizeMode="contain"
              />
              <Text size={getSize.m(18)} color={'white'}>
                {title}
              </Text>
            </Block>
          </TouchableOpacity>
          <Block alignEnd justifyCenter style={{flex: 2}}>
            <Thumbnail
              source={icons.filter1}
              style={{
                marginHorizontal: 2,
                width: getSize.s(22),
                height: getSize.s(22),
              }}
            />
          </Block>
        </Block>
      </Block>
      {type !== GET_FAVORITE ? (
        <Block row justifyCenter alignCenter>
          {categori.map((item, index) => (
            <TouchableOpacity
              style={[
                jewelStyle(item.id),
                {
                  width: '32%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: theme.colors.white,
                },
              ]}
              onPress={() => {
                _setDateType(item.name, item.id);
                setStatusFilter(item.id);
              }}>
              <Text
                style={[
                  jewelStyle2(item.id),
                  {width: '100%', textAlign: 'center', borderColor: '#808080'},
                  index === categori.length - 1
                    ? {borderLeftWidth: 0.7}
                    : {borderRightWidth: 0.7},
                ]}
                size={getSize.m(18)}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </Block>
      ) : null}

      {/* content */}
      <Block flex alignCenter justifyCenter>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item, index}) => <Product_Card item={item} />}
        />
      </Block>
    </Block>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
