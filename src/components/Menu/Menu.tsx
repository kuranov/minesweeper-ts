import React, { useState } from 'react';
import './Menu.sass'

interface IMenuProps {
  onGameStart: Function;
}

const Menu = ({onGameStart}: IMenuProps) => {
  const [width, setWidthValue] = useState(10);
  const [height, setHeightValue] = useState(10);
  const [mines, setMinesValue] = useState(4);

  return (
    <div className="Menu">
      <div className="Menu-panel">
        
        <div className="Menu-field">
          <label htmlFor="width">Width</label>
          <input id="width" placeholder="" value={width} onChange={(e) => { setWidthValue(parseInt(e.target.value, 10))}}  />
        </div>

        <div className="Menu-field">
          <label htmlFor="height">Height</label>
          <input id="height" placeholder="" value={height} onChange={(e) => { setHeightValue(parseInt(e.target.value, 10))}} />
        </div>

        <div className="Menu-field">
          <label htmlFor="mines">Mines</label>
          <input id="mines" placeholder="" value={mines} onChange={(e) => { setMinesValue(parseInt(e.target.value, 10))}} />
        </div>

        <div className="Menu-field">
          <div className="Menu-btn" onClick={() => onGameStart(width, height, mines)}>New game</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
