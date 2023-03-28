import React from "react";
import Carousel from "react-bootstrap/Carousel";

import artic from "../../images/2003-artric.jpg";
import hilton from "../../images/2009-hilton-hurghada.jpg";
import four from "../../images/fourseson.jpg";
import washingtondc from "../../images/washington-dc.jpg";
import serton from "../../images/serton.jpg";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import "./OurHistory.css";
const OurHistory = ({data}) => {

  console.log("history,",data)
  return (
    <>
      <div>
        <h1 className="our-history">{data?.fields.title}</h1>
      </div>
      <div className="row">
        <Carousel variant="dark">
          {data?.fields.years.map((year,i)=>(
             <Carousel.Item>
             <div className="container-slide">
               <div className="hItem-text">
                 <h1 className="year">{year.fields.year}</h1>
                 { documentToReactComponents(year.fields.historyDetails[0].fields.description)}
                 {/* <p>
                   <strong>Al Rayyan Tourism Investment Company (ARTIC)</strong>
                 </p>
 
                 <p>
                   Established in 2003, ARTIC is a wholly owned subsidiary of Al
                   Faisal Holding and is headquartered in Qatar. The Company is
                   engaged in real estate development, acquisitions and leasing.
                   Its primary focus is on the hospitality sector and
                   hospitality-related services with investments spread over
                   MENA, Europe and the United States.
                 </p> */}
               </div>
               <div className="hItem-img">
                 <img src={year.fields.historyDetails[0].fields.image.fields.file.url} alt="" width="350" height="235" />
               </div>
             </div>
           </Carousel.Item>
          ))}
          {/* <Carousel.Item>
            <div className="container-slide">
              <div className="hItem-text">
                <h1 className="year">2003</h1>
                <p>
                  <strong>Al Rayyan Tourism Investment Company (ARTIC)</strong>
                </p>

                <p>
                  Established in 2003, ARTIC is a wholly owned subsidiary of Al
                  Faisal Holding and is headquartered in Qatar. The Company is
                  engaged in real estate development, acquisitions and leasing.
                  Its primary focus is on the hospitality sector and
                  hospitality-related services with investments spread over
                  MENA, Europe and the United States.
                </p>
              </div>
              <div className="hItem-img">
                <img src={artic} alt="" width="350" height="235" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container-slide">
              <div class="hItem-text">
                <p className="year">2015</p>
                <p>
                  <strong>
                    The Four Seasons at The First Residence Cairo and The First
                    Mall
                  </strong>
                </p>

                <p>
                  Further expansion of Al Faisal Holding profile into the
                  Egyptian market was accomplished by the acquisition of The
                  Four Seasons at The First Residence Cairo, and The First Mall.
                  The hotel is the very first Four Seasons Hotel in the Middle
                  East.
                </p>
              </div>
              <div className="hItem-img">
                <img src={washingtondc} alt="" width="350" height="235" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container-slide">
              <div className="hItem-text">
                <p className="year">2009</p>
                <p>
                  <strong>Hilton Hurghada Plaza</strong>
                </p>

                <p>
                  Entering the Egyptian market through the acquisition of Hilton
                  Hurghada Plaza through Al Rayyan Tourism Investment Company
                  (ARTIC)
                </p>
              </div>
              <div className="hItem-img">
                <img src={hilton} alt="" width="350" height="235" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container-slide">
              <div class="hItem-text">
                <p className="year">2011</p>
                <p>
                  <strong>Marriott Marquis City Center Doha Hotel&nbsp;</strong>
                </p>
                <p>(previously Renaissance &amp; Courtyard by Marriott) </p>

                <p>
                  Al Faisal’s expansion in the Qatari hospitality market through
                  the development of the properties of Marriott Marquis City
                  Center Doha Hotel, which were originally operating as The
                  Renaissance and Courtyard by Marriott.
                </p>
              </div>
              <div className="hItem-img">
                <img src={four} alt="" width="350" height="235" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container-slide">
              <div class="hItem-text">
                <p className="year">2019</p>
                <p>
                  <strong>Sheraton Istanbul City Center</strong>
                </p>

                <p>
                  Expansion in the European market through the acquisition of
                  Sheraton Istanbul City Center Hotel by ARTIC.
                </p>
              </div>
              <div className="hItem-img">
                <img src={serton} alt="" width="350" height="235" />
              </div>
            </div>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </>
  );
};

export default OurHistory;
