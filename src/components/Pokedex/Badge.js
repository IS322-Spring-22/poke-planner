import React, {useState} from 'react';
import './Badge.css';

function Badge({ name }) {

  return (
    <span className={`badge ${name} text-capitalize`}>
      {name}
    </span>
  );
}

export default Badge;
