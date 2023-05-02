import React from 'react';
import slogo from '../../images/down.png';
import '../../styles/login.css';
import { loginEndPoints } from '../../../src/spotify';

export default function Login() {
  return (
    <div className="login-page">
      <img src={slogo} 
        alt="logo-spotify" 
        className='logo' />
      <a href={loginEndPoints} > 
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}
