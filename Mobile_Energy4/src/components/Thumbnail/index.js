import React from 'react';
import {View, Image, Pressable} from 'react-native';
import {Block} from '@components';
import {icons} from '@assets';

const Thumbnail = ({
  source,
  style,
  imageStyle,
  width,
  height,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  resizeMode,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...props}>
      <Block alignCenter style={style}>
        <Image
          source={source}
          width={width}
          height={height}
          style={{width: '100%', height: '100%', ...imageStyle}}
          resizeMode={resizeMode}
        />
      </Block>
    </Pressable>
  );
};

export default Thumbnail;
