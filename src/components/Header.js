import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header-container'>      
      <nav className='nav'>
        <ul className='links'>
          <li><NavLink to="/" activeClassName="active">00 HOME</NavLink></li>
          <li><NavLink to="/destination" activeClassName="active">01 DESTINATION</NavLink></li>
          <li><NavLink to="/crew" activeClassName="active">02 CREW</NavLink></li>
          <li><NavLink to="/technology" activeClassName="active">03 TECHNOLOGY</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
