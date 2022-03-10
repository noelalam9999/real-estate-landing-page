import React from 'react';
import GoogleMaps from "simple-react-google-maps"
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/2.jpg');

class GoogleMap extends React.Component {
    render() {
        return (
            <>
      
                                        <div className="section-content">
                                            <div className="banner-map">
                                                <GoogleMaps
                                                    apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                                    style={{ height: "350px", width: "100%" }}
                                                    zoom={12}
                                                    center={{ lat: 34.073280, lng: -118.251410 }}
                                                    markers={{ lat: 34.073280, lng: -118.251410 }} //optional
                                                />
                                            </div>
                                        </div>
                                   
            </>
        );
    };
};

export default GoogleMap;