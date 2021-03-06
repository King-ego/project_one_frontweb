import React, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styled';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import LogoImg from '../../assets/logo.svg';

import Input from '../../iu/components/Input';
import Button from '../../iu/components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/Auth';
import { useToasts } from '../../hooks/Toasts';

interface SignInFormData {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const { addToasts } = useToasts();
  // console.log(user);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        FormRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email é obrigatório')
            .email('Digite um email válido'),

          password: Yup.string().required('Senha é obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErrors(err);

          FormRef.current?.setErrors(erros);
        }

        addToasts({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToasts]
  );
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt='Gobarbe' />
        <Form ref={FormRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name='email' icon={FiMail} placeholder='Email' />

          <Input
            name='password'
            icon={FiLock}
            type='password'
            placeholder='Senha'
          />

          <Button type='submit'>Entrar</Button>

          <a href='frango'>Esqueci minha senha</a>
        </Form>

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
