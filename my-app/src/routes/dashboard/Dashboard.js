import React from 'react';
import Header from '../navigation/Header.js';
import './dashboard.css';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      {/* Add other elements here */}
    </div>
  );
};

export default Dashboard;
