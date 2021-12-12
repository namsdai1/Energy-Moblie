import React from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {FavoriteCard} from '@components';
import {useNavigation} from '@react-navigation/native';

const FavoList = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.idFL}
      renderItem={({item}) => (
        <FavoriteCard
          onPress={() =>
            ToastAndroid.show('item: ' + ' ' + item.idFL, ToastAndroid.SHORT)
          }
          morePress={() =>
            ToastAndroid.show('Option: ' + item.idFL, ToastAndroid.SHORT)
          }
          item={item}
        />
      )}
      style={{alignSelf: 'center'}}
    />
  );
};

export default FavoList;
