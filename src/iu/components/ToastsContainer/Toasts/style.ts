import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'sucess' | 'error' | 'info';
  hasDescription: boolean;
}

const toastsTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  sucess: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastsTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;

      opacity: 0.8;
      line-height: 20px;
    }

    button {
      background: transparent;
      border: 0;
      color: inherit;
      position: absolute;
      top: 19px;
      right: 16px;
    }
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
