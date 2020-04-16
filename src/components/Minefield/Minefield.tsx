import React from 'react';
import './Minefield.sass';

interface MinefieldProps {
  cols: number;
  rows: number;
  mines: number;
}

function Minefield({cols, rows, mines}: MinefieldProps) {
  return (
    <div className="Minefield">{cols} — {rows} — {mines}</div>
  );
}

export default Minefield;