import { memo, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

import { Button } from 'components/Button';

interface TodoItemProps {
  children: ReactNode;
  onRemove: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const TodoItem = memo(({ children, onRemove }: TodoItemProps) => {
  return (
    <TodoItemBox>
      <TodoItemText>{children}</TodoItemText>
      <Button onClick={onRemove}>삭제</Button>
    </TodoItemBox>
  );
});

const TodoItemBox = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  width: 100%;
  border-bottom: 1px solid #ececec;

  &:last-of-type {
    border: none;
  }
`;

const TodoItemText = styled.span`
  width: 100%;
  color: #464646;
`;
