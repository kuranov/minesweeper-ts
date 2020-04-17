import React from 'react';
import './Tile.sass';

export interface ITileProps {
  x: number;
  y: number;
  isMine: boolean;
  isOpen: boolean;
  isFlagged: boolean;
  minesAround: number;
  onClick: (x: number, y: number) => void;
}

const Tile = ({x, y, isMine, isOpen, isFlagged, minesAround, onClick}: ITileProps) => {
  let label = '';  
  if (isOpen && isMine) {
    label = '💣';
  } else if (isOpen && !isMine) {
    label = minesAround + '';
  } else if (!isOpen && isFlagged) {
    label = '⚑';
  }

  return (
    <div className="Tile" onClick={() => onClick(x, y)}>
      <div className="Tile-content">{label}</div>
    </div>
  );
};

export default Tile;