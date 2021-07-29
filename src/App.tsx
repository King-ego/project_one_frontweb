import React from 'react';

import GlobalStyled from './iu/style/global';

import SingIn from './pages/SignIn';
// import SingUp from './pages/SignUp';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SingIn />
      </AppProvider>

      <GlobalStyled />
    </>
  );
};

export default App;
