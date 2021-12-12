import React from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {GridProduct} from '@components';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const ProductGridList = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <GridProduct
          onPress={() => navigation.navigate(routes.DETAILSCREENS)}
          item={item}
        />
      )}
      style={{alignSelf: 'center'}}
    />
  );
};

export default ProductGridList;
