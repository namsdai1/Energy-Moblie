import React from 'react';
import {Pressable} from 'react-native';
import {Block, Text} from '@components';

const PressText = ({
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  title,
  style,
  titleStyle,
  ...props
}) => {
  return (
    <Block alignCenter>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{backgroundColor: 'white', ...style}}
        {...props}>
        <Text style={{fontSize: 15, color: '#000', ...titleStyle}}>
          {title}
        </Text>
      </Pressable>
    </Block>
  );
};

export default PressText;
