import React from 'react';
import './Panel.sass';

interface IPanelProps {
  flagsCount: number;
}

function Panel({flagsCount}: IPanelProps) {
  return (
    <div className="Panel">
      <div className="Panel-menu-btn">Game Menu</div>
      <div className="Panel-flags">{flagsCount} ⚑ </div>
    </div>
  );
}

export default Panel;