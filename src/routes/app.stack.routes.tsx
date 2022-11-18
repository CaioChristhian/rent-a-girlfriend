import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { WaifuDetails } from '../screens/WaifuDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyGirls } from '../screens/MyGirls';

import { PropsNavigationStack } from './models';

const { Navigator, Screen } = createNativeStackNavigator<PropsNavigationStack>();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='WaifuDetails'
        component={WaifuDetails}
      />
      <Screen 
        name='Scheduling'
        component={Scheduling}
      />
      <Screen 
        name='SchedulingDetails'
        component={SchedulingDetails}
      />
      <Screen 
        name='Confirmation'
        component={Confirmation}
      />
      <Screen 
        name='MyGirls'
        component={MyGirls}
      />
    </Navigator>
  )
}