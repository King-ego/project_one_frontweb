import React from 'react';

import GlobalStyled from './iu/style/global';

import SingIn from './pages/SignIn';
// import SingUp from './pages/SignUp';
import { AuthProvider } from './Context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SingIn />
      </AuthProvider>
      <GlobalStyled />
    </>
  );
};

export default App;
