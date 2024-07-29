import React from 'react';
import './Crew.css'

export function Crew() {
    return (
        <div className="crew-container">
            <div className='background'>
                <img src='./images\crew\background-crew-desktop.jpg'className="bitmap-copy" alt="Bitmap Copy"/>
            </div>
            <div className='crew-content'>
                <p>02 MEET YOUR CREW</p>
                <h3 className="crew-function">Commander</h3>
                <h2 className="Crew-name">Douglas Hurley</h2>
                <p className="Crew-content">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.
                </p>
            </div>
            <div className='crew-douglas'>
                <img src='./images\crew\image-douglas-hurley.png'className="crew-douglas-hurley" alt="Team member Douglas Hurley"/>
            </div>
        </div>
    )
}