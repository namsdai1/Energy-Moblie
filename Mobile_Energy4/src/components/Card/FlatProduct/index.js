import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';
import {Block, Text} from '@components';

const FlatProduct = ({item, onPress, style}) => {
  const {nameProduct, imgProduct, price, time} = item;
  return (
    <Pressable onPress={onPress}>
      <Block flex row style={[styles.cardContainer, style]}>
        <Block
          alignSelf={'center'}
          width={'25%'}
          height={'100%'}
          marginRight={5}>
          <Image source={{uri: imgProduct}} style={styles.imgProduct} />
        </Block>

        <Block flex column justifyCenter style={styles.viewInfo}>
          <Text style={styles.name}>{nameProduct}</Text>
          <Text style={styles.price}>{price} Đ</Text>
        </Block>
        <Text style={styles.time}>{time}</Text>
      </Block>
    </Pressable>
  );
};

export default FlatProduct;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 12,
    backgroundColor: theme.colors.grey,
    borderRadius: 5,
    marginVertical: 5,
  },
  imgProduct: {
    borderRadius: 3,
    width: '100%',
    height: '100%',
  },
  viewInfo: {
    paddingHorizontal: 8,
    paddingVertical: 12,
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
    marginVertical: 12,
    marginHorizontal: 8,
  },
});
