import {Platform} from 'react-native';

export const theme = {
  colors: {
    primary: '#1DA1F2',
    secondary: '#46B3F6',
    aqua: '#77C8EB',
    thirdy: '#e7f5fe',
    text: '#242424',
    background: '#f5f5f5',
    orange: '#FE930F',
    lightGray: '#A5A5A5',
    gray: '#424242',
    smoke: '#E6E6E6',
    white: '#ffffff',
    grey: '#F0F4F8',
    black: '#000000',
    placeholder: '#707070',
    blue: '#0d5cb6',
    red: '#E83625',
    gradient: ['#F04831', '#E73222', '#D9100C'],
    green: '#088A08',
    lightGreen: '#29bb89',
    yellow: '#FFDF00',
    dark: '#00000060',
    grayText: '#748A9D',
    darkGray: '#888888',
    blackText: '#2D2C3C',
    greyText: '#A6BCD0',
    greyTitle: '#88B2D9',
    grayTitle: '#757575',
    grayLightText: '#949599',
  },

  fonts: {
    fontWeight: {
      heavy: '700',
      bold: 'bold',
      semibold: Platform.OS === 'android' ? 'bold' : '600',
      regular: 'normal',
      light: '300',
    },
    fontFamily: {
      default: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },
  },
};
