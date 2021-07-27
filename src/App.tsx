import React from 'react';
import GlobalStyled from './iu/style/global';
//import SignIn from './pages/SignIn';
import SingUp from './pages/SignUp';
const App: React.FC = () => {
  return (
    <>
      <SingUp />
      <GlobalStyled />
    </>
  );
};

export default App;
