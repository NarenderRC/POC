import React from "react";
import "./Contact.css";
import Linkedin from "../../images/home-linkedin.png";
import Facebook from "../../images/home-facebook.png";
import Twitter from "../../images/home-twitter.png";
import Youtube from "../../images/home-youtube.png";

const Contact = ({data}) => {
  console.log("ccc ===", data)
  function getImageByInternalName(internalName) {
    switch (internalName) {
      case 'Facebook':
        return Facebook;
        case 'Linkedin':
          return Linkedin;
      case 'Twitter':
        return Twitter;
      case 'Youtube':
        return Youtube;
      default:
        return null; // or a default image
    }
  }
  
  return (
    <>
      <div className="boxes-row1 row home-box10">
        <div className="col-md-12 col-sm-12 home-box10-bg">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12 hmbox10-left-wrap ">
              <div className="home-box10-content hmbox10-left ">
                <h2 className="hm-contact-title">
                 {data?.fields.title}
                </h2>
              </div>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12 hmbox10-right-wrap ">
              <div className="home-box10-content hmbox10-right ">
                <h3>
                  OUR <span>ADDRESS</span>
                </h3>
                <p>
                {data?.fields.address.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))} 
                  <br />
                  Telephone: {data?.fields.telephone}
                  <br />
                  Fax: {data?.fields.fax}
                  <br />
                  <a href="mailto:pr@alfaisalholding.com" target="_self">
                  {data?.fields.email}
                  </a>
                </p>

                <div className="hm-contact-social">
                  <ul className="rad-list">
                    {data?.fields.socialLinks.fields.links.map((link,i)=>(

                    <a
                      target="_blank"
                      title="Opens in a new window"
                      href={link?.fields.buttonLink}
                    >

                    
                      <img src={getImageByInternalName(link?.fields.internalName)} alt="" />
                    </a>
                    ))}

                    {/* <a
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
                    </a> */}
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
