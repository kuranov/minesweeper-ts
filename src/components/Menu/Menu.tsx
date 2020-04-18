import React, { useState, FunctionComponent } from 'react';
import './Menu.sass'

interface IMenuProps {
  onGameStarted: (width: number, height: number, mines: number) => void;
  
  // Shows menu with message if type is 'string', 
  // if 'true' — just show menu,
  // if 'false' — hide menu
  display: string | boolean; 
}

const Menu: FunctionComponent<IMenuProps> = ({onGameStarted, display}: IMenuProps) => {
  const [width, setWidthValue] = useState(10);
  const [height, setHeightValue] = useState(10);
  const [mines, setMinesValue] = useState(4);
  
  let menuMessage = typeof display === 'string' ? <div className="Menu-message">{display}</div> : null;

  return (
    <div className="Menu" style={{display: display !== false ? 'flex' : 'none'}}>
      <div className="Menu-panel">
       {menuMessage}
        <div className="Menu-field">
          <label htmlFor="width">Width</label>
          <input id="width" type="number" min="1" max="300" placeholder="" value={width} 
            onChange={(e) => { setWidthValue(parseInt(e.target.value || '0', 10))}}  />
        </div>

        <div className="Menu-field">
          <label htmlFor="height">Height</label>
          <input id="height" type="number" min="1" max="300"  value={height} 
            onChange={(e) => { setHeightValue(parseInt(e.target.value || '0', 10))}} />
        </div>

        <div className="Menu-field">
          <label htmlFor="mines">Mines</label>
          <input id="mines" type="number" min="1" max="9000"  placeholder="" value={mines} 
            onChange={(e) => { setMinesValue(parseInt(e.target.value || '0', 10))}} />
        </div>

        <div className="Menu-field">
          <div className="Menu-btn" onClick={() => onGameStarted(width, height, mines)}>New game</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
