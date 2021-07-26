import React from 'react';
import { Container, Content, Background } from './styled';
import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

const SingIn = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt='Gobarbe' />
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder='Email' />

          <input type='password' placeholder='Senha' />

          <button type='submit'>Entrar</button>

          <a href='frango'>Esqueci minha senha</a>
        </form>

        <a href='frango'>
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SingIn;
