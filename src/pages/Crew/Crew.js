import React from 'react';
import './Crew.css'

const Crew = () => {
    return (
        <div className="crew-container">
            <div className='crew-background'>
                <img src='./images\crew\background-crew-desktop.jpg'className="crew-bg" alt="Bitmap Copy"/>
            </div>
            <div className='crew-content'>
                <p className='crew-heading' >02 MEET YOUR CREW</p>
                <h4 className="crew-function">COMMANDER</h4>
                <h2 className="crew-name">DOUGLAS HURLEY</h2>
                <p className="crew-text">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
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