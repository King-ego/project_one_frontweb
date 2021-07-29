import React from 'react';

import GlobalStyled from './iu/style/global';

import SingIn from './pages/SignIn';
// import SingUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';
import ToastsContainer from './iu/components/ToastsContainer';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SingIn />
      </AuthProvider>

      <ToastsContainer />

      <GlobalStyled />
    </>
  );
};

export default App;
