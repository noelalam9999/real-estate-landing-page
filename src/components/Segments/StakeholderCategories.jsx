import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';

var bgimg = require('./../../images/background/12.jpg');
const members = [
    {
        image: require('./../../images/our-team5/pic1.jpg'),
        fullname: 'David Gray',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic2.jpg'),
        fullname: 'Taylor Roberts',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic3.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic4.jpg'),
        fullname: 'Austin Evon',
        position: 'Co-manager associated',
    }
    ,
    {
        image: require('./../../images/our-team5/pic5.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic6.jpg'),
        fullname: 'Austin Evon',
        position: 'Co-manager associated',
    }
]
class Highlights extends React.Component {
    
    render() {
        
        return (
            <>
                <div className="section-full p-t90 p-b50 overlay-wraper bg-top-center bg-parallax tm-facts-wrap" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(" + bgimg.default + ")" }}>
                        <div className="overlay-main opacity-08 bg-black" />
                        <div className="section-content">
                      
                        <div className="row">
                               
                                    <div className="col-md-12 col-sm-12">
                                        <div className="wt-right-part top-100px">
                                            <div className="row">
                                            <div className={` item fadingcol`}>
                                                <div className="wt-img-effect ">
                                                    <img src={members[0].image.default} alt="" />
                                              
                                                </div>
                                            </div>
                                            <div className={` item fadingcol`}>
                                                <div className="wt-img-effect ">
                                                    <img src={members[1].image.default} alt="" />
                                              
                                                </div>
                                            </div>
                                            <div className={` item fadingcol`}>
                                                <div className="wt-img-effect ">
                                                    <img src={members[2].image.default} alt="" />
                                              
                                                </div>
                                            </div>
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

export default Highlights;