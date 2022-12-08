import React from 'react';
import logo from '../images/Error.png';
import "../style/Error.css";

const Error = () => {
  return (
    <div className='main'>
    <div className='main-1'><h1>404 Page not found</h1></div>
    <img src={logo} className='main-2' alt="logo" />
    </div>
  )
}

export default Error