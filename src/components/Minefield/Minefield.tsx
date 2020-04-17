import React, { useState, useEffect } from 'react';
import Tile, {ITileProps} from '../Tile/Tile';
import './Minefield.sass';

interface IMinefieldProps {
  width: number;
  height: number;
  mines: number;
  // onWin: Function;
}

interface ITileData {
  x: number;
  y: number;
  isMine: boolean;
  isOpen: boolean;
  isFlagged: boolean;
  minesAround: number;
}

interface IMinesMap {
  [key: string]: boolean;
}

const Minefield = ({width, height, mines}: IMinefieldProps) => {
  const [tilesGrid, setTilesGrid] = useState<ITileData[][] | null>(null);
  const [flagsCount, setFlagsCount] = useState<number>(0); 

  console.log('tilesGrid', tilesGrid);

  useEffect(() => {     
    const plantedMines = plantMines(width, height, mines);
    const tilesGrid = generateTilesGrid(width, height, (x, y) => {
      return {
        x, 
        y, 
        minesAround: findMinesAround(plantedMines, x, y),
        isMine: isMine(plantedMines, x, y),
        isFlagged: false,
        isOpen: false
      };
    });

    setFlagsCount(mines);
    setTilesGrid(tilesGrid);
  }, [width, height, mines]);

  const tileClickHandler = (x: number, y: number, flagAction: boolean) => {
    debugger;
    console.log('Click', x, y, flagAction);
    if (!tilesGrid) {
      return;
    }
    let cell = tilesGrid[y][x];
    console.log('cell', cell);

    if (!cell.isOpen && flagAction) {
      if (cell.isFlagged) {
        cell.isFlagged = false;
        setFlagsCount(flagsCount => flagsCount + 1);
      } else {
        cell.isFlagged = true;
        setFlagsCount(flagsCount => flagsCount - 1);
      }
    } 
    if (!cell.isOpen) {
      cell.isOpen = true;
      if (cell.isMine) {
        alert('BOOM');
      } else if (cell.minesAround === 0) {
        openEmptyNeighbours(x, y);
      }
    }
    setTilesGrid(tilesGrid);
  };

  const isWin = () => {
    // let cont
  };

  const openEmptyNeighbours = (x: number, y: number): ITileData[][] | null => {
    for(let i = -1; i <= 1; i++) {
      for(let j = -1; j <= 1; j++) {
          if (j === 0 && i === 0) {
              continue;
          }
          let checkX = x + i, checkY = y + j;
          if (tilesGrid && tilesGrid[checkY] && tilesGrid[checkY][checkX]) {
            let cell = tilesGrid[checkY][checkX];
            if (!cell.isOpen && cell.minesAround === 0) {
              cell.isOpen = true;
              openEmptyNeighbours(checkX, checkY);
            }
          }
      }
    }
    return tilesGrid;
  };

  const isMine = (mines: IMinesMap, x: number, y: number): boolean => {
    return !!mines[x + '-' + y];
  };

  const findMinesAround = (minesMap: IMinesMap, x: number, y: number): number => {
    let bombsAround = 0;
    for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
            if (j === 0 && i === 0) {
                continue;
            }
            if (isMine(minesMap, (x + i), (y + j))) {
                bombsAround++;
            }
        }
    }
    return bombsAround;
  };

  const generateTilesGrid = (width: number, height: number, cb: (x: number, y: number) => ITileData): ITileData[][] => {
    const rows = [];
    for (let i = 0; i < height; i++) {
      const cells = [];
      for (let j = 0; j < width; j++) {
        cells.push(cb(j, i));
      }
      rows.push(cells);
    }
    return rows;
  };

  const plantMines = (width: number, height: number, minesAmount: number): {[key: string]: boolean} => {
    const randTo = (to: number): number => Math.round(Math.random() * to);
    const mines: any = {};
    while(minesAmount > 0) {
      let x = randTo(width), y = randTo(height);
      if (!isMine(mines, x, y)) {
        mines[x+'-'+y] = true;
        minesAmount--;
      }
    }
    return mines;
  };

  const renderTilesGrid = () => {
    if (tilesGrid === null ){
      return null;
    }
    return tilesGrid.map((row, i) => <div key={i}>{row.map((props) => <Tile key={props.x + '-' + props.y} {...props} onClick={tileClickHandler} />)}</div>);
  };

  return (
    <div key="Minefield" className="Minefield">{renderTilesGrid()}</div>
  );
}

export default Minefield;