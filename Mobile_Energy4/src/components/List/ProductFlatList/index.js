import React from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {FlatProduct} from '@components';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const ProductFlatList = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <FlatProduct
          onPress={
            () => navigation.navigate(routes.DETAILSCREENS)
            // ToastAndroid.show(
            //   'item: ' + ' ' + item.nameProduct,
            //   ToastAndroid.SHORT,
            // )
          }
          item={item}
        />
      )}
    />
  );
};

export default ProductFlatList;
