import {icons} from '@assets';
import {Block, Thumbnail} from '@components';
import {routes} from '@navigation/routes';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {formatCurrency} from '@utils/utils';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CommentCard from './card';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import style from './style';
const Process = ({step, steps, height, name}) => {
  const calculationPercent = (step, steps) => {
    return step !== 0 ? (parseFloat(step) / parseFloat(steps)) * 100 : 0;
  };
  return (
    <Block row margin={getSize.m(5)}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{name}</Text>
        <Image
          source={icons.star_filled}
          style={{width: getSize.s(10), height: getSize.s(10)}}
          tintColor="black"
        />
      </View>
      <View style={{flex: 9, paddingHorizontal: 2}}>
        <View
          style={{
            height,
            backgroundColor: 'rgba(0,0,0,0.1)',
            overflow: 'hidden',
            width: '100%',
            marginTop: getSize.m(5),
            margin: getSize.m(2),
          }}>
          <View
            style={{
              height,
              width: calculationPercent(step, steps) + '%',
              backgroundColor: theme.colors.primary,
              position: 'absolute',
              let: 0,
              top: 0,
            }}></View>
        </View>
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text>{step}</Text>
      </View>
    </Block>
  );
};
export default function Comment({
  countComment,
  dataComment,
  name,
  price,
  image,
  setModalType,
  setModalVisible,
  navigation,
}) {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [defaultRating, setDefaultRating] = useState(countComment.avd);
  const [data, setData] = useState(countComment.data);
  const averaged = () => {};
  return (
    <Block>
      <View
        zIndex={1}
        style={{
          backgroundColor: 'white',
          width: width,
          height: height,
          position: 'absolute',
          top: 0,
          right: 0,
        }}></View>
      <ScrollView zIndex={2}>
        <View
          zIndex={1}
          style={{
            position: 'absolute',
            top: 10,
            right: 20,
          }}>
          <Thumbnail
            onPress={() => {
              setModalVisible(false), setModalType('');
            }}
            source={icons.close}
            imageStyle={{width: getSize.m(20), height: getSize.m(20)}}
          />
        </View>
        <Block
          backgroundColor={theme.colors.white}
          width={width}
          paddingHorizontal={getSize.m(10)}>
          <Block
            width={width}
            row
            paddingHorizontal={getSize.m(8)}
            style={{
              borderTopRightRadius: getSize.m(15),
              borderTopLeftRadius: getSize.m(15),
            }}
            backgroundColor={theme.colors.white}>
            <Block style={{flex: 3}}>
              <Thumbnail
                source={{uri: image[0]}}
                imageStyle={{width: getSize.s(80), height: getSize.s(120)}}
              />
            </Block>
            <Block
              style={{flex: 7}}
              justifyCenter
              paddingHorizontal={getSize.m(8)}>
              <Text numColumns={1} style={{fontSize: getSize.m(20)}}>
                {name}
              </Text>
              <Text
                style={{
                  fontSize: getSize.m(20),
                  color: 'red',
                  fontWeight: 'bold',
                }}>
                {formatCurrency(price)}
              </Text>
            </Block>
          </Block>
          <Block
            marginTop={getSize.m(10)}
            row
            paddingVertical={getSize.m(13)}
            backgroundColor="white"
            paddingHorizontal={getSize.m(8)}>
            <Block
              style={{
                flex: 2,
                borderColor: theme.colors.grey,
                borderRightWidth: 1,
              }}
              justifyCenter
              alignCenter>
              <Text style={style.textstar}>{defaultRating}</Text>
              <View style={style.icon}>
                {maxRating.map((item, index) => (
                  <Thumbnail
                    source={
                      item <= defaultRating
                        ? icons.star_filled
                        : icons.star_corner
                    }
                    style={style.check}
                  />
                ))}
              </View>
            </Block>
            <Block style={{flex: 3}}>
              {data.map((item, index) => (
                <Process
                  name={item.start}
                  step={item.count}
                  steps={countComment.comments}
                  height={getSize.m(10)}
                />
              ))}
            </Block>
          </Block>
          <Block>
            <TouchableOpacity
              style={{
                width: '100%',
                paddingHorizontal: getSize.m(10),
                paddingVertical: getSize.m(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: theme.colors.primary,
                borderWidth: 1,
              }}
              onPress={() => {
                navigation.navigate(routes.VOTE_SCREEN),
                  setModalVisible(false),
                  setModalType('');
              }}>
              <Text
                style={{fontSize: getSize.m(20), color: theme.colors.primary}}>
                Viết Đánh Giá
              </Text>
            </TouchableOpacity>
          </Block>
          <Text style={{fontWeight: 'bold', fontSize: getSize.m(20)}}>
            Bình luận
          </Text>
          <FlatList
            ItemSeparatorComponent={
              Platform.OS !== 'android' &&
              (({highlighted}) => (
                <Block
                  style={[styles.separator, highlighted && {marginLeft: 0}]}
                />
              ))
            }
            data={dataComment}
            renderItem={({item, index}) => <CommentCard item={item} />}
          />
        </Block>
      </ScrollView>
    </Block>
  );
}
