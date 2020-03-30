import React from 'react';
import logo from './assets/logotype.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width="300" />
        <p>
          Multimodal Mobile App for Exploring Fitness Data using Speech + Touch Interaction
        </p>
      </header>
    </div>
  );
}

export default App;
