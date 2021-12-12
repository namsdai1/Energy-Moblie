import React from 'react';
import {Block} from '@components';
import {StyleSheet, Text, Pressable, Image, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '@theme';
import {icons} from '@assets';
import {getSize} from '@utils/responsive';

const MyTabBar = ({state, descriptors, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Block
      row
      backgroundColor={theme.colors.white}
      paddingBottom={Platform.OS === 'ios' ? bottom : 4}
      shadow
      paddingTop={3}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.category
            : index === 2
            ? icons.cart
            : index === 3
            ? icons.notification
            : icons.user;

        const dicon =
          index === 0
            ? icons.dhome
            : index === 1
            ? icons.dcategory
            : index === 2
            ? icons.dcart
            : index === 3
            ? icons.dbell
            : icons.dprofile;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            <Block style={styles.blockIcon(isFocused)}>
              {isFocused ? (
                <Image source={dicon} style={styles.diconstyle} />
              ) : (
                <Image source={icon} style={styles.iconstyle} />
              )}
            </Block>
            <Text style={styles.textlabel(isFocused)}>{label}</Text>
          </Pressable>
        );
      })}
    </Block>
  );
};
export default MyTabBar;
const styles = StyleSheet.create({
  btn: {flex: 1, alignItems: 'center'},
  textlabel: isFocused => ({
    color: isFocused ? theme.colors.primary : theme.colors.blackText,
    marginTop: 2,
    fontSize: 13,
    fontWeight: isFocused ? 'bold' : 'normal',
  }),
  blockIcon: isFocused => ({
    backgroundColor: isFocused ? theme.colors.secondary : theme.colors.white,
    padding: 8,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: isFocused ? theme.colors.primary : theme.colors.white,
  }),
  iconstyle: {
    width: getSize.s(23),
    height: getSize.s(23),
    resizeMode: 'contain',
    tintColor: theme.colors.blackText,
  },
  diconstyle: {
    width: getSize.s(23),
    height: getSize.s(23),
    resizeMode: 'contain',
    tintColor: theme.colors.white,
  },
});
