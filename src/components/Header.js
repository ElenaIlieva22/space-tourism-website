import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='container'>
      <nav className='nav'>
        <ul className='links'>
          <li><Link to="/">00 HOME</Link></li>
          <li><Link to="/destination">01 DESTINATION</Link></li>
          <li><Link to="/crew">02 CREW</Link></li>
          <li><Link to="/technology">03 TECHNOLOGY</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
