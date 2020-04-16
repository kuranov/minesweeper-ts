import React from 'react';

function Menu() {
  const rowsField = (
    <input placeholder="test" />
  );

  return (
    <div className="Menu">
      <input placeholder="rows" />
      <input placeholder="cols" />
      <input placeholder="mines" />
      <input type="button" value="Start new game" />
    </div>
  );
}

export default Menu;
