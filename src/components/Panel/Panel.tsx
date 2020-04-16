import React from 'react';
import './Panel.sass';

function Panel() {
  const flags = 21;
  return (
    <div className="Panel">
      <div className="Panel-menu-btn">Game Menu</div>
      <div className="Panel-flags">{flags} ⚑ </div>
    </div>
  );
}

export default Panel;