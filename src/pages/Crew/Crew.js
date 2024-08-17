// import React from "react";
import "./Crew.css";
import React, { useState } from "react";

const Crew = () => {
  const crewMembers = [
    {
      id: 1,
      function: "COMMANDER",
      name: "DOUGLAS HURLEY",
      text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      imgSrc: "./images/crew/image-douglas-hurley.png",
    },
    {
      id: 2,
      function: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the development of the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      imgSrc: "./images/crew/image-mark-shuttleworth.png",
    },
    {
      id: 3,
      function: "PILOT",
      name: "VICTOR GLOVER",
      text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      imgSrc: "./images/crew/image-victor-glover.png",
    },
    {
      id: 4,
      function: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      imgSrc: "./images/crew/image-anousheh-ansari.png",
    },
  ];

  const [currentCrew, setCurrentCrew] = useState(0);

  const goToCrew = (index) => {
    setCurrentCrew(index);
  };

  return (
    <div className="crew-container">
      <div className="crew-background">
        <img
          src="./images/crew/background-crew-desktop.jpg"
          className="crew-bg"
          alt="Bitmap Copy"
        />
      </div>
 
      <div className="crew-content">
        <div className="crew-inscription" style={{ width: "30%" }}>
          <p className="crew-heading">02 MEET YOUR CREW</p>
          <h4 className="crew-function">{crewMembers[currentCrew].function}</h4>
          <h2 className="crew-name">{crewMembers[currentCrew].name}</h2>
          <p className="crew-text">{crewMembers[currentCrew].text}</p>
        </div>

    
        
        <div className="crew-pic">
          <img
            src={crewMembers[currentCrew].imgSrc}
            className="crew-douglas-hurley"
            alt={`Team member ${crewMembers[currentCrew].name}`}
          />
        </div>

        <div className="crew-navigation">
          {crewMembers.map((member, index) => (
            <button key={member.id} onClick={() => goToCrew(index)}></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crew;
