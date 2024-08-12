import React from 'react';
// import './Titan.css';

const Titan = () => {
    return (
        <div className='titan-container'>
            <div className='titan-background' >
                <img src='./images/Destination/Destinations/Moon/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="titan-heading">
                <h3>01 PICK YOUR DESTINATION</h3>
            </div>
            <div className='titan' >
                <img src='public\images\destination\image-moon.png' className="titan" alt="titan" />
            </div>
            <div className='titan-content'>
                <h1 className="titan-inner">MOON</h1>
                <p className="titan-txt">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
        </div>
    );
};

export default Titan;
