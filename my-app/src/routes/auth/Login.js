import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Submit</button>
    </div>
  );
};

export default Login;
