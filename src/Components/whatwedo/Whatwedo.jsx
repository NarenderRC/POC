import React from "react";
import "./Whatwedo.css";
import education from "../../images/education.jpg";
import hospital from "../../images/hospitality.jpg";
import realestate from "../../images/realestate.jpg";

import builder from "../../images/constraction.jpg";
import trading from "../../images/tradingd.jpg";
import service from "../../images/service.jpg";
import manufacture from "../../images/manufacuring.jpg";
import amolcomapany from "../../images/amol.jpg";

import Button from "react-bootstrap/Button";
const Whatwedo = ({data}) => {
  console.log("what we do:",data)
  return (
    <>
      <div class="home-box6-title">
        <h1 class="title-center">
        {data?.fields.title}
        </h1>
      </div>

      <div className="card-section">

        {data?.fields.whatWeDoCards.map((card,i)=>(
          <div className="image-container">
          <img src={card?.fields.image.fields.file.url} alt="education" />

          <div className="text-block">
            <h5 style={{marginTop: '12px'}}>{card.fields.title}</h5>
            <div className="btn-readmore" id="btn-on-images">
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </div>
        ))}
        
       
      </div>

    
     
    
    </>
  );
};
export default Whatwedo;
