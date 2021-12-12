import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {Thumbnail} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {routes} from '@navigation/routes';
import {useNavigation, useRoute} from '@react-navigation/native';

import {GET_PRODUCT_BY_CATEGORYS_CHILD} from '@redux/actions/ProductAction';

const CategoryItem = ({item}) => {
  const navigation = useNavigation();
  const onPress = () => {
    // getProductByCategoriesChild(item._id);
    navigation.navigate(routes.PRODUCTCUSTOM, {
      id: item._id,
      type: GET_PRODUCT_BY_CATEGORYS_CHILD,
    });
  };

  return (
    <Thumbnail
      source={{uri: item.img_categorys}}
      onPress={() => onPress()}
      style={styles.boxImg}
      imageStyle={styles.img_category}
      resizeMode="contain"
    />
  );
};
export default CategoryItem;

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  boxImg: {
    width: width / 6.1,
    height: width / 6.1,
    borderRadius: 8,
    backgroundColor: theme.colors.thirdy,
    padding: getSize.s(5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: getSize.s(5),
  },
  img_category: {
    width: '70%',
    height: '70%',
  },
});
