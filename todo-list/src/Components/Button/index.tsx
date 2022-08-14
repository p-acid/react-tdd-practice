import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Button = ({ children, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

const Container = styled.button`
  padding: 12px;
  border: none;
  border-radius: 12px;
  color: #2d2d2d;
  background-color: #dbdbdb;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-1px);
    background-color: #c5c5c5;
  }

  &:active {
    transform: translateY(0px);
    background-color: #b4b4b4;
  }
`;
