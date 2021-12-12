/**
 * Created by NganLang on 27/05/20.
 */
import {Button} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonView from './ButtonView';

const {width, height} = Dimensions.get('screen');

export default function BottomSheet({
  visible,
  onClose,
  headerTitle,
  children,
  onConfirm,
  confirmButtonTitle,
  confirmButtonStyle,
  showConfirmButton = true,
  showCloseButton = true,
  titleStyle,
  containerStyle,
  titleContainerStyle,
  disabled,
  isFavorite = false,
}) {
  return (
    <View>
      {visible && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            if (!!onClose) onClose();
          }}
          style={styles.background}
        />
      )}
      <Modal
        animationType={'slide'}
        presentationStyle={'formSheet'}
        visible={visible}
        transparent
        onRequestClose={onClose}>
        <TouchableOpacity
          onPress={() => {
            if (!!onClose) onClose();
          }}
          activeOpacity={1}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: !isFavorite ? 'flex-end' : 'flex-start',
          }}>
          <View
            style={[
              styles.contentContainer,
              containerStyle,
              {paddingBottom: getSize.v(44)},
            ]}>
            {headerTitle && (
              <View style={[styles.titleContainer, titleContainerStyle]}>
                {showCloseButton && (
                  <TouchableOpacity
                    onPress={() => {
                      if (!!onClose) onClose();
                    }}
                    style={{}}>
                    <MaterialIcons
                      name={'close'}
                      size={30}
                      color={Colors.gray}
                    />
                  </TouchableOpacity>
                )}
                <Text style={[styles.title, titleStyle]}>{headerTitle}</Text>
              </View>
            )}
            {children}
            {showConfirmButton && (
              <Button
                disabled={disabled}
                onPress={onConfirm}
                title={confirmButtonTitle}
                style={[{marginTop: getSize.v(20)}, confirmButtonStyle]}
              />
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    zIndex: 999999999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: height * 2,
    width: width,
    top: -height,
  },
  contentContainer: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: getSize.v(13.5),
    paddingHorizontal: getSize.s(25),
  },
  title: {
    fontSize: getSize.m(18),
    color: theme.colors.blackText,
    textAlign: 'center',
    flex: 1,
  },
  titleContainer: {
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: getSize.v(20),
    flexDirection: 'row',
  },
});
