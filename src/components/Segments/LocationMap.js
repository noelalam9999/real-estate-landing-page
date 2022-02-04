import React from 'react';
import GoogleMaps from "simple-react-google-maps"

//var bnrimg = require('./../../images/banner/6.jpg');

class LocationMap extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <div className="widget bg-white col-md-4 col-sm-4"></div>
                    <div className="widget bg-white col-md-4 col-sm-4 m-b0">
                        <div className="search-bx ">
                            <form role="search" method="post" action="">
                                <div className="input-group ">
                                    <input name="news-letter" type="text" className="form-control" placeholder="Find a location" style={{borderTopLeftRadius:'20rem',borderBottomLeftRadius:'20rem'}}/>
                                    <span className="input-group-btn">
                                        <button type="button" className="site-button " style={{borderTopRightRadius:'20rem',borderBottomRightRadius:'20rem'}}><i className="fa fa-search" /></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                        <div className="widget bg-white col-md-4 col-sm-4">
                            <div className="widget bg-white col-md-2 col-sm-2">
                            </div>
                            <div className="widget bg-white col-md-2 col-sm-2">
                            </div>
                        </div>
                    <div className="section-full">
                        <div className="gmap-outline">
                        <GoogleMaps
                                apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                style={{height: "660px", width: "100%"}}
                                zoom={15}
                                center={{lat: 23.791020785661722, lng: 90.40813192023626}}
                                markers={{lat: 23.791020785661722, lng: 90.40813192023626}} //optional
                                />
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

            </>
        );
    };
};

export default LocationMap;
//23.791020785661722, 90.40813192023626