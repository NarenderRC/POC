import { useEffect,useState } from 'react';


import CompanyProfile from "../../Components/companyprofile/CompanyProfile";
import SideNav from "../../Components/sidenav/SideNav";
import { getAboutPageData } from "../../contentful";
import "./AboutUs.css";

const AboutUs = () => {

  const [data, setData] = useState([]);
  
  useEffect( () => {
  
    getAboutPageData().then((pages) => {
      setData(pages);
    });
    
  },[])
  
   console.log("aboiouuutt from cccccc:",data)

  return (
    <>
      <div className="aboutus-container-fluid" >
    
        <SideNav banner={data?.banner} data={data?.sideCategories}/>
        <CompanyProfile data={data} />
      </div>
    </>
  );
};

export default AboutUs;
