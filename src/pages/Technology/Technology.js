import React, { useState } from "react";
import "./Technology.css";
import "./tablet.css";
import "./mobile.css";

const techPages = [
  {
    title: "LAUNCH VEHICLE",
    terminology: "THE TERMINOLOGY...",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: "./images/technology/image-launch-vehicle-portrait.jpg",
    alt: "Launch vehicle",
  },
  {
    title: "SPACEPORT",
    terminology: "THE TERMINOLOGY...",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: "./images/technology/image-spaceport-portrait.jpg",
    alt: "Spaceport",
  },
  {
    title: "SPACE CAPSULE",
    terminology: "THE TERMINOLOGY...",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: "./images/technology/image-space-capsule-portrait.jpg",
    alt: "Space capsule",
  },
];

const Technology = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="tech-container">
      <div className="tech-background">
        <img
          src="./images/technology/background-technology-desktop.jpg"
          className="tech-bg"
          alt="Technology background"
        />
      </div>

      <div className="tech-content">
        <div className="tech-content-box-text">
          <div className="tech-heading">
            <p>03 SPACE LAUNCH 101</p>
          </div>
          <div className="tech-inscription">
            <div className="btns">
              {techPages.map((_, index) => (
                <div
                  key={index}
                  className={`btn ${index === currentPage ? "active" : ""}`}
                  onClick={() => setCurrentPage(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="tech-content-box">
              <p className="tech-terminology">
                {techPages[currentPage].terminology}
              </p>
              <h2 className="tech-title">{techPages[currentPage].title}</h2>
              <p className="tech-text">{techPages[currentPage].text}</p>
            </div>
          </div>
        </div>
        <div className="tech-pic-box">
          <img
            src={techPages[currentPage].image}
            className="tech-pic"
            alt={techPages[currentPage].alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
