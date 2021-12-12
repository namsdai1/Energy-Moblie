import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import {bottom} from '../screens/Bottom';
import CustomTabBar from './CustomTabBar';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOMESCREENS}
        component={bottom.HOMESCREENS}
        options={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name={routes.CATEGORYSRCEEN}
        component={bottom.CATEGORYSRCEEN}
        options={{tabBarLabel: 'Danh mục'}}
      />

      <Tab.Screen
        name={routes.CARTSCREENS}
        component={bottom.CARTSCREENS}
        options={{tabBarLabel: 'Giỏ hàng'}}
      />
      <Tab.Screen
        name={routes.NOTIFICATIONSCREENS}
        component={bottom.NOTIFICATIONSCREENS}
        options={{tabBarLabel: 'Thông báo'}}
      />
      <Tab.Screen
        name={routes.PROFILESCREENS}
        component={bottom.PROFILESCREENS}
        options={{tabBarLabel: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
