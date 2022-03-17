import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';

var bgimg = require('./../../images/background/12.jpg');
const members = [
    {
        image: require('./../../images/our-team5/pic1.png'),
        fullname: 'David Gray',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic2.png'),
        fullname: 'Taylor Roberts',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic3.png'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic4.png'),
        fullname: 'Austin Evon',
        position: 'Co-manager associated',
    }
    ,
    {
        image: require('./../../images/our-team5/pic5.png'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic6.png'),
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
                                                <h2 className="text-uppercase font-36">WHY US</h2>
                                                <div className="wt-separator-outer">
                                                    <div className="wt-separator bg-white" />
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <p className="text-white font-18 font-weight-300">Manama aspires to weave an unprecedented experience of fine living cocooned in comfort for you. It’s the statement of prestige and elegant Architecture that sets us apart.
                                            </p>
                                      
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-right-part top-100px">
                                            <div className="row">
                                                {members.map((item, index) => (
                                                    <div className="col-md-4 col-sm-6 col-xs-6 col-xs-70pc m-tb15" key={index}>
                                                    <div className="wt-team-six">
                                                        <div className="wt-team-media wt-img-overlay1">
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