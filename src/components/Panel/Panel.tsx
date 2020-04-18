import React, { FunctionComponent } from 'react';
import './Panel.sass';

interface IPanelProps {
  flagsCount: number;
  onMenuButtonClick: () => void;
}

const Panel: FunctionComponent<IPanelProps> = ({flagsCount, onMenuButtonClick}: IPanelProps) => {
  return (
    <div className="Panel">
      <div className="Panel-menu-btn" onClick={onMenuButtonClick}>New game</div>
      <div className="Panel-flags">{flagsCount} ⚑ </div>
    </div>
  );
}

export default Panel;