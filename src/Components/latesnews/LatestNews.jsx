import React from "react";
import doharesidence from "../../images/2020-aleph-doha-residences.jpg";
import Button from "react-bootstrap/Button";
import "./LatestNews.css";
const LatestNews = () => {
  return (
    <>
      <div className="boxes-row row box-pad home-box8">
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="home-box8-image">
                <img src={doharesidence} alt="" width="601" height="554" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div class="home-box8-content-wrap">
                <div className="home-box8-title hidden-xs">
                  <h2 className="title-left">
                    <span>LATEST</span> NEWS
                  </h2>
                </div>
                <div className="home-box8-news">
                  <p class="date">11.01.2023</p>
                  <p class="intro-text">
                    ARTIC and JW Marriott announce the opening of JW Marriott
                    Berlin
                  </p>
                  <div className="hm-news-intro">
                    <p>
                      Al Rayyan Tourism Investment Company (ARTIC) and JW
                      Marriott, part of Marriott Bonvoys global portfolio of 30
                      extraordinary hotel brands, unveils JW Marriott Hotel
                      Berlin. JW Marriott Hotel Berlin brings guests together
                      through thoughtfully crafted spaces, warm service, and a
                      commitment to well-being. Converting from Hotel Berlin
                      Central District, this announcement marks the completion
                      of the first stage in the propertys transformation to join
                      the iconic JW Marriott brand, set to offer a different
                      perspective to the capital citys hospitality scene.
                    </p>
                    <div className="btn-readmore">
                      <Button variant="primary">Read More</Button>
                    </div>
                  </div>
                </div>
                {/* <div class="home-box8-content">
                  <ul class="rad-link">
                    <li>
                      <a href="/media/press-releases.aspx">Read more</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
