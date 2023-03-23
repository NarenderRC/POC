import React from "react";
import map from "../../images/world.jpg";
import Button from "react-bootstrap/Button";
import "./WorldMap.css";
const WorldMap = () => {
  return (
    <div className="map-container">
      <div class="map-div">
        <img src={map} alt="map" />
      </div>
      <div class="column">
        <div className="bussiness-titel">
          <h2>
            OUR
            <br /> BUSSINESS <br />
            STRATEGY
          </h2>
        </div>

        <div className="stratergy-text">
          <p>
            To fulfil shareholders aspirations and
            <br /> create long term value for all our <br />
            stakeholders by growing the Group s net
            <br /> assets, investing across diverse sectors <br />
            and geographies and enhancing liquidity.
          </p>
        </div>

        <div className="btn-readmore">
          <Button variant="primary">Read More</Button>
        </div>
      </div>
    </div>
  );
};
export default WorldMap;
