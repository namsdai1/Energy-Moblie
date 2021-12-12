

import React from 'react';
import {Pressable, Image, StyleSheet, Dimensions} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';
import {Block, Text} from '@components';

const GridProduct = ({item, onPress, style}) => {
  const {nameProduct, imgProduct, price, time} = item;
  return (
    <Pressable onPress={onPress}>
      <Block column shadow flex style={[styles.cardContainer, style]}>
        <Block flex={0.5} style={styles.viewImg}>
          <Image source={{uri: imgProduct}} style={styles.imgProduct} />
        </Block>
        <Block flex={0.5} justifyCenter style={styles.viewInfo}>
          <Text style={styles.name}>{nameProduct}</Text>
          <Text style={styles.price}>{price} Đ</Text>
          <Text style={styles.time}>{time}</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default GridProduct;

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  cardContainer: {
    width: width / 2.3,
    backgroundColor: theme.colors.grey,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 8,
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
    fontWeight: 'bold',
    color: theme.colors.gray,
    marginVertical: 1,
  },
  price: {
    fontSize: 15,
    color: theme.colors.red,
    fontWeight: 'bold',
    marginVertical: 1,
  },
  time: {
    fontSize: 13,
    color: theme.colors.lightGray,
    marginVertical: 3,
  },
});
