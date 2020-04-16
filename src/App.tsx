import React, { FunctionComponent } from 'react';
import './App.sass';
import Menu from './components/Menu/Menu';
import Panel from './components/Panel/Panel';
import Minefield from './components/Minefield/Minefield';

function App() {
  const minefieldProps = {
    cols: 15,
    rows: 15,
    mines: 10
  };

  return (
    <div className="App">
      <Menu />
      <div className="App-board">
        <Panel />
        <Minefield {...minefieldProps} />
      </div>
  </div>
  );
}

export default App;