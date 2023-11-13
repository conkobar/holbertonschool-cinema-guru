import React from 'react';
import './components.css';

const Activity = ({activity}) => {
  return (
    <li className="activity">
      <p>{`Activity: ${activity}`}</p>
      <button className="delete-activity">X</button>
    </li>
  );
}

export default Activity;
