import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

import styles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default function Modalpicker({item, setIdlocal}) {
  const [value, setValue] = useState('');
  const [masterData, setMasterData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [seach, setSeach] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setMasterData(item);
    setFilterData(item);
  }, [item]);
  const _setItem = item => {
    setValue(item.address_store);
    setIdlocal(item._id);
  };

  const seachFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.address_store
          ? item.address_store.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSeach(text);
    } else {
      setFilterData(masterData);
      setSeach(text);
      console.log(filterData + '22');
    }
  };
  return (
    <View style={styles.centeredView}>
      <TouchableOpacity
        style={[styles.modalView]}
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={{}}>
          <Text style={{fontSize: 16, color: theme.colors.placeholder}}>
            {value === '' ? 'Chọn nơi lấy hàng' : value}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalItem}>
            <View style={styles.itemRow}>
              <FontAwesome5 name="search" size={getSize.m(20)} />
              <TextInput
                style={styles.modaltextIp}
                placeholder="Tìm kiếm"
                value={seach}
                underlineColorAndroid="transparent"
                onChangeText={text => seachFilter(text)}
              />
            </View>
            <View style={{borderBottomWidth: 2, borderColor: 'black'}} />
            <ScrollView>
              {!(Array.isArray(filterData) && filterData.length) ? (
                <View>
                  <Text style={{fontSize: 18}}>No found Object</Text>
                  <TouchableOpacity
                    style={styles.close}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.textclose}>Close</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                filterData.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      _setItem(item), setModalVisible(false);
                    }}>
                    <View style={{marginTop: 5}}>
                      <Text style={styles.text}>{item.address_store}</Text>
                      <View
                        style={{
                          borderBottomWidth: 2,
                          borderColor: 'black',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
