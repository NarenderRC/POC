import React from "react";
import Carousel from "react-bootstrap/Carousel";

import artic from "../../images/2003-artric.jpg";
import hilton from "../../images/2009-hilton-hurghada.jpg";
import four from "../../images/2010-four-seasons.jpg";
import "./OurHistory.css";
const OurHistory = () => {
  return (
    <>
      <div>
        <h1 className="our-history">Our History</h1>
      </div>
      <div className="row">
        <Carousel variant="dark">
          <Carousel.Item>
            {/* <div className="column3">
              <div className="home-box2-content">
                <p>
                  Al Faisal Holding, is one of Qatar’s leading private companies
                  that played a significant role in the development of the Qatar
                  economy and infrastructure attracting many foreign investments
                  and creating immense career opportunities.
                </p>
              </div>
            </div> */}
            <img className="artic-image" src={artic} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="artic-image" src={hilton} alt="Second slide" />

            <div className="column3">
              <div className="home-box2-content">
                {/* <p>
                  Al Faisal Holding, is one of Qatar’s leading private companies
                  that played a significant role in the development of the Qatar
                  economy and infrastructure attracting many foreign investments
                  and creating immense career opportunities.
                </p> */}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="artic-image" src={four} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default OurHistory;
