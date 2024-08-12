import React from 'react';
import { NavLink } from 'react-router-dom';
import './DestHeader.css';

const DestHeader = () => {
  return (
    <header className='dest-header-container'>      
      <nav className='dest-nav'>
        <ul className='dest-links'>
          <li><NavLink to="./moon" activeClassName="active">MOON</NavLink></li>
          <li><NavLink to="./europa" activeClassName="active">EUROPA</NavLink></li>
          <li><NavLink to="./mars" activeClassName="active">MARS</NavLink></li>
          <li><NavLink to="./titan" activeClassName="active">TITAN</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default DestHeader;
