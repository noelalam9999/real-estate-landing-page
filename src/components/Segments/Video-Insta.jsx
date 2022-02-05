import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const blogs = [
    {
        image: require('./../../images/blog/landscap-half/pic1.jpg'),
        title: 'Title of first blog post',
        date: '02 Jan 2022',
    },
    {
        image: require('./../../images/blog/landscap-half/pic2.jpg'),
        title: 'Title of first blog post',
        date: '04 Jan 2022',
    }
]

var featuredblog = require('./../../images/blog/square/pic1.jpg');
var bgimg = require('./../../images/background/ptn-1.png');

class VideoInsta extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-blog-wrap" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                       
                            {/* TITLE END */}
                            <div className="row">
                                
                                <div className="col-md-6 col-sm-12">
                                <div className="section-head text-left">
                                <h2 className="text-uppercase font-36">Latest Blog</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                                            </div>
                                            <div className="m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                              
                                                </div>
                                                {/* TITLE END */}
                                                <iframe src="https://www.youtube.com/embed/fafEHMnFe3g" width={560} height={315} />
                                            </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                <div className="section-head text-left">
                                <h2 className="text-uppercase font-36">Latest Blog</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                                    <div className="overlay-wraper bg-no-repeat bg-cover height-315px m-b30" style={{ backgroundImage: 'url(' + featuredblog.default + ')' }}>
                                      
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </>
        );
    }
};

export default VideoInsta;