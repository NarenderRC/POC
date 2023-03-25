import React from "react";

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

const Home = () => {
  return (
    <div>
      <Banner />
      <Alfaisal />
      <Chairman />
      <OurHistory />
      <WorldMap />
      <Whatwedo />
      <CommitmentEducation />
      <LatestNews />
      <Careers />
      <Contact />
    </div>
  );
};

export default Home;
