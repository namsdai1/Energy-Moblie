import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Block, Text, Header, BillList, Thumbnail} from '@components';
import {icons} from '@assets';
import styles from './styles';
import {getBillAction} from '@redux/actions';
import {connect} from 'react-redux';
import {useData} from 'config/config';
import Loading from '@components/Loadding/Loading';
import {useNavigation} from '@react-navigation/native';

const mapStateToProps = state => {
  return {
    error: state.getBillReducers ? state.getBillReducers.error : null,
    data1: state.getBillReducers ? state.getBillReducers.data : null,
    loadding: state.getBillReducers ? state.getBillReducers.loadding : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBillAction: id => {
      dispatch(getBillAction(id));
    },
  };
};

const MyBillScreens = ({data1, getBillAction, loadding, error}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  console.log('Length >>>>>>' + data.length);
  useEffect(() => {
    if (data1 !== null) {
      setData(data1.data);
    }
  }, [data1]);

  useEffect(() => {
    getBillAction(useData.id);
  }, [getBillAction]);

  useEffect(() => {
    setLoading(loadding)
  }, [loadding])

  useEffect(() => {
    if(error !== null){
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error])

  return (
    <Block style={styles.container}>
      <Header
        iconLeft={icons.back}
        leftPress={() =>
          navigation.goBack()
        }
        title="Đơn hàng của bạn"
        iconRight={icons.more}
      />
      {data.length == 0 ? (
        <Block alignCenter justifyCenter flex>
          <Thumbnail
            source={icons.bill}
            style={styles.viewBill}
            imageStyle={styles.imgBill}
          />
        </Block>
      ) : (
        <BillList data={data} style={{marginVertical: 8}} />
      )}

      {/*Có cái này mới hiện loading!!!*/}
      {loading && (<Loading/>)}

    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBillScreens);
