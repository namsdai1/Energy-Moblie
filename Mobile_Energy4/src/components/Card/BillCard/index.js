import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ToastAndroid,
  Image,
  Pressable,
  UIManager,
  Platform,
  LayoutAnimation,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Block, Thumbnail} from '@components';
import {theme} from '@theme';
import {icons} from '@assets';
import {formatCurrency} from '@utils/utils';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {connect} from 'react-redux';
import {TouchableRipple} from 'react-native-paper';
import {getBillAction, getBillDetailByIdAction} from '@redux/actions';

const mapStateToProps = state => {
  return {
    error: state.getBillReducers ? state.getBillReducers.error : null,
    data1: state.getBillReducers ? state.getBillReducers.data : null,

    loadding: state.getBillReducers ? state.getBillReducers.loadding : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBillAction: () => {
      dispatch(getBillAction());
    },
    getBillDetailByIdAction: id => {
      dispatch(getBillDetailByIdAction(id));
    },
  };
};

const BillCard = ({item, onPress, style, getBillAction,getBillDetailByIdAction, data1}) => {
  useEffect(() => {
    getBillAction();
  }, [getBillAction])
  useEffect(() => {
    if(data1 !== null){
      setData2(data1.data);
    }
  }, [data1])

  const {_id, products, total} = item;
  const [isShow, setShow] = useState(false);
  const [data, setData] = useState(products);
  const [data2, setData2] = useState([]);

  const [status, setStatus] = useState('Đã thanh toán');
  const navigation = useNavigation();

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  
  return (
    <>
      {isShow === false ? (
        //  Mặc định bill thu nhỏ
        <Block shadow row justifyCenter style={styles.cardContainer}>
          <Block width={'50%'}>
            <Text style={styles.idProduct}>Mã đơn hàng #{_id}</Text>
          </Block>
          <Block width={'50%'}>
            <Thumbnail
              onPress={() => {
                LayoutAnimation.easeInEaseOut();
                setShow(!isShow);
              }}
              source={icons.down}
              style={styles.btnshow}
              imageStyle={styles.iconShow}
            />
          </Block>
        </Block>
      ) : (
        //   Khi bấm icon down thì log ra chi tiết hóa đơn
        <TouchableRipple
              onPress={() => {
                getBillDetailByIdAction(item._id)
                navigation.navigate(routes.ORDERDETAIL);
              }}>
        <Block shadow justifyCenter style={styles.cardContainer}>
          {/* mã với nút up down */}
          <Block row paddingVertical={5}>
            <Block width={'50%'}>
              <Text style={styles.idProduct}>Mã đơn hàng #{_id}</Text>
            </Block>
            <Block width={'50%'}>
              <Thumbnail
                onPress={() => {
                  LayoutAnimation.easeInEaseOut();
                  setShow(!isShow);
                }}
                source={icons.up}
                style={styles.btnshow}
                imageStyle={styles.iconShow}
              />
            </Block>
          </Block>
          {data.map((item, index) => (
            <Block row paddingVertical={8}>
              <Block style={styles.viewImg} width={'50%'}>
                <Image
                  source={{uri: item.id_product.id_image.nameImage[0]}}
                  style={styles.imgProduct}
                />
              </Block>
              <Block style={styles.viewInfo} width={'50%'}>
                <Text numberOfLines={1} style={styles.nameProduct}>
                  {item.id_product.nameProduct}
                </Text>
                <Text style={styles.price}>
                  {formatCurrency(item.id_product.price_product)} VNĐ
                </Text>
                <Text style={styles.quantity}>x{item.amount}</Text>
              </Block>
            </Block>
          ))}

          <Block row alignCenter paddingVertical={5} paddingHorizontal={5}>
            {status === 'Đã thanh toán' ? (
              <Block row width={'50%'}>
                <Text style={styles.status1}>{status}</Text>
                <Thumbnail source={icons.done} imageStyle={styles.iconDone} />
              </Block>
            ) : (
              <Block row width={'50%'}>
                <Text style={styles.status2}>{status}</Text>
              </Block>
            )}
            
              <Block width={'50%'} style={{alignItems: 'flex-end'}}>
                <Text style={styles.txtTotal}>Tổng: {total} VNĐ</Text>
              </Block>
            
          </Block>
        </Block>
        </TouchableRipple>

      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BillCard);

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 5,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: theme.colors.grey,
    borderRadius: 8,
  },
  idProduct: {
    color: theme.colors.grayText,
  },
  btnshow: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    marginHorizontal: 8,
  },
  iconShow: {
    tintColor: theme.colors.grayText,
  },
  viewImg: {
    alignSelf: 'center',
    // width: 100,
    // height: 100,
    // alignItems: 'center',
    marginBottom: 3,
  },
  imgProduct: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 100,
    height: 100,
  },
  viewInfo: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  nameProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  price: {
    fontSize: 16,
    color: theme.colors.grayText,
    marginVertical: 2,
  },
  quantity: {
    fontSize: 16,
    color: theme.colors.grayText,
    marginVertical: 2,
  },
  status1: {
    color: theme.colors.gray,
  },
  status2: {
    color: theme.colors.grayText,
  },
  iconDone: {
    width: 14,
    height: 14,
    marginHorizontal: 3,
    marginVertical: 1,
    tintColor: theme.colors.green,
  },
  txtTotal: {
    fontSize: 17,
    fontWeight: 'bold',
    color: theme.colors.red,
  },
});
