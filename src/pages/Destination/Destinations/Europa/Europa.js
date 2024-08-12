import React from 'react';
// import './Europa.css';

const Europa = () => {
    return (
        <div className='europa-container'>
            <div className='europa-background' >
                <img src='./images/Destination/Destinations/Moon/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="europa-heading">
                <h3>01 PICK YOUR DESTINATION</h3>
            </div>
            <div className='europa' >
                <img src='public\images\destination\image-moon.png' className="europa" alt="europa" />
            </div>
            <div className='europa-content'>
                <h1 className="europa-inner">EUROPA</h1>
                <p className="europa-txt">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
        </div>
    );
};

export default Europa;
