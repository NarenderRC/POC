import React from "react";
import chairmanimg from "../../images/chairman.jpg";
import Button from "react-bootstrap/Button";

import "./Chairman.css";
const Chairman = () => {
  return (
    <>
      <div class="row">
        <div class="column">
          <img src={chairmanimg} width="590" height="497" alt="chairmanmsg" />
        </div>
        <div class="column">
          <div className="chairman-msg">
            <h2>
              CHAIRMAN'S <br />
            </h2>
            <span className="chairmanmsg">MESSAGE</span>
          </div>
          <div
            class="home-box3-quote aos-init aos-animate"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            <h3 className="chairman-quote">
              “Today, we pride ourselves on
              <br /> being a trustworthy household
              <br /> name both in Qatar &amp;
              <br /> beyond.”
            </h3>
          </div>
          <div className="shikh">
            <h6>Sheikh Faisal Bin Qassim Al Thani - Chairman</h6>
          </div>
          <div className="btn-readmore">
            <Button variant="primary">Read More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chairman;
