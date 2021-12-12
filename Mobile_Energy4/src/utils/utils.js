import {
  Appearance,
  Dimensions,
  PermissionsAndroid,
  Platform,
  StatusBar,
} from 'react-native';

export function getStatusBarHeight(skipAndroid = false) {
  if (Platform.OS === 'ios') {
    return isIphoneX() ? 44 : 24;
  }

  if (skipAndroid) {
    return 0;
  }

  return StatusBar.currentHeight;
}

export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function formatCurrency(number) {
  if (!number) {
    return '0đ';
  }
  number = number.toString().replace(',', '.');
  return (
    formatFloatWithDecimal(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ'
  );
}

export function formatNumber(number) {
  if (!number) {
    return '0';
  }
  if (typeof number === 'string') {
    return number;
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function isEmptyValues(value) {
  return (
    value === undefined ||
    value === null ||
    value === NaN ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}

export function formatFloatWithDecimal(number, decimal = 3, useComma = true) {
  if (number) {
    let result =
      Math.round(number * Math.pow(10, decimal)) / Math.pow(10, decimal);
    if (useComma) {
      result = result.toString().replace('.', ',');
    }
    return result;
  } else {
    return 0;
  }
}

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}
