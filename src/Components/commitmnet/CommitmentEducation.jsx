import React from "react";

import "./CommitmentEducation.css";
import mueseum from "../../images/bg-museum.jpg";
import srcmueseum from "../../images/bg -school.jpg";
const CommitmentEducation = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 ">
          <div className="home-box7-content-wrap">
            <div className="home-box7-title">
              <h1>
                COMMITMENT TO <br />
                <span>
                  EDUCATION &amp; <br />
                  HERITAGE
                </span>
              </h1>
            </div>

            <div className="home-box7-content">
              <p>
                Al Faisal Holding has a rich history of corporate social
                responsibility, a history that has grown and evolved to meet the
                complexities of todays business world and the challenges of a
                global society. The Founder, Sheikh Faisal Bin Qassim Al Thani,
                is a strong believer in the role of the private sector to
                develop and enrich the communities.
              </p>
            </div>
          </div>
        </div>
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
