import React from 'react';
import Header from '../navigation/Header.js';
import SideBar from '../../components/navigation/SideBar.js';
import './dashboard.css';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-container">
        <SideBar />
        {/* Add other elements here */}
      </div>
    </div>
  );
};

export default Dashboard;
