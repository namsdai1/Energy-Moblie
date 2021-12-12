import React from 'react';
import {Image, Pressable, StatusBar, TouchableOpacity} from 'react-native';
import {Block, Text, Thumbnail} from '@components';
import {theme} from '@theme';
import {icons} from '@assets';
import {getSize} from '@utils/responsive';
const count = ({onPressSubtract,onPressPlus,amount}) => {
  return (
    <Block row>
      <Block 
        style={{
          justifyContent: 'center',
          width: getSize.s(25),
          height: getSize.v(25),
          borderColor: theme.colors.primary,
          borderWidth: 1,
        }}>
        <Thumbnail
          onPress={onPressSubtract}
          imageStyle={{width: getSize.v(17), height: getSize.v(17)}}
          source={icons.subtract}></Thumbnail>
      </Block>
      <Block
        width={getSize.s(35)}
        height={getSize.v(25)}
        alignCenter
        justifyCenter
        borderColor={theme.colors.primary}
        borderWidth={1}>
        <Text center size={16}>
          {amount}
        </Text>
      </Block>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          width: getSize.s(25),
          height: getSize.v(25),
          borderColor: theme.colors.primary,
          borderWidth: 1,
        }}
        >
        <Thumbnail
        onPress={onPressPlus}
          imageStyle={{width: getSize.v(17), height: getSize.v(17)}}
          source={icons.plus}></Thumbnail>
      </TouchableOpacity>
    </Block>
  );
};
export default count;
