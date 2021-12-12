import React, {useState} from 'react';
import {ToastAndroid, FlatList, ScrollView} from 'react-native';
import {Block, Text, Header, Thumbnail} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const info = [
  {
    title: 'Họ tên',
    desc: 'Nguyễn Hoài Bão',
  },
  {
    title: 'Giới tính',
    desc: 'Khác',
  },
  {
    title: 'Ngày sinh',
    desc: '06/09/2069',
  },
  {
    title: 'Số điện thoại',
    desc: '0696969696',
  },
  {
    title: 'Email',
    desc: 'hoaibao0512@gmail.com',
  },
  {
    title: 'Địa chỉ',
    desc: 'CVPM Quang Trung, Quận 12, TP.HCM',
  },
];

const InformationScreen = () => {
  const navigation = useNavigation();
  const [data, seData] = useState(info);
  const [avt, SetAvt] = useState(
    'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
  );

  const renderItem = ({item}) => {
    return (
      <Block shadow style={styles.boxInfo}>
        <Text style={styles.titleBox}>{item.title}</Text>
        <Text style={styles.contentBox}>{item.desc}</Text>
      </Block>
    );
  };

  return (
    <Block flex style={styles.container}>
      <Header
        iconLeft={icons.back}
        iconRight={icons.more}
        leftPress={() => navigation.navigate(routes.PROFILESCREENS)}
        rightPress={() => ToastAndroid.show('more', ToastAndroid.SHORT)}
      />
      {/* View xanh chứa avatar */}
      <Block alignCenter style={styles.viewPrimary}>
        <Block style={styles.viewAvt}>
          <Thumbnail
            source={{uri: avt}}
            imageStyle={styles.avt}
            onPress={() => console.log('Edit')}
          />
          <Thumbnail
            source={icons.bpen}
            style={styles.viewEdit}
            imageStyle={styles.icEdit}
          />
        </Block>
        <Block style={styles.viewBorder} />
      </Block>
      {/* View trắng chứa thông tin user */}
      <ScrollView style={styles.viewInfo}>
        {/* Tiêu đề và icon edit information */}
        <Block row paddingHorizontal={8}>
          <Block width={'50%'}>
            <Text style={styles.titleInfo}>Thông tin cá nhân</Text>
          </Block>
          <Block width={'50%'}>
            <Thumbnail
              onPress={() => console.log('edit infor')}
              source={icons.bpen}
              resizeMode={'contain'}
              style={styles.btnEditInfo}
              imageStyle={styles.icEditInfo}
            />
          </Block>
        </Block>
        {/* View chứa các box thông tin */}
        <Block marginVertical={16} paddingHorizontal={8}>
          {/* <FlatList data={data} renderItem={renderItem} /> */}
          {data.map(item => {
            return (
              <Block shadow style={styles.boxInfo}>
                <Text style={styles.titleBox}>{item.title}</Text>
                <Text style={styles.contentBox}>{item.desc}</Text>
              </Block>
            );
          })}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default InformationScreen;
