import { createClient } from 'contentful';
//  import {contentful} from 'contentful-management'
 //import * as contentfulManagement from 'contentful-management';


 const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });
  
  export async function getNavbarData() {
 
    
    const response = await client.getEntries({
      content_type: 'navbar'
    });
     console.log("navbar from api func",response.items)
    return response.items[0].fields;
   
  }
  
  export async function getHomePageData() {
 
    
    const response = await client.getEntries({
      content_type: 'landingPage',
      'fields.slug': 'home-page',
      include: 3
    });
   //  console.log("from api func",response.items)
    return response.items[0].fields;
   
  }
  

  export async function getAboutPageData() {
 
    
    const response = await client.getEntries({
      content_type: 'landingPage',
      'fields.slug': 'about-us',
      include: 3
    });
   //  console.log("from api func",response.items)
    return response.items[0].fields;
   
  }

