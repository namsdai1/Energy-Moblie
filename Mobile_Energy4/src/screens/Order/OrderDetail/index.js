import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons} from '@assets';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import styles from './styles';
import {connect} from 'react-redux';
import {getBillAction, getBillDetailByIdAction} from '@redux/actions';
import {formatCurrency} from '@utils/utils';
import {Header, Block} from '@components';
import style from '@components/Card/FlatCard/style';
import Loading from '@components/Loadding/Loading';

const mapStateToProps = state => {
  return {
    error: state.getBillDetailByIdReducer
      ? state.getBillDetailByIdReducer.error
      : null,
    data2: state.getBillDetailByIdReducer
      ? state.getBillDetailByIdReducer.data
      : null,

    loadding: state.getBillDetailByIdReducer
      ? state.getBillDetailByIdReducer.loadding
      : null,
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

const OrderDetail = ({data2, getBillDetailById, loadding, error}) => {
  const navigation = useNavigation();
  const [data1, setData1] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState();
  const [phone, setPhone] = useState();
  const [address_store, setAddress_store] = useState('');
  const [status, setStatus] = useState('');
  const [idBill, setIdBill] = useState();
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data2 !== null) {
      const {data} = data2;
      const item = data2.data;
      setStatus(item.status);
      setData1(item.products);
      setTotal(item.total);
      setAddress_store(item.id_store.address_store);
      setName(item.id_bill.note_bill.name);
      setPhone(item.id_bill.note_bill.phone);
      setIdBill(item.id_bill._id);
      console.log(item.id_bill._id);
      console.log(
        '=========================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<xxxxx',
      );
    }
  }, [data2]);

  useEffect(() => {
    setLoading(loadding)
  }, [loadding])

  useEffect(() => {
    if(error !== null){
      console.log(error);
      ToastAndroid.show('L???i: ' + error, ToastAndroid.SHORT);
    }
  }, [error])

  return (
    <Block style={styles.container}>
      <Header
        iconLeft={icons.back}
        title="Chi ti???t ????n h??ng"
        leftPress={() => {
          navigation.goBack();
        }}
      />
      <Block paddingHorizontal={16} style={styles.viewHeader}>
        <Block style={styles.viewOrderId}>
          <Text style={styles.text}>M?? ????n h??ng: #{idBill}</Text>
        </Block>
        <Block row style={styles.viewStatus}>
          <Image
            source={icons.orderbill}
            style={styles.imageOrderBill}
            resizeMode="contain"
          />
          <Block column paddingHorizontal={12}>
            <Text style={styles.txtStatus}>{status}</Text>
            <Text style={styles.txtOrderDate}>Ng??y ?????t h??ng: {date}</Text>
          </Block>
        </Block>
      </Block>

      <Block paddingHorizontal={16} column style={styles.viewOderInfo}>
        <Block style={styles.viewInOderInfo}>
          <Text style={styles.text}>Th??ng tin s???n ph???m</Text>
        </Block>
        {data1.map(item => (
          <Block
            row
            paddingVertical={16}
            paddingHorizontal={8}
            style={styles.viewProduct}>
            <Image
              source={{uri: item.id_product.id_image.nameImage[0]}}
              style={styles.imageProduct}
              resizeMode="contain"
            />

            <Block column justifyCenter paddingHorizontal={8}>
              <Block row>
                <Text style={styles.txtNameProduct}>
                  {item.id_product.nameProduct}
                </Text>
              </Block>
              <Text style={styles.txtInfoProduct}>
                H??ng: - M??u: - Dung l?????ng:
              </Text>
              <Text style={styles.txtPrice}>
                {formatCurrency(item.id_product.price_product)} - x
                {item.amount}
              </Text>
            </Block>
          </Block>
        ))}
      </Block>

      <Block
        paddingHorizontal={16}
        paddingVertical={16}
        row
        style={styles.viewTotal}>
        <Text style={styles.txtTotal}>Gia?? ta??m ti??nh:</Text>
        <Text style={styles.txtTotall}>{formatCurrency(total)}</Text>
      </Block>

      <Block
        paddingHorizontal={16}
        paddingVertical={16}
        style={styles.viewInfo}>
        <Text style={styles.txtAddress}>
          ??i??a chi?? va?? th??ng tin n??i nh????n ha??ng:
        </Text>
        <Text style={{fontSize: 18, paddingTop: 8}}>
          {name} - {phone}
        </Text>
        <Text style={{fontSize: 18, paddingTop: 8}}>{address_store}</Text>
      </Block>

      <View style={styles.v5}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.button}>
          <Text style={{color: theme.colors.white, fontSize: 18}}>
            Quay la??i danh sa??ch ????n ha??ng
          </Text>
        </TouchableOpacity>
      </View>
      {/*C?? c??i n??y m???i hi???n loading!!!*/}
      {loading && (<Loading/>)}
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
