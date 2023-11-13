import React, { useState, useEffect, useNavigate } from 'react';
import axios from 'axios';
import './navigation.css';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    switch (pageName) {
      case 'Home':
        navigate('/home');
        break;
      case 'Favorites':
        navigate('/favorites');
        break;
      case 'Watch Later':
        navigate('/watchlater');
        break;
      default:
        navigate('/home');
    }
  };

  useEffect(() => {
    axios
      .get('/api/activity')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Activity = ({ activity }) => <li>{activity}</li>;

  return (
    <nav>
      <ul className='navigation'>
        <li
          className={selected === 'home' ? 'selected' : ''}
          onClick={() => setPage('Home')}
        >
          <i className='home-icon'></i>
          Home
        </li>
        <li
          className={selected === 'favorites' ? 'selected' : ''}
          onClick={() => setPage('Favorites')}
        >
          <i className='favorites-icon'></i>
          Favorites
        </li>
        <li
          className={selected === 'watchlater' ? 'selected' : ''}
          onClick={() => setPage('Watch Later')}
        >
          <i className='watch-later-icon'></i>
          Watch Later
        </li>
      </ul>
      {activities.length > 0 && (
        <ul className='activity'>
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideBar;
