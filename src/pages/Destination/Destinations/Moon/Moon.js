import React from 'react';
import '../Planets.css';

const Moon = () => {
    return (
        <div className='planets-container'>
            <div className='planets-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="planets-heading">
                <h3><span class="numbers">01</span>PICK YOUR DESTINATION</h3>
            </div>
            <div className='planets'>
                <img src='/images/destination/image-moon.png' className="planets-jpg" alt="planets" />
            </div>
            <div className='planets-content'>
                <h1 className="planets-inner">MOON</h1>
                <p className="planets-txt">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className='travel-info'> 
                    <p className='distance'>AVG. DISTANCE</p>
                    <p className='time'>EST. TRAVEL TIME</p>
                    <h1 className='distance'>384,400 KM</h1>
                    <h1 className='time'>3 DAYS</h1>
                </div>
            </div>
        </div>
    );
};

export default Moon;