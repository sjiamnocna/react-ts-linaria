import React from 'react';
import { styled } from '@linaria/react';
import logo from './logo.svg';
import './App.css';

const Container = styled.div`
  width:75vw;
  margin: 0px auto;
  background: lightgreen;
`;

const App = () => {
  return (
    <Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Container>
  );
}

export default App;
