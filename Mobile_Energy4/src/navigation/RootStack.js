import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {routes} from './routes';
import {auth} from '../screens/Auth';
import {orders} from '@screens/Order';
import {product} from '@screens/Product';
import OPTIONSCREENS from '../screens/OptionScreen/OptionsPicket';
import {bottom} from '@screens/Bottom';
import {useData} from 'config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
const Stack = createStackNavigator();
const RootStack = () => {
  useEffect(async () => {
    const tolen = await AsyncStorage.getItem('token');
    useData.token = tolen != null ? tolen : null;
    if (tolen !== null) {
      var decoded = jwt_decode(tolen);
      useData.id = decoded.id;
    }
  }, [useData]);
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        presentation="modal"
        initialRouteName={routes.FLASHSCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.FLASHSCREEN} component={auth.FLASHSCREEN} />
        <Stack.Screen
          name={routes.LOGINSCREENS}
          component={auth.LOGINSCREENS}
        />
        <Stack.Screen
          name={routes.SIGNUPSCREENS}
          component={auth.SIGNUPSCREENS}
        />
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name={routes.DETAILSCREENS}
          component={product.DETAILSCREENS}
        />
        <Stack.Screen
          name={routes.INFORMATIONSCREEN}
          component={auth.INFORMATIONSCREEN}
        />
        <Stack.Screen
          name={routes.MYBILLSCREENS}
          component={product.MYBILLSCREENS}
        />
        <Stack.Screen
          name={routes.PRODUCTSEARCH}
          component={product.PRODUCTSEARCH}
        />
        <Stack.Screen name={routes.OPTIONSCREENS} component={OPTIONSCREENS} />
        <Stack.Screen
          name={routes.ORDER_SUCCESS_SCREEN}
          component={orders.ORDER_SUCCESS_SCREEN}
        />
        <Stack.Screen
          name={routes.VOTE_SCREEN}
          component={orders.VOTE_SCREEN}
        />
        <Stack.Screen
          name={routes.VOTE_FINISH_SCREEN}
          component={orders.VOTE_FINISH_SCREEN}
        />
        <Stack.Screen
          name={routes.EDITPROFILE}
          component={bottom.EDITPROFILE}
        />
        <Stack.Screen
          name={routes.ORDERLOCATION}
          component={orders.ORDERLOCATION}
        />
        <Stack.Screen
          name={routes.ORDERDETAIL}
          component={orders.ORDERDETAIL}
        />
        <Stack.Screen
          name={routes.SEARCHSCREEN}
          component={bottom.SEARCHSCREEN}
        />
        <Stack.Screen
          name={routes.CHANGEPASSSCREEN}
          component={auth.CHANGEPASSSCREEN}
        />
        <Stack.Screen
          name={routes.PAYMENT_SCREEN}
          component={orders.PAYMENT_SCREEN}
        />
         <Stack.Screen
          name={routes.PRODUCRTSRC}
          component={product.PRODUCRTSRC}
          />
        <Stack.Screen
          name={routes.LIKELISTSCREEN}
          component={bottom.LIKELISTSCREEN}
        />
        <Stack.Screen
          name={routes.PRODUCTCUSTOM}
          component={product.PRODUCTCUSTOM}
        />
        <Stack.Screen
          name={routes.NUMBERPHONESCREEN}
          component={auth.NUMBERPHONESCREEN}
        />
        <Stack.Screen
          name={routes.SENDOTPSCREEN}
          component={auth.SENDOTPSCREEN}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
