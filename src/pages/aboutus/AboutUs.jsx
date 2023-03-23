import React from "react";
import bgimg from "../../images/aboutus.jpg";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div classNameName="about-conatainer">
        <img src={bgimg} alt="aboutus" />
        <div className="page-title">About us</div>

        <div class="vertical-menu">
          <a href="# profile">
            <span>Company profile</span>
          </a>
          <hr className="solid" />
          <a href="#profile">
            <span>Organizational Chart</span>
          </a>
          <hr className="solid" />
          <a href="#profile">
            <span>Functional Chart</span>
          </a>
          <hr className="solid" />
          <a href="#profile">
            <span>Business strategy4</span>
          </a>
          <hr className="solid" />
          <a href="#profile">
            <span>Chairman's message</span>
          </a>
          <hr className="solid" />
          <a href="#profile">
            <span>Vision, mission and values</span>
          </a>
          <hr className="solid" />
          <a href="#profile">
            <span>Leadership</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
