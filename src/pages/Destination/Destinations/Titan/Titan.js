import React from 'react';
import '../Planets.css';

const Titan = () => {
    return (
        <div className='planets-container'>
            <div className='planets-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="planets-heading">
                <h3>01 PICK YOUR DESTINATION</h3>
            </div>
            <div className='planets'>
                <img src='/images/destination/image-titan.png' className="planets-jpg" alt="planets" />
            </div>
            <div className='planets-content'>
                <h1 className="planets-inner">TITAN</h1>
                <p className="planets-txt">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                <div className='travel-info'> 
                    <p>AVG. DISTANCE</p>
                    <p className='time'>EST. TRAVEL TIME</p>
                    <h1>1.6 BIL. KM</h1>
                    <h1 className='time'>7 YEARS</h1>
                </div>
            </div>
        </div>
    );
};

export default Titan;