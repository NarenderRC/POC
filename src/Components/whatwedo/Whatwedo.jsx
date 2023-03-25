import React from "react";
import "./Whatwedo.css";
import education from "../../images/education.jpg";
import hospital from "../../images/hospitality.jpg";
import realestate from "../../images/realestate.jpg";

import builder from "../../images/constraction.jpg";
import trading from "../../images/tradingd.jpg";
import service from "../../images/service.jpg";
import manufacture from "../../images/manufacuring.jpg";
import amolcomapany from "../../images/amol.jpg";

import Button from "react-bootstrap/Button";
const Whatwedo = () => {
  return (
    <>
      <div class="home-box6-title">
        <h1 class="title-center">
          <span>WHAT</span> WE DO
        </h1>
      </div>
      <div className="image-container">
        <div className="image-container">
          <img src={education} alt="education" />

          <div className="text-block">
            <h5>Culture,Education,Leisure & Sports</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={hospital} alt="education" />

          <div className="text-block">
            <h5>Hospitality</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={realestate} alt="education" />

          <div className="text-block">
            <h5>Real Estate</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="image-container">
        <div className="image-container">
          <img src={builder} alt="education" />

          <div className="text-block">
            <h5>constraction & Project Manengment</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={trading} alt="education" />

          <div className="text-block">
            <h5>Trading & Distribution</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={service} alt="education" />

          <div className="text-block">
            <h5>Service</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="image-container">
          <img src={manufacture} alt="education" />

          <div className="text-block">
            <h5>Manufacturing</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={amolcomapany} alt="education" />

          <div className="text-block">
            <h5>Aamal company QPSC</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Whatwedo;
