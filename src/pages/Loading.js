import React from 'react';

function Loading() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border spinner-border-xl" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h1>Loading ...</h1>
    </div>
  );
}

export default Loading;
