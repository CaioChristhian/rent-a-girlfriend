import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import { Home } from './src/screens/Home';
import { WaifuDetails } from './src/screens/WaifuDetails';
import { Scheduling } from './src/screens/Scheduling';
import { SchedulingDetails } from './src/screens/SchedulingDetails';
import { SchedulingComplete } from './src/screens/SchedulingComplete';
import { ThemeProvider } from 'styled-components';

import AppLoading from 'expo-app-loading';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if(!fontsLoaded) {
   return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SchedulingComplete />
    </ThemeProvider>
  );
}
