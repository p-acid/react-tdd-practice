import { Container, Header } from 'AppStyle';
import { Button } from 'Components';
import { useCallback } from 'react';

function App() {
  const addTask = useCallback(() => {
    alert('add!');
  }, []);

  return (
    <Container>
      <Header>
        <Button onClick={addTask}>추가</Button>
      </Header>
    </Container>
  );
}

export default App;
