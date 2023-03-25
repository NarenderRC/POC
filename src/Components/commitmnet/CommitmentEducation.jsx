import React from "react";

import "./CommitmentEducation.css";
import mueseum from "../../images/bg-museum.jpg";
import srcmueseum from "../../images/bg -school.jpg";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const CommitmentEducation = ({data}) => {
  // console.log("new ===", data)
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 ">
          <div className="home-box7-content-wrap">
            <div className="home-box7-title">
            {data?.fields.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))} 
            </div>

            <div className="home-box7-content">
            { documentToReactComponents(data?.fields.description)}
            </div>
          </div>
        </div>
        {/* make a card component so we can map through data here */}
        <div className="col-md-6 col-sm-6 col-xs-12 home-box7-right">
          <div className="home-box7-rhs home-box7-rhs-1">
            <img src={mueseum} className="mueseum-img" alt="bg-museum" />
            <div className="text-block1">
              <h2>Sheikh Faisal Bin Qassim Al Thani Museum</h2>
            </div>
            <div className="bgschool">
              <img src={srcmueseum} className="mueseum-img" alt="bg-museum" />
              <div className="text-block1">
                <h2>
                  Al Faisal Without Borders
                  <br />
                  Foundation
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommitmentEducation;
