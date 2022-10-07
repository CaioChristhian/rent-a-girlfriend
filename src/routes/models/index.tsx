import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PropsNavigationStack = {
  Home: {
    name: string;
  }
  WaifuDetails: {
    name: string;
  }
  Scheduling: {
    name: string;
  }
  SchedulingDetails: {
    name: string;
  }
  SchedulingComplete: {
    name: string;
  }
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>