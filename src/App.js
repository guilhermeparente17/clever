import React from 'react';
import './App.css';
import GlobalStyle from './globalStyle';
import Home from './pages/Home';
import Slider from './pages/Slider';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div style={{display: 'flex'}}>
        <Slider />
        <Home />
      </div>
    </div>
  );
}

export default App;
