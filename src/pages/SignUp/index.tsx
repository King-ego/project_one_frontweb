import React, { useRef, useCallback } from 'react';
import { Container, Content, Background } from './styled';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import LogoImg from '../../assets/logo.svg';

import Input from '../../iu/components/Input';
import Button from '../../iu/components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

const SingUp = () => {
  const FormRef = useRef<FormHandles>(null);
  console.log(FormRef);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      FormRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),

        email: Yup.string()
          .required('Email é obrigatório')
          .email('Digite um email válido'),

        password: Yup.string().min(6, 'Minimo de 6 digitos'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const erros = getValidationErrors(err);

      FormRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt='Gobarbe' />
        <Form ref={FormRef} onSubmit={handleSubmit}>
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
        </Form>

        <a href='frango'>
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SingUp;
