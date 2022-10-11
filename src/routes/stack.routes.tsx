import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { WaifuDetails } from '../screens/WaifuDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { PropsNavigationStack } from './models';

const { Navigator, Screen } = createNativeStackNavigator<PropsNavigationStack>();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
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
        name='SchedulingComplete'
        component={SchedulingComplete}
      />
    </Navigator>
  )
}