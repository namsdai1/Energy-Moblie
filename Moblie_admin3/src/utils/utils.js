export function formatFloatWithDecimal(number, decimal = 3, useComma = true) {
  if (number) {
    let result =
      Math.round(number * Math.pow(10, decimal)) / Math.pow(10, decimal);
    if (useComma) {
      result = result.toString().replace(".", ",");
    }
    return result;
  } else {
    return 0;
  }
}
