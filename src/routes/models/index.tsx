import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GirlDTO } from '../../dtos/GirlDTO';
import { UserDTO } from '../../dtos/UserDTO';

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
    girl: GirlDTO;
  }
  SchedulingDetails: {
    name: string;
    girl: GirlDTO;
    dates: {}
  }
  SchedulingComplete: {
    name: string;
  }
  MyGirls: {
    name: string;
  }
  SignIn: {
    name: string;
  }
  SignUpFirstStep: {
    name: string;
  }
  SignUpSecondStep: {
    name: string;
    user: UserDTO;
  }
  Confirmation?: {
    title?: string;
    message?: string;
    nextScreenRoute?: string;
  }
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>