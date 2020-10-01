import React from 'react';
// import './App.css';
import ButtonAppBar from './navbar.js';
import Game from './tictactoe/tictactoe.js'

function App() {
  return (
    <div className="App">
      {ButtonAppBar()}
      <Game />
    </div>
  );
}

export default App;
