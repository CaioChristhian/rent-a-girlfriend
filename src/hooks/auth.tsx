import React, {
  createContext,
  useState,
  useContext
} from 'react';

import { api } from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
  cpf: string;
  avatar: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredencials) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({ email, password }: SignInCredencials) {
    const response = await api.post('/sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;
    
    setData({ token, user });
  }

  return (
    <AuthContext.Provider 
      value={{
        user: data.user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }
