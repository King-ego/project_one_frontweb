import React from 'react';
import { Container, Content, Background } from './styled';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import Input from '../../iu/components/Input';
import Button from '../../iu/components/Button';

const SingIn = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt='Gobarbe' />
        <form>
          <h1>Faça seu logon</h1>

          <Input name='Email' icon={FiMail} placeholder='Email' />

          <Input name='Password' icon={FiLock} type='password' placeholder='Senha' />

          <Button type='submit'>Entrar</Button>

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
