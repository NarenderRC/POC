import React from "react";

import Banner from "../../Components/banner/Banner";
import Alfaisal from "../../Components/alfaisal/Alfaisal";
import Chairman from "../../Components/chairman/Chairman";
import OurHistory from "../../Components/ourhistory/OurHistoy";
import WorldMap from "../../Components/worladmap/WorldMap";
// import Whatwedo from "../../Components/whatwedo/Whatwedo";
const Home = () => {
  return (
    <div>
      <Banner />
      <Alfaisal />
      <Chairman />
      <OurHistory />
      <WorldMap />
      {/* <Whatwedo /> */}
    </div>
  );
};

export default Home;
