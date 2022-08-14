import logo from './logo.svg';
import { AppLink, AppLogo, Container, Header } from 'AppStyle';

function App() {
  return (
    <Container>
      <Header>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </AppLink>
      </Header>
    </Container>
  );
}

export default App;
