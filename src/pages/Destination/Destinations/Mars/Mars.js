import React from 'react';
import '../Planets.css';

const Mars = () => {
    return (
        <div className='planets-container'>
            <div className='planets-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="planets-heading">
                <h3><span class="numbers">01</span>PICK YOUR DESTINATION</h3>
            </div>
            <div className='planets'>
                <img src='/images/destination/image-mars.png' className="planets-jpg" alt="planets" />
            </div>
            <div className='planets-content'>
                <h1 className="planets-inner">MARS</h1>
                <p className="planets-txt">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                <div className='travel-info'> 
                    <p>AVG. DISTANCE</p>
                    <p className='time'>EST. TRAVEL TIME</p>
                    <h1>225 MIL. KM</h1>
                    <h1 className='time'>9 MONTHS</h1>
                </div>
            </div>
        </div>
    );
};

export default Mars;