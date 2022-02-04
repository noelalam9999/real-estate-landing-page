import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer6';
import Slider6 from './../Segments/Slider6';
import ProjectsCarousel from '../Segments/ProjectsCarousel';
import WhoWeAre6 from './../Segments/WhoWeAre6';
import LocationMap from './../Segments/LocationMap';
import Media from '../Segments/SocialMedia';
import WideBanner from '../Segments/WideBanner';
import ClientContact from '../Segments/ClientContact';

class Home6 extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6 />
                    <ProjectsCarousel />
                    <WhoWeAre6 />
                    <LocationMap/>
                    {/* <Media/> */}
                    <WideBanner/>
                    <ClientContact/>
                </div>

                <Footer6 />
            </>
        );
    };
};

export default Home6;