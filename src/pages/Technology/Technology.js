import React from "react";
import "./Technology.css";

const Technology = () => {
  return (
    <div className="tech-container">
      {/* <div className="tech-background">
        <img
          src="./images/technology/background-technology-desktop.jpg"
          className="tech-bg"
          alt="Techonoly background"
        />
      </div> */}

      <div className="tech-content">
        <div>
          <div className="tech-heading">
            <p>03 SPACE LAUNCH 101</p>
          </div>
          <div className="tech-inscription">
            <div className="btns">
              <img
                src="./images/technology/OvalCopy.png"
                className="btn"
                alt="circle btn 1"
              />
              <img
                src="./images/technology/OvalCopy.png"
                className="btn"
                alt="circle btn 2"
              />
              <img
                src="./images/technology/OvalCopy.png"
                className="btn"
                alt="circle btn 3"
              />
            </div>
            <div className="tech-content-box">
              <p className="tech-terminology">THE TERMINOLOGY...</p>
              <h2 className="tech-title">LAUNCH VECHICLE</h2>
              <p className="tech-text">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          </div>
        </div>
        <div className="tech-pic">
          <img
            src="./images/technology/image-launch-vehicle-portrait.jpg"
            alt="Launch vehicle"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
