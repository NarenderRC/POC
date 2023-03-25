import React from "react";

import CompanyProfile from "../../Components/companyprofile/CompanyProfile";
import SideNav from "../../Components/sidenav/SideNav";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-container-fluid">
        <SideNav />
        <CompanyProfile />
      </div>
    </>
  );
};

export default AboutUs;
