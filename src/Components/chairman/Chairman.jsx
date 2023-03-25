import React from "react";
// import chairmanimg from "../../images/chairman.jpg";
import Button from "react-bootstrap/Button";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import "./Chairman.css";
const Chairman = ({data}) => {
  return (
    <>
      <div class="row">
        <div class="column">
          <img src={data?.fields?.image.fields.file.url} width="590" height="497" alt="chairmanmsg" />
        </div>
        <div class="column">
          <div className="chairman-msg" style={{ marginBottom: '20px'}}>

          {data?.fields.headline.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))} 
          
          </div>  
          { documentToReactComponents(data?.fields.bodyText)}
          
          <div className="btn-readmore">
            <Button variant="primary">Read More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chairman;
