import React from 'react';
import './App.css';
import GlobalStyle from './globalStyle';
import Routes from './pages/Home';
import Slider from './pages/Slider';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div style={{display: 'flex'}}>
        <Slider />
        <Routes />
      </div>
    </div>
  );
}

export default App;
