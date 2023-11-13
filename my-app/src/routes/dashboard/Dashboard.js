import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../navigation/Header.js';
import SideBar from '../../components/navigation/SideBar.js';
import HomePage from './HomePage.js';
import Favorites from './Favorites.js';
import WatchLater from './WatchLater.js';
import './dashboard.css';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <BrowserRouter>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className='dashboard-container'>
        <SideBar />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/watchlater' element={<WatchLater />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
