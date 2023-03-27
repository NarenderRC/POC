import React from "react";
import bgimg from "../../images/aboutus.jpg";
import "./SideNav.css";

const SideNav = () => {
  return (
    <>
      <div className="container-fluid">
        <div id="bannerwrapper" className="row">
          <div id="bannerwrapperinner" className="col-xs-12">
            <div className="subpage-banner">
              <div id="bannerContainer" className="BannerContainer">
                <img
                  id="bannerImage"
                  className="BannerImage"
                  src={bgimg}
                  alt=" bg"
                />
              </div>
            </div>
            <div
              id="leftcol"
              className="two-col-left col-md-3 col-sm-12 col-xs-12"
            >
              <div className="">
                <div className="page-title">About us</div>

                <div id="leftnavigation" className="left-navigation">
                  <div className="left-nav-dt">
                    <ul>
                      <li className="level2">
                        <span>Company Profile</span>
                      </li>
                      <li className="level2">
                        <span>Organizational Chart</span>
                      </li>

                      <li className="level2">
                        <a href="/about-us/functional-chart.aspx">
                          <span>Functional Chart</span>
                        </a>
                      </li>

                      <li className="level2">
                        <a href="/about-us/business-strategy.aspx">
                          <span>Business strategy</span>
                        </a>
                      </li>
                      <li className="level2">
                        <a href="/about-us/chairmans-message.aspx">
                          <span>Chairman's message</span>
                        </a>
                      </li>

                      <li className="level2">
                        <a href="/about-us/vision-mission-and-values.aspx">
                          <span>Vision, mission and values</span>
                        </a>
                      </li>

                      <li className="level2">
                        <a href="/about-us/management/board-of-directors.aspx">
                          <span>Leadership</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
