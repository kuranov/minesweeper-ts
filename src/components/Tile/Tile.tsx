import React from 'react';
import './Tile.sass';

export interface ITileProps {
  x: number;
  y: number;
  isMine: boolean;
  isOpen: boolean;
  isFlagged: boolean;
  minesAround: number;
  onClick: (x: number, y: number, isFlag: boolean) => void;
}

const Tile = ({x, y, isMine, isOpen, isFlagged, minesAround, onClick}: ITileProps) => {
  const classNames = ['Tile'];
  let label = '';  
  if (isOpen && isMine) {
    label = '💣';
  } else if (isOpen && !isMine) {
    label = minesAround + '';
  } else if (!isOpen && isFlagged) {
    label = '⚑';
    classNames.push('Tile--flagged');
  }

  if (isOpen) {
    classNames.push('Tile--is-open');
  }

  return (
    <div className={classNames.join(' ')} onClick={(e) => {onClick(x, y, e.shiftKey); }}>
      <div className="Tile-content">{label}</div>
    </div>
  );
};

export default Tile;