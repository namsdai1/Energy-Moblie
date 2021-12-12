import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {icons} from '@assets';
import {Block, Header, Text, TextInput} from '@components';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const ChangePassScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  return (
    <Block flex styles={styles.container}>
      <Header
        iconLeft={icons.back}
        iconStyle={{width: 24, height: 24}}
        leftPress={() =>
          navigation.navigate(routes.BOTTOMTABBAR, {
            screen: routes.PROFILESCREENS,
          })
        }
        title={'Đổi mật khẩu'}
      />

      <Block style={styles.viewEdit} padding={16}>
        <Block style={styles.viewText}>
          <Text size={15} style={styles.txtTitle}>
            Mật khẩu hiện tại
          </Text>
          <TextInput
            issecure
            fontSize={18}
            style={styles.textInput}
            onChangeText={setOldPassword}
            placeholder="Nhập mật khẩu"
          />
        </Block>

        <Block style={styles.viewText}>
          <Text size={15} style={styles.txtTitle}>
            Mật khẩu mới
          </Text>
          <TextInput
            issecure
            fontSize={18}
            style={styles.textInput}
            onChangeText={setNewPassword}
            placeholder="Nhập mật khẩu mới"
          />
        </Block>

        <Block style={styles.viewText}>
          <Text size={15} style={styles.txtTitle}>
            Nhập lại mật khẩu mới
          </Text>
          <TextInput
            issecure
            fontSize={18}
            style={styles.textInput}
            onChangeText={setNewPassword}
            placeholder="Nhập lại mật khẩu mới"
          />
        </Block>
      </Block>

      <Block style={styles.backgroundBtnSave}>
        <TouchableOpacity
          style={styles.btnSave}
          onPress={() => {
            navigation.navigate(routes.BOTTOMTABBAR, {
              screen: routes.PROFILESCREENS,
            });
          }}>
          <Text fontSize={18} style={styles.txtSave}>
            Lưu thay đổi
          </Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default ChangePassScreen;
