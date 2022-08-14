import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  border: 1px solid #dadada;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;
`;

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
`;
