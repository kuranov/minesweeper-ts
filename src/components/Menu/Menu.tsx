import React from 'react';
import './Menu.sass'

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-panel">
        <div className="Menu-field">
          <label htmlFor="width">Width</label>
          <input id="width" placeholder="width" value="20" />
        </div>
        <div className="Menu-field">
          <label htmlFor="height">Height</label>
          <input id="height" placeholder="height" value="20" />
        </div>
        <div className="Menu-field">
          <label htmlFor="mines">Mines</label>
          <input id="mines" placeholder="mines" value="20" />
        </div>
        <div className="Menu-field">
          <div className="Menu-btn">New game</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
