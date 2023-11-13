import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

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

  return (
    <div>
      <form>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
      {_switch ? <Login /> : <Register />}
    </div>
  );
};

export default Authentication;
