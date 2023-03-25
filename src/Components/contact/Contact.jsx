import React from "react";
import "./Contact.css";
import linkedin from "../../images/home-linkedin.png";
import fb from "../../images/home-facebook.png";
import twitter from "../../images/home-twitter.png";
import Utube from "../../images/home-youtube.png";

const Contact = () => {
  return (
    <>
      <div className="boxes-row1 row home-box10">
        <div className="col-md-12 col-sm-12 home-box10-bg">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12 hmbox10-left-wrap ">
              <div className="home-box10-content hmbox10-left ">
                <h2 className="hm-contact-title">
                  <span>CONTACT</span> US
                </h2>
              </div>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12 hmbox10-right-wrap ">
              <div className="home-box10-content hmbox10-right ">
                <h3>
                  OUR <span>ADDRESS</span>
                </h3>
                <p>
                  Al Faisal Holding
                  <br />
                  City Tower, Floor 20, West Bay
                  <br />
                  Doha - Qatar
                  <br />
                  Telephone: +974 44223830
                  <br />
                  Fax: +974 44223800
                  <br />
                  <a href="mailto:pr@alfaisalholding.com" target="_self">
                    pr@alfaisalholding.com
                  </a>
                </p>

                <div className="hm-contact-social">
                  <ul className="rad-list">
                    <a
                      target="_blank"
                      title="Opens in a new window"
                      href="https://www.linkedin.com/company/al-faisal-holding-co-"
                    >
                      <img src={linkedin} alt="" />
                    </a>

                    <a
                      target="_blank"
                      title="Opens in a new window"
                      href="https://www.facebook.com/AFHQA/"
                    >
                      <img src={fb} alt="" />
                    </a>

                    <a
                      target="_blank"
                      title="Opens in a new window"
                      href="https://twitter.com/AlFaisalPR"
                    >
                      <img src={twitter} alt="" />
                    </a>

                    <a
                      target="_blank"
                      title="Opens in a new window"
                      href="https://www.youtube.com/channel/UCTXS6xDfWeq6cjinkXLZzuw"
                    >
                      <img src={Utube} alt="social" />
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
