import React from 'react';

import { AuthProvider } from './Auth';
import { ToastsProvider } from './Toasts';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastsProvider>{children}</ToastsProvider>
  </AuthProvider>
);

export default AppProvider;
