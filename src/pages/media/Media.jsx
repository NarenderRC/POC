import React from "react";
import mediaimg from "../../images/media.jpg";
import "./Media.css";
const Media = () => {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "Right",
    //     height: "100vh",
    //   }}
    // >
    //   <h1>Media page.</h1>
    // </div>
    <div id="bannerwrapper" class="row">
      <div id="bannerwrapperinner" class="col-xs-12">
        <div class="subpage-banner">
          <div id="bannerContainer" class="BannerContainer">
            <img id="bannerImage" class="BannerImage" src={mediaimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
