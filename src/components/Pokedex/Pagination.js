import React from 'react';

function Pagination({ nextPageURL, prevPageURL, setCurrentPage }) {
  const backButtonHandler = () => {
    return setCurrentPage(prevPageURL)
  }

  const nextButtonHandler = () => {
    return setCurrentPage(nextPageURL)
  }

  return (
    <div className="d-flex mt-2">
      <div className="col d-flex justify-content-start">
        <button className={`btn btn-dark ${prevPageURL == null ? 'visually-hidden' : ''}`} onClick={backButtonHandler}>Back</button>
      </div>
      <div className="col d-flex justify-content-end">
        <button className={`btn btn-dark ${nextPageURL == null ? 'visually-hidden' : ''}`} onClick={nextButtonHandler}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
