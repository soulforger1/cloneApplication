import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Community, Home1, Mirror} from '../screens';
import {BottomTabBar1} from '../components/bottomBar1';

const Tab = createBottomTabNavigator();

export const Project1 = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar1 {...props} />}>
      <Tab.Screen name="home" component={Home1} />
      <Tab.Screen name="community" component={Community} />
      <Tab.Screen name="mirror" component={Mirror} />
    </Tab.Navigator>
  );
};
