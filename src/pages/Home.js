import React from 'react';

function Home({ setCurrentPage }) {
  setCurrentPage("Home");

  return (
    <div>
      <h1 className={`text-center`}>Home Page!</h1>
    </div>
  );
}

export default Home;
