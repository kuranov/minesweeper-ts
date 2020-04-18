## Minesweeper: ReactJS\<TypeScript>
Implementation of classic computer game using `ReactJS`, `TypeScript` and `SASS`

## Game Elements
On the game screen player see:

* *Panel* — on top of the screen, contains information about available flags amount and start menu button
* *Menu* — form with main game parameters and start button
* *Minefield* — main game area with tiles
* *Tile* — closed by default area, needed to reveal by user

## Features
Board is configurable width, height and mines number.
The board supports dimentions up 300x300.

Game displays an indication of the number of remaining flags above the board.

Click on cell reveals the value underneath it:
* If it is a mine, you lose;

* Otherwise, display the number of mines around the cell (or empty if there are no mines around);

* If there are no mines around the cell, reveal all cells around it and and all cells around any adjacent empty cell.

Shift button + Left Mouse Click puts or removes a flag on that cell. (and updates the number of remaining flags)

Display alert if player tries to add a flag but he does not have any remaining flags.

A flagged cell cannot be revealed (click does nothing) until the flag is removed.

If all mines are flagged correctly, you win.

## Run locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).