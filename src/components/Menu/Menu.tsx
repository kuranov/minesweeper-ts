import React, { useState } from 'react';
import './Menu.sass'

interface IMenuProps {
  onGameStarted: (width: number, height: number, mines: number) => void;
  
  // Shows menu with message if type is 'string', 
  // if 'true' — just show menu,
  // if 'false' — hide menu
  display: string | boolean; 
}

const Menu = ({onGameStarted, display}: IMenuProps) => {
  const [width, setWidthValue] = useState(10);
  const [height, setHeightValue] = useState(10);
  const [mines, setMinesValue] = useState(4);
  
  let menuMessage;
  if (typeof display === 'string') {
    menuMessage = <div className="Menu-message">
      {display}
    </div>;
  }
  
  return (
    <div className="Menu" style={{display: display !== false ? 'flex' : 'none'}}>
      <div className="Menu-panel">
       {menuMessage}
        <div className="Menu-field">
          <label htmlFor="width">Width</label>
          <input id="width" placeholder="" value={width} 
            onChange={(e) => { setWidthValue(parseInt(e.target.value, 10))}}  />
        </div>

        <div className="Menu-field">
          <label htmlFor="height">Height</label>
          <input id="height" placeholder="" value={height} 
            onChange={(e) => { setHeightValue(parseInt(e.target.value, 10))}} />
        </div>

        <div className="Menu-field">
          <label htmlFor="mines">Mines</label>
          <input id="mines" placeholder="" value={mines} 
            onChange={(e) => { setMinesValue(parseInt(e.target.value, 10))}} />
        </div>

        <div className="Menu-field">
          <div className="Menu-btn" onClick={() => onGameStarted(width, height, mines)}>New game</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
