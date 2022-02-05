import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';

var bgimg = require('./../../images/background/bg-11.jpg');
const members = [
    {
        image: require('./../../images/our-team5/pic1.jpg'),
        fullname: 'David Gray',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic3.jpg'),
        fullname: 'Taylor Roberts',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic4.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic5.jpg'),
        fullname: 'Austin Evon',
        position: 'Co-manager associated',
    }
    ,
    {
        image: require('./../../images/our-team5/pic4.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic5.jpg'),
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
                        <div className="container ">
                        <div className="row">
                                    <div className="col-md-6 col-sm-12 square_shape1 square_shape2">
                                        <div className="wt-left-part m-experts p-t90">
                                            {/* TITLE START */}
                                            <div className="section-head text-left text-white">
                                                <h2 className="text-uppercase font-36">Our experts</h2>
                                                <div className="wt-separator-outer">
                                                    <div className="wt-separator bg-white" />
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <p className="text-white font-18 font-weight-300">Morbi mattis ex non urna condimentum, eget eleif
                                                end diam molestie. Curabitur lorem enim, maximus
                                                non nulla sed, egestas venenatis felis.
                                            </p>
                                      
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-right-part top-100px">
                                            <div className="row">
                                                {members.map((item, index) => (
                                                    <div className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-tb15" key={index}>
                                                    <div className="wt-team-six bg-white">
                                                        <div className="wt-team-media wt-thum-bx wt-img-overlay1">
                                                            <img src={item.image.default} alt=""/>
                                                   
                                                        </div>
                                                    
                                                    </div>
                                                    </div>
                                                    
                                                ))}
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