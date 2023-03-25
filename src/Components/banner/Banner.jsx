import React from "react";
import doharesidence from "../../images/2020-aleph-doha-residences.jpg";
import Img from "../../images/alfisal.png";
import "./Banner.css";
const Banner = ({data}) => {
  console.log("banner data", data)
  const myStyle = {
    backgroundImage: `url(${data?.fields.image.fields.file.url})`,

    // height: "800px",
    width: "100%",
    marginTop: "-50px",
    fontSize: "50px",
    // background: (0, 48, 91, 0.65),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="boxes-row row home-box1">
        <div className="col-md-12 col-sm-12 home-box1-bg" style={myStyle}>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="home-box1-content-outer">
                <div className="home-box1-content">
                  <h1
                    data-aos="fade"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    className="aos-init aos-animate"
                  >
                  {data?.fields.headline.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}   
          {/* {data?.fields.headline} */}

                  </h1>
                  <p
                    className="intro-text aos-init aos-animate"
                    data-aos="fade"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                  >
                   {data?.fields.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
