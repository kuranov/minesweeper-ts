import React, { useState, useEffect } from 'react';
import Tile, {ITileProps} from '../Tile/Tile';
import './Minefield.sass';

interface IMinefieldProps {
  width: number;
  height: number;
  mines: number;
  flagsCount: number;
  startedAt: Date;
  onFlagsChanged: (flagsCount: number) => void;
  onMineRevealed: () => void;
  onAllMinesFlagged: () => void;
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

const Minefield = ({
  width, 
  height, 
  mines, 
  flagsCount, 
  startedAt, 
  onFlagsChanged,
  onMineRevealed,
  onAllMinesFlagged
 }: IMinefieldProps) => {
  const [tilesGrid, setTilesGrid] = useState<ITileData[][] | null>(null);

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

    setTilesGrid(tilesGrid);
  }, [width, height, mines, startedAt]);

  const handleTileClick = (x: number, y: number, flagAction: boolean) => {
    if (!tilesGrid || !tilesGrid[y] || !tilesGrid[y][x]) {
      return;
    }

    let cell = tilesGrid[y][x];
    if (!cell.isOpen && flagAction) {
      if (cell.isFlagged) {
        cell.isFlagged = false;
        onFlagsChanged(1);
      } else if (flagsCount > 0) {
        cell.isFlagged = true;
        onFlagsChanged(-1);

        if (isAllMinesFlagged()) {
          onAllMinesFlagged();
        }
      }
    } else if (!cell.isOpen && !cell.isFlagged) {
      cell.isOpen = true;
      if (cell.isMine) {
        onMineRevealed();
      } else if (cell.minesAround === 0) {
        openEmptyNeighbours(x, y);
      }
    }
    setTilesGrid([...tilesGrid]);
  };

  const isAllMinesFlagged = (): boolean => {
    let flaggedMines = 0;
    tilesGrid && tilesGrid.forEach((row) => row.forEach((cell: ITileData) => {
      if (cell.isMine && cell.isFlagged) {
        flaggedMines++;
      }
    }));
    return flaggedMines === mines;
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
    return tilesGrid.map((row, i) => 
      <div key={i}>
        {row.map((props) => 
          <Tile key={props.x + '-' + props.y} {...props} onClick={handleTileClick} />
        )}
      </div>
    );
  };

  return (
    <div key="Minefield" className="Minefield">{renderTilesGrid()}</div>
  );
}

export default Minefield;