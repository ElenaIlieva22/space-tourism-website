import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className='header-container'>      
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className='links'>
          <li><span className="number">00</span><NavLink to="/" activeClassName="active" >HOME</NavLink></li>
          <li><span className="number">01</span><NavLink to="/destination" activeClassName="active">DESTINATION</NavLink></li>
          <li><span className="number">02</span><NavLink to="/crew" activeClassName="active">CREW</NavLink></li>
          <li><span className="number">03</span><NavLink to="/technology" activeClassName="active">TECHNOLOGY</NavLink></li>
        </ul>
      </nav>
      <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
};

export default Header;
