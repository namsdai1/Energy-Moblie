import React from 'react';
import {Pressable, Image} from 'react-native';
import {icons} from '@assets';
import {Block, Text, Header, Thumbnail} from '@components';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import styles from './style';
import {theme} from '@theme';

const FavoriteCard = ({item, onPress}) => {

  const {titleFL, imageFL, priceFL, boughtFL} = item;
  return (
    <Pressable onPress={onPress}>
      <Block style={styles.container} flex row margin={8} borderRadius={8}>
        <Block flex column>
          <Block flex alignCenter style={styles.viewContent}>
            <Image style={styles.viewContentImage} source={{uri: imageFL}} />
          </Block>

          <Block flex column justifyCenter>
            <Text style={styles.txtTitle}> {titleFL} </Text>
            <Block flex row marginBottom={8} marginTop={4}>
              <Text style={styles.txtPrice}> {priceFL} </Text>
              <Text style={styles.txtBought}> {boughtFL} </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default FavoriteCard;
