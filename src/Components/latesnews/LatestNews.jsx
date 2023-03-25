import React from "react";
import doharesidence from "../../images/2020-aleph-doha-residences.jpg";
import Button from "react-bootstrap/Button";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import "./LatestNews.css";

const LatestNews = ({data}) => {
 
  return (
    <>
      <div className="boxes-row row box-pad home-box8">
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="home-box8-image">
                <img src={data?.fields.image.fields.file.url} alt="" width="601" height="554" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div class="home-box8-content-wrap">
                <div className="home-box8-title hidden-xs">
                  <h2 className="title-left">
                   {data?.fields.headline}
                  </h2>
                </div>
                <div className="home-box8-news">
                { documentToReactComponents(data?.fields.bodyText)}
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
