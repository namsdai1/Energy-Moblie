import React from 'react';
import {Block, Text} from '@components';
import {StyleSheet, Pressable} from 'react-native';

const Button = ({
  title,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  dissable,
  style,
  shadow,
  buttonStyle,
  titleStyle,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      dissable={dissable}
      {...props}>
      <Block
        alignCenter
        shadow={shadow}
        justifyCenter
        height={45}
        radius={5}
        marginVertical={16}
        backgroundColor="red"
        style={style}>
        <Text style={{fontSize: 17, color: '#fff', ...titleStyle}}>
          {title}
        </Text>
      </Block>
    </Pressable>
  );
};

export default Button;

// style={({pressed}) => [
//     {
//       backgroundColor: pressed ? '#cc99ff' : '#8000ff',
//       ...buttonStyle,
//     },
//   ]}
