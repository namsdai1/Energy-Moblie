import React, {useState} from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {BillCard} from '@components';
import {useNavigation} from '@react-navigation/native';

const BillList = ({data, style}) => {
  const navigation = useNavigation();
  //   const [isShow, setShow] = useState(item.show);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) =>
        item.id_bill !== null ? (
          <BillCard
            onPress={() =>
              ToastAndroid.show('item: ' + ' ' + item.id, ToastAndroid.SHORT)
            }
            item={item}
          />
        ) : null
      }
      style={style}
    />
  );
};

export default BillList;
