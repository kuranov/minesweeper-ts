import React from 'react';
import './Panel.sass';

interface IPanelProps {
  flagsCount: number;
  onMenuButtonClick: () => void;
}

function Panel({flagsCount, onMenuButtonClick}: IPanelProps) {
  return (
    <div className="Panel">
      <div className="Panel-menu-btn" onClick={onMenuButtonClick}>New game</div>
      <div className="Panel-flags">{flagsCount} ⚑ </div>
    </div>
  );
}

export default Panel;