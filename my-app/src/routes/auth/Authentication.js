import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setSwitch(true);
  };

  const handleSignUp = () => {
    setSwitch(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (_switch) {
      axios
        .post('/api/auth/login', { username, password })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          setUserUsername(username);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post('/api/auth/register', { username, password })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          setUserUsername(username);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
      {_switch ? <Login /> : <Register />}
    </div>
  );
};

export default Authentication;
