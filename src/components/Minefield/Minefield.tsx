import React, { useState, useEffect } from 'react';
import Tile, {ITileProps} from '../Tile/Tile';
import './Minefield.sass';

interface IMinefieldProps {
  width: number;
  height: number;
  mines: number;
  // onWin: Function;
}

interface IMinesMap {
  [key: string]: boolean;
}

const Minefield = ({width, height, mines}: IMinefieldProps) => {
  const [tilesGrid, setTilesGrid] = useState<ITileProps[][] | null>(null);
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
        isOpen: false,
        onClick: (x, y) => tileClickHanlder(x, y)
      };
    });
    setFlagsCount(mines);
    setTilesGrid(tilesGrid);
  }, [width, height, mines]);

  const tileClickHanlder = (x: number, y: number) => {
    if (tilesGrid?.length) {
      tilesGrid[0][0].isOpen = true;
    }
  };

  const isMine = (mines: IMinesMap, x: number, y: number): boolean => {
    return !!mines[x + '-'+y];
  };

  const findMinesAround = (minesMap: IMinesMap, x: number, y: number): number => {
    let bombsAround = 0;
    for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
            if (j === 0 && i === 0) {
                continue;
            }
            if (isMine(minesMap, (x + i), (y + j)) === true) {
                bombsAround++;
            }
        }
    }
    return bombsAround;
  };

  const generateTilesGrid = (width: number, height: number, cb: (x: number, y: number) => ITileProps): ITileProps[][] => {
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

  const renderTilesGrid = (grid: ITileProps[][] | null) => {
    if (grid === null ){
      return null;
    }
    return grid.map((row) => <div>{row.map((props) => <Tile {...props} />)}</div>);
  };

  return (
    <div className="Minefield">{renderTilesGrid(tilesGrid)}</div>
  );
}

export default Minefield;