import React from 'react';

function Pokedex({ setCurrentPage }) {
  setCurrentPage("Pokedex");

  return (
    <div>
      <h1 className="text-center">Pokedex Page</h1>
    </div>
  );
}

export default Pokedex;
