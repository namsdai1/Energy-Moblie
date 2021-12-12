import React, {useEffect, useState, useRef} from 'react';
import {View, ToastAndroid, ScrollView, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes.js';
import {connect} from 'react-redux';
import Loading from '@components/Loadding/Loading';

import {Block, Button, Thumbnail, Header} from '@components';
import {theme} from '@theme';

const SendOTP = ({}) => {
  const navigation = useNavigation();
  const [textError, setTextError] = useState('');
  //const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''});
  let textInput = useRef(null);
  const lengthInput = 6;
  const defaultCountdown = 30;
  const [internalValue, setInternalValue] = useState('');
  const [countdown, setCountdown] = useState(defaultCountdown);

  const onChangeText = (value) => {
    setInternalValue(value)
  }

  // useEffect(() => {
  //   this.clockCall = setInterval(() => {
  //     decrementClock();
  //   }, 1000)
  //   return () => {
  //     clearInterval(this.clockCall)
  //   }
  // },[])

  // const decrementClock = () => {
  //   setCountdown(countdown - 1)
  // }

  useEffect(() => {
    textInput.focus();
  },[])

  // const firstInput = useRef();
  // const secondInput = useRef();
  // const thirdInput = useRef();
  // const fourthInput = useRef();
  // const fifthInput = useRef();
  // const sixthInput = useRef();

  return (
    <>
      <Header iconLeft={icons.back} leftPress={() => navigation.goBack()} />
      <Block flex padding={16} style={styles.container}>
        <Block style={styles.viewForm}>
          <Text style={styles.txtTitle}>Mã đã được gửi!</Text>
          <Text paddingTop={4} paddingBottom={40} style={styles.txt}>
            Vui lòng nhập mã code đã được gửi trong tin nhắn
          </Text>

          <TextInput
            ref={(input) => textInput = input}
            onChangeText={onChangeText}
            value={internalValue}
            maxLength={lengthInput}
            keyboardType="numeric"
            style={{width: 0, height: 0}}
          />
          <Block row style={styles.viewInput}>
            {Array(lengthInput).fill().map((data, index) => (
              <Block style={[styles.viewInInput, {
                borderBottomColor: index === internalValue.length ? 
                theme.colors.primary : theme.colors.greyText
              }]}>
                <Text style={styles.txtInInput} 
                  onPress={() => textInput.focus()}
                  >
                  {internalValue && internalValue.length > 0 ? internalValue[index] : ""}
                </Text>
              </Block>
            ))}
          </Block>

          <Block style={styles.viewFormResend} row paddingTop={40}>
            <Block style={styles.viewDelete}>
              <Text style={styles.txtDelete}>Xóa</Text>
            </Block>

            <Block style={styles.viewResendOTP} >
              <Text onPress={() => 
                          ToastAndroid.show('Resend in 29', ToastAndroid.SHORT)
                        } style={styles.txtResendOTP}>Gửi lại mã OTP({countdown})</Text>
            </Block>
          </Block>      
        {/* <Block row style={styles.viewInput}>
          <Block style={styles.viewInInput}>
            <TextInput style={styles.txtInInput}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({...otp, 1: text})
                text && secondInput.current.focus()}}/>
            </Block>

            <Block row style={styles.viewInInput}>
            <TextInput style={styles.txtInInput}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({...otp, 2: text})
                text ? thirdInput.current.focus() : firstInput.current.focus()}}/>
            </Block>
            <Block row style={styles.viewInInput}>
            <TextInput style={styles.txtInInput}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({...otp, 3: text})
                text ? fourthInput.current.focus() : secondInput.current.focus()}}/>
</Block>
<Block row style={styles.viewInInput}>
            <TextInput style={styles.txtInInput}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({...otp, 4: text})
                text ? fifthInput.current.focus() : thirdInput.current.focus()}}/>
</Block>
<Block row style={styles.viewInInput}>

            <TextInput style={styles.txtInInput}
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={(text) => {
                setOtp({...otp, 5: text})
                text ? sixthInput.current.focus() : fourthInput.current.focus()}}/>
</Block>
<Block row style={styles.viewInInput}>

            <TextInput style={styles.txtInInput}
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
              onChangeText={(text) => {
                setOtp({...otp, 6: text})
                !text && fifthInput.current.focus()}}/>

          </Block>
        </Block> */}

        </Block>
        <Block style={styles.viewButtonGetOTP}>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show('@@', ToastAndroid.SHORT);
            }}
            style={styles.button}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Nhận mã OTP
            </Text>
          </TouchableOpacity>
        </Block>

        <Text style={styles.txtErorr}>{textError}</Text>
      </Block>
    </>
  );
};
export default SendOTP;
// import React, {useRef, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   ToastAndroid,
//   Text,
//   TextInput,
// } from 'react-native';
// import {theme} from '@theme';
// import {Block, Button, Thumbnail, Header} from '@components';
// import styles from './style';

