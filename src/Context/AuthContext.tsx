import React, { createContext, useCallback } from 'react';

import api from '../services/apiClients';

interface SignInCredebtials {
  email: string;
  password: string;
}

interface AuthContextProps {
  name: string;
  signIn(credentials:SignInCredebtials): Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    console.log(response);
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Diego', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
