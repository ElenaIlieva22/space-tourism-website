import React from 'react';
import './Moon.css';

const Moon = () => {
    return (
        <div className='moon-container'>
            <div className='moon-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="moon-heading">
                <h3>01 PICK YOUR DESTINATION</h3>
            </div>
            <div className='moon'>
                <img src='/images/destination/image-moon.png' className="moon-jpg" alt="moon" />
            </div>
            <div className='moon-content'>
                <h1 className="moon-inner">MOON</h1>
                <p className="moon-txt">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
        </div>
    );
};

export default Moon;
