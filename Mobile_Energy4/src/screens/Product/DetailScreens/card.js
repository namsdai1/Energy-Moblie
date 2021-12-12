import React, {useEffect, useState} from 'react';
import {Dimensions, Platform, UIManager, LayoutAnimation} from 'react-native';
import {Block, Text, Thumbnail, Button} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import moment from 'moment';
import {getSize} from '@utils/responsive';
const CommentCard = ({item}) => {
  const {id_user, image, rate, id_product, content, date} = item;
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [defaultRating, setDefaultRating] = useState('');
  const [avt, SetAvt] = useState(
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
  );

  useEffect(() => {
    setDefaultRating(rate);
  }, [item]);
  function timeSince(date) {
    const d1 = new Date(date);
    const result = d1.getTime();
    var seconds = Math.floor((new Date() - result) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + ' năm trước';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' tháng trước';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' ngày trước';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' giờ trước';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' phút trước';
    }
    return Math.floor(seconds) + ' giây trước';
  }

  return (
    <Block>
      <Block marginBottom={10} row style={styles.card}>
        <Block alignStart style={{flex: 1}}>
          <Thumbnail
            source={
              id_user.avt_user !== '' ? {uri: id_user.avt_user} : icons.maleuser
            }
            imageStyle={styles.avt}
            style={styles.viewAvt}
          />
        </Block>
        <Block style={{flex: 3}}>
          <Text size={16} style={{fontWeight: 'bold'}}>
            {id_user.name_user}
          </Text>
          <Block row>
            {maxRating.map((item, index) => (
              <Thumbnail
                source={
                  item <= defaultRating ? icons.star_filled : icons.star_corner
                }
                style={{width: getSize.m(15), height: getSize.m(15)}}
              />
            ))}
          </Block>
          <Text size={14}>{content}</Text>
          {image == null || image == '' ? null : (
            <Thumbnail source={{uri: image}} style={{width: 90, height: 70}} />
          )}
          <Text size={10}>{timeSince(date)}</Text>
        </Block>
        <Block justifyStart style={{flex: 1}}>
          <Thumbnail
            source={icons.graymore}
            style={{width: 20, height: 20, alignSelf: 'flex-end'}}
          />
        </Block>
      </Block>
      <Block
        width={width / 1.1}
        style={{borderWidth: 0.3, borderColor: theme.colors.dark}}
      />
    </Block>
  );
};

export default CommentCard;
