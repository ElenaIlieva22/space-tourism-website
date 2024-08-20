import React from 'react';
import './Mars.css';

const Mars = () => {
    return (
        <div className='mars-container'>
            <div className='mars-background'>
                <img src='/images/destination/background-destination-desktop.jpg' className="planet-background" alt="planet" />
            </div>
            <div className="mars-heading">
                <h3>01 PICK YOUR DESTINATION</h3>
            </div>
            <div className='mars'>
                <img src='/images/destination/image-mars.png' className="mars-jpg" alt="mars" />
            </div>
            <div className='mars-content'>
                <h1 className="mars-inner">MARS</h1>
                <p className="mars-txt">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            </div>
        </div>
    );
};

export default Mars;