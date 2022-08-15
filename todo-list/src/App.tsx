import { AppBox, Container, Form, TodoListWrapper } from 'AppStyle';
import { Button, Input, TodoItem } from 'components';
import { FormEvent, useCallback, useRef, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const inputValue = inputRef.current?.value;

      if (!inputValue) return;

      setTodoList((prev) => {
        if (prev.includes(inputValue)) return prev;

        return [...prev, inputValue];
      });

      event.currentTarget.reset();
    },
    [setTodoList, inputRef],
  );

  const removeTodo = useCallback(
    (content: string) => {
      setTodoList((prev) => prev.filter((todoItem) => todoItem !== content));
    },
    [setTodoList],
  );

  return (
    <Container>
      <AppBox>
        <TodoListWrapper data-testid="todoList">
          {todoList.map((content) => (
            <TodoItem key={`todoItem-${content}`} onRemove={() => removeTodo(content)}>
              {content}
            </TodoItem>
          ))}
        </TodoListWrapper>
        <Form onSubmit={addTodo}>
          <Input ref={inputRef} placeholder="할 일을 입력하세요" />
          <Button>추가</Button>
        </Form>
      </AppBox>
    </Container>
  );
}

export default App;
