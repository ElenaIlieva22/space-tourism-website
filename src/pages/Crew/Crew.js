import React from 'react';
import './Crew.css'

const Crew = () => {
    return (
        <div className="crew-container">
            <div className='background'>
                <img src='./images\crew\background-crew-desktop.jpg'className="bitmap-copy" alt="Bitmap Copy"/>
            </div>
            <div className='crew-member'>
                <p className='crew-team' >02 MEET YOUR CREW</p>
                <h3 className="crew-function">Commander</h3>
                <h2 className="crew-name">Douglas Hurley</h2>
                <p className="crew-content">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.
                </p>
            </div>
            <div className='crew-pic'>
                <img src='./images\crew\image-douglas-hurley.png'className="crew-douglas-hurley" alt="Team member Douglas Hurley"/>
            </div>
        </div>
    )
}

export default Crew;