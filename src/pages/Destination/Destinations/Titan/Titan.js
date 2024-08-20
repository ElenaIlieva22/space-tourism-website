import React from 'react';
import './Titan.css';

const Titan = () => {
    return (
        <div className='titan-container'>
            <div className='titan-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className='titan-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="titan-heading">
                <h3>01 PICK YOUR DESTINATION</h3>
            </div>
            <div className='titan'>
                <img src='/images/destination/image-titan.png' className="titan-jpg" alt="titan" />
            </div>
            <div className='titan-content'>
                <h1 className="titan-inner">TITAN</h1>
                <p className="titan-txt">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            </div>
        </div>
    );
};

export default Titan;