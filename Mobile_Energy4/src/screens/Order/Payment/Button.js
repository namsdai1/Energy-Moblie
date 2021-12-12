import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from './colors';

const PrimaryButton = ({title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
// const SecondaryButton = ({title, onPress = () => {}}) => {
//   return (
//     <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
//       <View style={{...style.btnContainer, backgroundColor: COLORS.white}}>
//         <Text style={{...style.title, color: COLORS.primary}}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({
  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal:16,
    paddingVertical: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',    
  },
});

export {PrimaryButton,};
