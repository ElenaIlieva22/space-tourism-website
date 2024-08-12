import React from 'react';
import './Mars.css';

const Mars = () => {
    return (
        <div className='mars-container'>
            <div className='mars-background'>
                <img src='../images/Destination/Destinations/Mars/background-destination-desktop.jpg' className="planet-background" alt="Mars background" />
            </div>
            <div className="mars-heading">
                <h3>01 PICK YOUR DESTINATION</h3>
            </div>
            <div className='mars'>
                <img src='../images/Destination/Mars/image-mars.png' className="mars-image" alt="Mars" />
            </div>
            <div className='mars-content'>
                <h1 className="mars-inner">MARS</h1>
                <p className="mars-txt">Explore the red planet. Mars offers a unique experience with its rusty terrain and fascinating landscapes. Visit landmarks such as Olympus Mons and Valles Marineris.</p>
            </div>
        </div>
    );
};

export default Mars;