// const SendOTP = ({}) => {

//   const firstInput = useRef();
//   const secondInput = useRef();
//   const thirdInput = useRef();
//   const fourthInput = useRef();
//   const fifthInput = useRef();
//   const sixthInput = useRef();
//   const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''});

//   return (
//       <Block flex padding={16} style={styles.container}>
//         <Block style={styles.viewForm}>
//           <Text style={styles.txtTitle}>Mã đã được gửi!</Text>
//           <Text paddingTop={4} paddingBottom={40} style={styles.txt}>
//             Vui lòng nhập mã code đã được gửi trong tin nhắn
//           </Text>
//       <Block row style={styles.viewInput}>
//         <Block style={styles.viewInInput}>
//           <TextInput
//             style={styles.textInInput}
//             keyboardType="number-pad"
//             maxLength={1}
//             ref={firstInput}
//             onChangeText={text => {
//               setOtp({...otp, 1: text});
//               text && secondInput.current.focus();
//             }}
//           />
//         </Block>
//         <Block style={styles.viewInInput}>
//           <TextInput
//             style={styles.textInInput}
//             keyboardType="number-pad"
//             maxLength={1}
//             ref={secondInput}
//             onChangeText={text => {
//               setOtp({...otp, 2: text});
//               text ? thirdInput.current.focus() : firstInput.current.focus();
//             }}
//           />
//         </Block>
//         <Block style={styles.viewInInput}>
//           <TextInput
//             style={styles.textInInput}
//             keyboardType="number-pad"
//             maxLength={1}
//             ref={thirdInput}
//             onChangeText={text => {
//               setOtp({...otp, 3: text});
//               text ? fourthInput.current.focus() : secondInput.current.focus();
//             }}
//           />
//         </Block>
//         <Block style={styles.viewInInput}>
//           <TextInput
//             style={styles.textInInput}
//             keyboardType="number-pad"
//             maxLength={1}
//             ref={fourthInput}
//             onChangeText={text => {
//               setOtp({...otp, 4: text});
//               text ? fifthInput.current.focus() : thirdInput.current.focus();
//             }}
//           />
//         </Block>
//         <Block style={styles.viewInInput}>
//           <TextInput
//             style={styles.textInInput}
//             keyboardType="number-pad"
//             maxLength={1}
//             ref={fifthInput}
//             onChangeText={text => {
//               setOtp({...otp, 5: text});
//               text ? sixthInput.current.focus() : fourthInput.current.focus();
//             }}
//           />
//         </Block>
//         <Block style={styles.viewInInput}>
//           <TextInput
//             style={styles.textInInput}
//             keyboardType="number-pad"
//             maxLength={1}
//             ref={sixthInput}
//             onChangeText={text => {
//               setOtp({...otp, 6: text});
//               !text && fifthInput.current.focus();
//             }}
//           />
//         </Block>
//       </Block>

//       </Block>
//       <Block style={styles.viewButtonGetOTP}>
//            <TouchableOpacity
//             onPress={() => {
//               ToastAndroid.show('@@', ToastAndroid.SHORT);
//             }}
//             style={styles.button}>
//             <Text
//               style={{
//                 color: theme.colors.white,
//                 fontSize: 18,
//                 fontWeight: 'bold',
//               }}>
//               Nhận mã OTP
//             </Text>
//           </TouchableOpacity>
//         </Block>
//     </Block>
//   );
// };

// export default SendOTP;