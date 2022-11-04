import React from 'react';

import { AuthProvider } from './auth';

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export { AppProvider };