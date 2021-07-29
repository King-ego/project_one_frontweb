import React from 'react';

import { Container } from './style';

import { ToastsMessages } from '../../../hooks/Toasts';

import Toasts from './Toasts';

interface ToastsMessagensProps {
  messages: ToastsMessages[];
}

const ToastsContainer: React.FC<ToastsMessagensProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toasts key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastsContainer;
