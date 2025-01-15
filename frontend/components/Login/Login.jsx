// src/Login.js
import React, { useState, useEffect } from 'react';
import './Login.css';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

// this function serves both for registration and login
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history=useHistory();
 
    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        // esending data to server
         await axios.post(process.env.API_URL +'/login',{
          username: username,
          password: password,
        });
        // redirecting users to home page
        history.push('/home');
        
      } catch (error) {
        alert('Mot de passe ou utilisateur incorrect', error);
      }
    };

    

  const handleRegister = async(e) => {
      e.preventDefault();
      
      try {
        // sending data to server
        await axios.post('process.env.API_URL/register',{
          username: username,
          password: password,
        });
        //redirecting registered users to home page 
        history.push('/home');

        //alert message to registered users
        alert('Utilisateur connecté');
        
      } catch (error) {
        alert(' Echec d \'enregistrement ',error);

      }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Login Portal </h1>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin} className='login-button'>
            Login
          </button>
          <button type="button" onClick={handleRegister} className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
