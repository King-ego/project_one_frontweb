import React from 'react';
import { Container, Content, Background } from './styled';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import Input from '../../iu/components/Input';
import Button from '../../iu/components/Button';

const SingUp = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt='Gobarbe' />
        <form>
          <h1>Faça seu Cadastro</h1>

          <Input name='name' icon={FiUser} placeholder='Nome' />

          <Input name='email' icon={FiMail} placeholder='Email' />

          <Input
            name='password'
            icon={FiLock}
            type='password'
            placeholder='Senha'
          />

          <Button type='submit'>Cadastrar</Button>
        </form>

        <a href='frango'>
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SingUp;
