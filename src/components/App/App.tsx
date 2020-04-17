import React, { useState } from 'react';
import './App.sass';
import Menu from '../Menu/Menu';
import Panel from '../Panel/Panel';
import Minefield from '../Minefield/Minefield';

const App = () => {
  const [width, setWidthValue] = useState(0);
  const [height, setHeightValue] = useState(0);
  const [mines, setMinesValue] = useState(0);
  const [flagsCount, setFlagsCount] = useState(0);

  const onGameStart = (width: number, height: number, mines: number) => {
    setWidthValue(width);
    setHeightValue(height);
    setMinesValue(mines);
    console.log('App.onGameStart');
  };

  const handleOnChange = (flagsCount: number) => {
    setFlagsCount(flagsCount);
  };

  return (
    <div className="App">
      <Menu {...{onGameStart}}/>
      <div className="App-board">
        <Panel flagsCount={flagsCount} />
        <Minefield onChange={handleOnChange}  width={width} height={height} mines={mines} />
      </div>
  </div>
  );
}

export default App;