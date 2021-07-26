import React from 'react';
import GlobalStyled from './iu/style/global';
import SingIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <SingIn />
      <GlobalStyled />
    </>
  );
};

export default App;
