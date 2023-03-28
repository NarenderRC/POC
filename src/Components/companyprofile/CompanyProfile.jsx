import React from "react";
import chairmanimg from "../../images/chairman.jpg";
import "./CompanyProfile.css";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

const CompanyProfile = ({data}) => {

  console.log("reall",data)

  const options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="last-title">{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="paragraph">{children}</p>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="last-title">{children}</h4>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        return <img alt={title} height={file.details.image.height} width={file.details.image.width} src={file.url} />;
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    },
  };
  return (
    <>
      <div>
        <div style={{marginTop: '8px'}} className="w3-row-padding">
          <div  className="w3-third">
          { documentToReactComponents(data?.firstSection,options)}
            {/* <h1>
              Company Profile&nbsp; <br />
              Al&nbsp;Faisal&nbsp;Holding
            </h1>
            <p className="paragraph">
              What originally began as a small local company called Gettco
              Trading, initiated by a young Qatari with a modest start-up
              capital, has become a worldwide, multi-million dollar enterprise
              with an extensive range of business activities. That modest entity
              is now under a major holding company initiated by the same Qatari,
              Sheikh Faisal Bin Qassim Al Thani, who has become one of Qatar’s
              private sector’s economic pillars.
            </p>
            <p className="paragraph">
              The small automobile business that started four decades ago has
              now grown into a big local player with a large number of diverse
              consumers, involved in real estate, commercial and industrial
              activities undertaken by over 20 well established and successful
              companies that operate under the umbrella of Al Faisal Holding.
            </p>
            <a
              class="read-more"
              href="/about-us/vision-mission-and-values.aspx"
            >
              Read more
            </a> */}
          </div>
        </div>
        <div  className="w3-row-padding2">
          <div className="w3-third2">
          
          {data?.secondSection?.fields.headline.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              <h4>{line}</h4>
            </React.Fragment>
          ))} 
            {/* <h1>Chairman's message</h1>
            <h4>Exceeding expectations</h4> */}
            <div className="inner-box-content1">
              <div style={{marginTop: '15px'}} className="box-image aboutus-image">
                <img src={data?.secondSection?.fields.image.fields.file.url} alt="" width="135" height="110" />
                <div className="box-image-title">
                  {data?.secondSection?.fields.image.fields.title}
                  {/* H.E. Sheikh Faisal
                  <br /> Bin Qassim Al <br />
                  Thani */}
                </div>
              </div>
              <div>
             <p style={{marginTop: '8px'}}> { documentToReactComponents(data?.secondSection?.fields.bodyText,options)}</p>
                {/* <p>
                  “It has been an exciting experience to witness the remarkable
                  economic development of Qatar.”
                </p> */}
              </div>
              <div className="content-col border-left">
              { documentToReactComponents(data?.secondSectionBottom,options)}
                {/* <h3 className="Vision">Vision and mission</h3>
                <p className="paragraphV-vision">
                  To exceed expectations every time and place we interact
                </p>

                <div>
                  <h2 id="strategy">Strategy</h2>
                  <p className="paragraph">
                    An organization where the highest caliber of business
                    resources and professionals come together and leading Qatar
                    with a world class international investment community.
                  </p>
                  
                </div> */}
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div className="w3-row-padding3">
            <div className="w3-third3">
              <div class="content-col-last border-left">
              { documentToReactComponents(data?.thirdSection,options)}
                {/* <h3 className="last-title">Latest projects</h3>

                <h4 className="last-title">Al Jazi Real Estate</h4>
                <p className="paragraph">
                  Al Jazi Real Estate is one of the leading real estate
                  companies in Qatar, offering high-standard housing and
                  commercial solutions and located in prime locations in Doha.
                </p>
                <h5 className="last-title">
                  ARTIC and JW Marriott announce the opening of JW Marriott
                  Berlin
                </h5>
                <p className="paragraph">
                  Al Rayyan Tourism Investment Company (ARTIC) and JW Marriott,
                  part of Marriott Bonvoys global portfolio of 30 extraordinary
                  hotel brands, unveils JW Marriott Hotel Berlin. JW Marriott
                  Hotel Berlin brings guests together through thoughtfully
                  crafted spaces, warm service, and a commitment to well-being.
                  Converting from Hotel Berlin Central District, this
                  announcement marks the completion of the first stage in the
                  propertys transformation to join the iconic JW Marriott brand,
                  set to offer a different perspective to the capital citys
                  hospitality scene.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyProfile;
