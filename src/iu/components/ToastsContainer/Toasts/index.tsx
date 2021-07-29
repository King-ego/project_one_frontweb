import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';
import { ToastsMessages, useToasts } from '../../../../hooks/Toasts';

import { Container } from './style';

interface ToastsProps {
  message: ToastsMessages;
}

const info = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  sucess: <FiCheckCircle size={24} />,
};

const Toasts: React.FC<ToastsProps> = ({ message }) => {
  const { removeToasts } = useToasts();

  useEffect(() => {
    const time = setTimeout(() => {
      removeToasts(message.id);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [message.id, removeToasts]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {info[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>

        {message.description && <p>{message.description}</p>}

        <button onClick={() => removeToasts(message.id)} type='button'>
          <FiXCircle size={18} />
        </button>
      </div>
    </Container>
  );
};

export default Toasts;
