import React from 'react';
import './Header.css'


const Header =()=> {
    return (
        
    <header className='container'>
        <nav className='nav'>
            <ul className='links'>
            <li><a href="/">00 HOME</a></li>
            <li><a href="/about">01 DESTINATION</a></li>
            <li><a href="/contact">02 CREW</a></li>
            {/* Add your new link here */}
            <li><a href="/new-page">03 TECHNOLOGY</a></li>
            </ul>
        </nav>
    </header>
    )
}


export default Header;