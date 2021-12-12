import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Dimensions,
  ToastAndroid,
  ImageBackground,
  Button,
} from 'react-native';
import {useNavigation,CommonActions} from '@react-navigation/native';
import {icons} from '@assets';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import styles from './style';

const VoteFinishScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={icons.bg}
        style={styles.image}>
      
        <View style={styles.body}>
          <Image source={icons.check} style={styles.check} />
          <Text style={styles.text}>Cảm ơn đánh giá của bạn !</Text>
          <Text>Chúng tôi sẽ ghi nhận đánh giá của bạn</Text>
          <Text>để ứng dụng ngày càng tốt hơn!</Text>
          <TouchableOpacity
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: routes.BOTTOMTABBAR,
                  },
                ],
              })
            );      
          
          }}
          style={styles.button}>
          <Text style={{color: theme.colors.white, fontWeight: 'bold'}}>
            TRANG CHỦ
          </Text>
        </TouchableOpacity>
        </View>
       
      </ImageBackground>
    </View>
  );
};
export default VoteFinishScreen;
