import React from "react";

import srccareer from "../../images/career.jpg";
import Button from "react-bootstrap/Button";
import "./Careers.css";

const Careers = () => {
  return (
    <>
      <div className="boxes-row row box-pad home-box9">
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="home-box9-content-wrap">
                <div className="home-box9-title hidden-xs">
                  <h2>CAREERS</h2>
                </div>
                <div className="home-box9-content">
                  <p>
                    We aim to attract, develop and retain the best people by
                    offering attractive career opportunities. Our recruitment
                    team is continuously searching for talented candidates every
                    day, and will contact you if your skills and experience
                    match our requirements. We encourage you to send your
                    resume, as this allows us to find you in the future should a
                    suitable vacancy arise.
                  </p>
                  <p>
                    Submit your CV to:
                    <a href="mailto:hr@alfaisalholding.com" target="_self">
                      hr@alfaisalholding.com
                    </a>
                  </p>
                  <div className="btn-readmore">
                    <Button variant="primary">Read More</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12 pull-right">
              <div className="home-box9-image">
                <img src={srccareer} alt="" width="580" height="460" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
