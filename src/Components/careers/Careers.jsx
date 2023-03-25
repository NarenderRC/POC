import React from "react";

import srccareer from "../../images/career.jpg";
import Button from "react-bootstrap/Button";
import "./Careers.css";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Careers = ({data}) => {
  console.log("caerrer ===", data)
  return (
    <>
      <div className="boxes-row row box-pad home-box9">
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="home-box9-content-wrap">
                <div className="home-box9-title hidden-xs">
                  <h2>{data?.fields.headline}</h2>
                </div>
                <div className="home-box9-content">
                { documentToReactComponents(data?.fields.bodyText)}
                
                  <div className="btn-readmore">
                    <Button variant="primary">Read More</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12 pull-right">
              <div className="home-box9-image">
                <img src={data?.fields.image.fields.file.url} alt="" width="580" height="460" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
