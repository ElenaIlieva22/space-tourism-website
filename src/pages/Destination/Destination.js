import React from 'react';
import './Destination.css';

const Destination = () => {
    return (
        <div className="destination-container">
            <div className='destination-background' >
                <img src='./images/destination/background-destination-desktop.jpg' className="dest-background" alt="destination" />
            </div>
            <div className='destination-content'>
                <h3 className="dest-heading">01 PICK YOUR DESTINATION</h3>
                <h1 className="dest-inner">MOON</h1>
                <p className="dest-content">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>            
        </div>
    );
};

export default Destination;
