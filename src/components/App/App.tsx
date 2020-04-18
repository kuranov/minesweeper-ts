import React, { useState, FunctionComponent } from 'react';
import './App.sass';
import Menu from '../Menu/Menu';
import Panel from '../Panel/Panel';
import Minefield from '../Minefield/Minefield';

const App: FunctionComponent = () => {
  const [width, setWidthValue] = useState<number>(0);
  const [height, setHeightValue] = useState<number>(0);
  const [mines, setMinesValue] = useState<number>(0);
  const [flagsCount, setFlagsCount] = useState<number>(0);
  const [startedAt, setStartedAt] = useState<Date>(new Date());
  const [displayMenu, setDisplayMenu] = useState<boolean|string>(true);

  const handleGameStart = (width: number, height: number, mines: number) => {
    if (mines > width * height) {
      mines = width * height;
    }
    setWidthValue(width);
    setHeightValue(height);
    setMinesValue(mines);
    setFlagsCount(mines);
    setStartedAt(new Date());
    setDisplayMenu(false);
  };

  const handleMineReveal = () => {
    setDisplayMenu('💥You blown up!');
  };
  
  const handleAllMinesFlagged = () => {
    setDisplayMenu('🏆 You win!');
  };
  
  const handleMenuButtonClick = () => {
    setDisplayMenu(true);
  };

  const handleFlagsChange = (k: number) => {
    const changedValue = (flagsCount + k);
    if (changedValue < 0) {
      return alert('No flags available');
    }
    setFlagsCount(flagsCount => changedValue >= 0 ? changedValue : 0);
  };

  return (
    <div className="App">
      <Menu onGameStarted={handleGameStart} display={displayMenu} />

      <div className="App-board">
        <Panel onMenuButtonClick={handleMenuButtonClick} 
          flagsCount={flagsCount} />

        <Minefield width={width} height={height} mines={mines} 
          startedAt={startedAt} 
          onFlagsChanged={handleFlagsChange} 
          onMineRevealed={handleMineReveal}
          onAllMinesFlagged={handleAllMinesFlagged} />
      </div>
  </div>
  );
}

export default App;