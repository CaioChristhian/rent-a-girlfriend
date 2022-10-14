import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GirlDTO } from '../../dtos/GirlDTO';

export type PropsNavigationStack = {
  Home: {
    name: string;
  }
  WaifuDetails: {
    name: string;
    girl: GirlDTO;
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