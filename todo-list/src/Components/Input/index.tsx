import { ForwardedRef, forwardRef, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components';

export const Input = memo(
  forwardRef(
    (props: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
      return <Container ref={ref} {...props} />;
    },
  ),
);

const Container = styled.input`
  padding: 12px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  color: #131313;
  background-color: #ffffff;
  outline: none;
  transition: 0.3s;

  &:focus {
    box-shadow: 1px black;
  }
`;
