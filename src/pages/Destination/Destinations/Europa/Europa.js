import React from 'react';
import '../Planets.css';

const Europa = () => {
    return (
        <div className='planets-container'>
            <div className='planets-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="planets-heading">
                <h3><span class="numbers">01</span>PICK YOUR DESTINATION</h3>
            </div>
            <div className='planets'>
                <img src='/images/destination/image-europa.png' className="planets-jpg" alt="planets" />
            </div>
            <div className='planets-content'>
                <h1 className="planets-inner">EUROPA</h1>
                <p className="planets-txt">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                <div className='travel-info'> 
                    <p>AVG. DISTANCE</p>
                    <p className='time'>EST. TRAVEL TIME</p>
                    <h1>628 MIL. KM</h1>
                    <h1 className='time'>3 YEARS</h1>
                </div>
            </div>
        </div>
    );
};

export default Europa;