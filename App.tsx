/* eslint-disable no-trailing-spaces */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator/Navigator';
import { ThemeProvider } from 'react-native-elements';
import { PermissionsProvider } from './src/context/PermissionsContext';

const AppState = ({children}:any) => {
  
  return (
  <PermissionsProvider>
    {children}
  </PermissionsProvider>
);
};

export const App = () => {
  return (
    <NavigationContainer>
     
      <AppState>
      <ThemeProvider>
      <Navigator />
      </ThemeProvider>
      </AppState>
    </NavigationContainer>
  )
}
export default App;
