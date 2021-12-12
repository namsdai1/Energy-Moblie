import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Pressable, Image} from 'react-native';
import {theme} from '@theme';
import {Block, Text, Button} from '@components';
import {getSize} from '@utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {formatCurrency} from '@utils/utils';

const ProductCard = ({item, index, onPress, style, getProductbyIdAction}) => {
  const navigation = useNavigation();
  const {nameProduct, id_image, price_product} = item;

  return (
    <Pressable
      onPress={() => {
        getProductbyIdAction(item._id),
          navigation.navigate(routes.DETAILSCREENS, {id: item._id});
      }}>
      <Block column shadow flex style={[styles.cardContainer, style]}>
        <Block style={styles.viewImg}>
          <Image
            source={{uri: id_image.nameImage[0]}}
            style={styles.imgProduct}
            resizeMode="contain"
          />
        </Block>
        <Block justifyCenter style={styles.viewInfo}>
          <Text style={styles.name} numberOfLines={2}>
            {nameProduct}
          </Text>
          <Text style={styles.price}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: theme.colors.red,
                fontSize: 15,
              }}></Text>
            {formatCurrency(price_product)}
          </Text>
        </Block>
      </Block>
    </Pressable>
  );
};
export default ProductCard;

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  cardContainer: {
    width: width / 2.5 - 12,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 5,
  },
  viewImg: {
    alignSelf: 'center',
    width: '100%',
    height: 120,
    alignItems: 'center',
    marginBottom: 5,
  },
  imgProduct: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
    height: '100%',
  },
  viewInfo: {
    paddingTop: 12,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  name: {
    fontSize: 17,
    color: theme.colors.gray,
    marginVertical: 1,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: theme.colors.red,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  btnAddCart: {
    marginVertical: getSize.s(3),
    marginHorizontal: getSize.s(12),
    height: getSize.s(30),
    paddingHorizontal: getSize.s(5),
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },
});
