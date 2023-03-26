import React from "react";
import map from "../../images/world.jpg";
import Button from "react-bootstrap/Button";
import "./WorldMap.css";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const WorldMap = ({data}) => {
  return (
    <div className="map-container">
      <div class="map-div">
        <img src={data?.fields.image.fields.file.url} alt="map" />
      </div>
      <div class="column">
        <div className="bussiness-titel">
        {data?.fields.headline.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))} 
        </div>

        <div className="stratergy-text">
        { documentToReactComponents(data?.fields.bodyText)}
        </div>

        <div className="btn-readmore">
          <Button variant="primary">Read More</Button>
        </div>
      </div>
    </div>
  );
};
export default WorldMap;
