import { ButtonHTMLAttributes, memo } from 'react';
import styled from 'styled-components';

export const Button = memo(
  ({ children, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <Container {...restProps}>{children}</Container>;
  },
);

const Container = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  color: #dfdfdf;
  background-color: #111111;
  cursor: pointer;
  word-break: keep-all;
  transition: 0.3s;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`;
