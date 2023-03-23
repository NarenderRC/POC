import React from "react";
import "./Alfaisal.css";
import Button from "react-bootstrap/Button";
const Alfaisal = () => {
  return (
    <>
      <div className="boxes-row row box-pad home-box2">
        <div className="alfaisal-title">
          <h1>
            AL FAISAL <br />
            <span className="holding">HOLDING</span>
          </h1>
        </div>

        {/* <div className="video-box">
          <iframe
            width="560px"
            height="340px"
            className="external-web"
            src="https://www.youtube.com/embed/rUZ7IaxIIXE"
            allowfullscreen=""
          ></iframe>
        </div> */}
        <div className="row">
          <div className="column1">
            <div className="home-box2-content">
              <p>
                Al Faisal Holding, is one of Qatar’s leading private companies
                that played a significant role in the development of the Qatar
                economy and infrastructure attracting many foreign investments
                and creating immense career opportunities.
              </p>
              <p>
                Established in the 1960s as a small trading company, Al Faisal
                Holding was able to keep pace with the prosperity and growth of
                Qatar to develop and nourish its business opportunities.
              </p>
            </div>
            <div>
              <Button variant="primary">Read More</Button>
            </div>
          </div>
          <div className="column2">
            <div className="video-box">
              <iframe
                width="816px"
                height="400px"
                className="external-web"
                src="https://www.youtube.com/embed/rUZ7IaxIIXE"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alfaisal;
