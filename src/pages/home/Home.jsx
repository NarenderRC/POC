import { useEffect,useState } from 'react';

import Banner from "../../Components/banner/Banner";
import Alfaisal from "../../Components/alfaisal/Alfaisal";
import Chairman from "../../Components/chairman/Chairman";
import OurHistory from "../../Components/ourhistory/OurHistoy";
import WorldMap from "../../Components/worladmap/WorldMap";
import Whatwedo from "../../Components/whatwedo/Whatwedo";
import CommitmentEducation from "../../Components/commitmnet/CommitmentEducation";
import LatestNews from "../../Components/latesnews/LatestNews";
import Careers from "../../Components/careers/Careers";
import Contact from "../../Components/contact/Contact";
import { getHomePageData } from "../../contentful";

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect( () => {
  
    getHomePageData().then((pages) => {
      setData(pages);
    });
    
  },[])
  
  // console.log("home from newwvcomp:",data)

  return (
    <div>
      {data &&
        data.sections?.map((section, index) => {
          switch (section.fields.internalName) {

            case "banner":
              return <Banner key={index} data={section} />;
            case "About-us":
              return <Alfaisal key={index} data={section} />;
            case "chairman-message":
              return <Chairman key={index} data={section} />;
            case "history-section":
              return <OurHistory key={index} data={section} />;
            case "business-strategy":
              return <WorldMap key={index} data={section} />;
            case "services-section":
              return <Whatwedo key={index} data={section} />;
            case "social-responsibility":
              return <CommitmentEducation key={index} data={section} />;
            case "news":
              return <LatestNews key={index} data={section} />;
              case "careers":
              return <Careers key={index} data={section} />;
              case "home-contact":
              return <Contact key={index} data={section} />;

            default:
              return null;
          }
        })}
      {/* <Banner />
      <Alfaisal />
      <Chairman />
      <OurHistory />
      <WorldMap />
      <Whatwedo />

      <CommitmentEducation />
      <LatestNews />
      <Careers />
      <Contact /> */}
    </div>
  );
};

export default Home;
