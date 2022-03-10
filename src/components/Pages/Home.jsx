import React from 'react';
import Header from '../Common/Header6';
import Footer from '../Common/Footer6';
import Slider from './../Segments/Slider';
import Slider2 from './../Segments/Slider-mobile';
import About from './../Segments/About';
//import CompletedProjects from './../Segments/CompletedProjects';
import LatestProjects from './../Segments/LatestProjects';
import WhoWeAre from './../Segments/WhoWeAre';
import TeamMembers from './../Segments/TeamMembers';
import Blog from './../Segments/Blog';
import Statistics from './../Segments/Statistics';
import Testimonials from './../Segments/Testimonials';
import ClientsLogo from './../Segments/ClientsLogo';
import Highlights from '../Segments/Highlights';
import GoogleMaps from "simple-react-google-maps"
import VideoInsta from '../Segments/Video-Insta';
import StakeholderCategories from '../Segments/StakeholderCategories';
import { Suspense, lazy } from 'react';
class Home extends React.Component {
   
    getComponent(){
        let component;
        
        if(window.innerWidth<500) {
            component = <Slider2/>
        }    
else{
    component = <Slider/>
}
        return component;
    }
    
    
    render() {
        var CompletedProjects = React.lazy(() => import('./../Segments/CompletedProjects'));
        return (
            <>
                <Header />
                <div className="page-content">
                     
                  
                <div>
            {this.getComponent()}
        </div> 

           
          
          
                    
                   
                    <LatestProjects />
                    <Suspense fallback={<div>Loading</div>}>
               <CompletedProjects/>
               </Suspense>
                   <Highlights/>
                   <div className="section-content">
                                            <div className="banner-map">
                                                <GoogleMaps
                                                    apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                                    style={{ height: "500px", width: "100%" }}
                                                    zoom={12}
                                                    center={{ lat: 23.79123736492596, lng: 90.40815941418309 }}
                                                    markers={{ lat: 23.79123736492596, lng: 90.40815941418309 }} //optional
                                                
                                                />
                                            </div>
                                        </div>
                    <VideoInsta colorclass="text-white"/>                    
                 
                    <ClientsLogo />
                    {/* <StakeholderCategories /> */}
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;