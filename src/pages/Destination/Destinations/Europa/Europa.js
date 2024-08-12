import React from 'react';
import './Europa.css';

const Europa = () => {
    return (
        <div className='europa-container'>
            <div className='europa-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="europa-heading">
                <h3>01 PICK YOUR DESTINATION</h3>
            </div>
            <div className='europa'>
                <img src='/images/destination/image-europa.png' className="europa-jpg" alt="europa" />
            </div>
            <div className='europa-content'>
                <h1 className="europa-inner">EUROPA</h1>
                <p className="europa-txt">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            </div>
        </div>
    );
};

export default Europa;
