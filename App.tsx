import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import ThemeProvider from 'ophelia/theme/store/ThemeProvider';
import GameProvider from 'store/GameProvider';
import Routes from 'routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider>
      <GameProvider>
        <Routes />
      </GameProvider>
    </ThemeProvider>
  );
}
