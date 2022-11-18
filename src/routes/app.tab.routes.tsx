import React from 'react';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeSvg from '../assets/home.svg';
import GirlSvg from '../assets/girl.svg';
import UserSvg from '../assets/perfil.svg';

import { Home } from '../screens/Home';
import { MyGirls } from '../screens/MyGirls';
import { AppStackRoutes } from './app.stack.routes';

import { PropsNavigationStack } from './models';


const { Navigator, Screen } = createBottomTabNavigator<PropsNavigationStack>();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 70,
          backgroundColor: theme.colors.background_primary
        }
      }}
      
    >
      <Screen 
        name='Home'
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          )
        }}
      />
     
      <Screen 
        name='MyGirls'
        component={MyGirls}
        options={{
          tabBarIcon: ({ color }) => (
            <GirlSvg width={28} height={28} fill={color} />
          )
        }}
      />

      <Screen 
        name='Profile'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <UserSvg width={24} height={24} fill={color} />
          )
        }}
      />
    </Navigator>
  )
}