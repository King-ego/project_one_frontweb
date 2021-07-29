import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toasts } from './style';

const ToastsContainer: React.FC = () => {
  return (
    <Container>
      <Toasts hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>

          <p>Não foi possivel fazer login na aplicação</p>

          <button type='button'>
            <FiXCircle size={18} />
          </button>
        </div>
      </Toasts>

      <Toasts type='sucess' hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>

          {/* <p>Não foi possivel fazer login na aplicação</p> */}

          <button type='button'>
            <FiXCircle size={18} />
          </button>
        </div>
      </Toasts>

      <Toasts type='error' hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>

          <p>Não foi possivel fazer login na aplicação</p>

          <button type='button'>
            <FiXCircle size={18} />
          </button>
        </div>
      </Toasts>
    </Container>
  );
};

export default ToastsContainer;
