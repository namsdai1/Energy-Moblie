import React from 'react';
import {Image, Pressable, StatusBar} from 'react-native';
import {Block, Text} from '@components';
import {theme} from '@theme';

const Header = ({
  iconLeft,
  iconRight,
  iconDif,
  leftPress,
  rightPress,
  difPress,
  title,
  style,
  iconStyle,
  titleStyle,
}) => {
  return (
    <Block
      row
      backgroundColor={theme.colors.primary}
      paddingHorizontal={12}
      justifyCenter
      alignCenter
      style={{
        paddingVertical: 16,
        paddingTop: StatusBar.currentHeight + 18,
        ...style,
      }}>
       
      <Block flex height={'100%'} >
      {iconLeft && (
        <Pressable onPress={leftPress}>
          <Image
            source={iconLeft}
            style={{marginHorizontal: 2, width: 24, height: 24, ...iconStyle}}
            resizeMode="contain"
          />
        </Pressable>
      )}
      </Block>
      <Block style={{flex:3}} alignCenter justifyCenter>
        <Text
          style={{
            fontSize: 20,
            color: theme.colors.white,
            fontWeight: 'bold',
            ...titleStyle,
           
          }}>
          {title}
        </Text>
      </Block>
      {iconDif && (
        <Pressable onPress={difPress}>
          <Image
            source={iconDif}
            style={{marginHorizontal: 5, width: 24, height: 24, ...iconStyle}}
            resizeMode="contain"
          />
        </Pressable>
      )}
       <Block flex alignEnd>
      {iconRight && (
        <Pressable onPress={rightPress}>
          <Image
            source={iconRight}
            style={{marginHorizontal: 2, width: 24, height: 24, ...iconStyle}}
            resizeMode="contain"
          />
        </Pressable>
      )}
      </Block>
    </Block>
  );
};

export default Header;
