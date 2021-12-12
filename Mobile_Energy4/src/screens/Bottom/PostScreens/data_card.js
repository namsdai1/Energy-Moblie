import React, {useState, useEffect} from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Block, Text, Thumbnail, Button, Header} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const Product_Card = ({item}) => {
  return (
    <Block
      style={{}}
      borderWidth={1}
      borderColor="#D3D3D3"
      borderRadius={5}
      width={width / 2.3}
      margin={10}>
      <Image
        source={{uri: item.imgProduct}}
        style={{width: '100%', height: height / 4}}
      />
      <Text marginTop={5} size={16} style={{fontWeight: 'bold'}}>
        {' '}
        {item.nameProduct}
      </Text>
      <Text size={14} color={theme.colors.red} style={{fontWeight: 'bold'}}>
        {' '}
        {item.price + ' VND'}
      </Text>
      <Text size={10} margin={5}>
        {item.currentime}
      </Text>
    </Block>
  );
};

export default Product_Card;
