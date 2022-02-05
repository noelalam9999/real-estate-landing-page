import React from 'react';
import Header from '../Common/Header6';
import Footer from '../Common/Footer';
import Slider from './../Segments/Slider';
import About from './../Segments/About';
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
class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
                
                    <LatestProjects />
               
                   <Highlights/>
                   <div className="section-content">
                                            <div className="banner-map">
                                                <GoogleMaps
                                                    apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                                    style={{ height: "500px", width: "100%" }}
                                                    zoom={12}
                                                    center={{ lat: 34.073280, lng: -118.251410 }}
                                                    markers={{ lat: 34.073280, lng: -118.251410 }} //optional
                                                />
                                            </div>
                                        </div>
                    <VideoInsta colorclass="text-white"/>                    
                 
                    <ClientsLogo />
                    <LatestProjects />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;