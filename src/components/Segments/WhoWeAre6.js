import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const members = [
    {
        image: require('./../../images/our-team5/pic2.jpg'),
        title: 'Prime Locations',
        description: 'We offer a selection from the most lucrative locations across the city. Our project locations are selected intelligently, keeping in mind the things that matter to you most.',
    },
    {
        image: require('./../../images/our-team5/pic3.jpg'),
        title: 'Top Consultants',
        description: 'We engage the leading consultants in their respective fields from both home and abroad, to ensure that every facet of a project is designed to perfection. After all, the best designs can only come from the best minds.',
    },
    {
        image: require('./../../images/our-team5/pic4.jpg'),
        title: 'Highest Quality Materials',
        description: 'We continuously explore material sourcing globally to enhance the comfort and lifestyle of our clients. Each material used in our projects is selected with the utmost attention to quality, suitability and durability.',
    },
    {
        image: require('./../../images/our-team5/pic5.jpg'),
        title: 'Uncompromised Safety',
        description: 'Our priority to safety is second to none. Structural, electro-mechanical and fire safety stand paramount in our planning and construction methodology, in order to ensure your safety in your sanctuary.',
    },
    {
        image: require('./../../images/our-team5/pic1.jpg'),
        title: 'On-time Delivery',
        description: 'Our experienced team of highly qualified engineers and management professionals work relentlessly in perfect synergy. At Shanta, delivering uncompromised quality, on time, has become our mantra.',
    }
]


var img1 = require('./../../images/slider-corner.jpg');
var bgimg = require('./../../images/background/ptn-1.png');

class WhoWeAre6 extends React.Component {
  
    render() {
        const options = {
            loop:true,
            autoplay:true,
            margin:0,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },						
                767:{
                    items:4
                },
                1000:{
                    items:4
                }
            }
        };
        //style={{ backgroundImage: 'url(' + bgimg.default + ')' }}
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-whoweare-wrap" >
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="wt-left m-l60">
                                            <div className="text-uppercase text-black">
                                                <span className="font-40 font-weight-300 text-black">WHY MANAMA DEVELOPMENTS</span>
                                                <h2 className="font-25 m-t40 m-b5" >
                                                    We are creative architecture Studio
                                                </h2>
                                                <p>Manama aspires to weave an unprecedented experience of fine living cocooned in comfort for you. It’s the statement of prestige and elegant Architecture that sets us apart.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="wt-right m-lr50">
                                            <div className="row">
                                                {members.map((item, index) => (
                                                    <div className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-tb15" key={index}>
                                                    <div className="wt-team-six bg-white">
                                                        <div className="wt-img-effect">
                                                            <img src={item.image.default} alt="" style={{width:'300px'}}/>
                                                            <div className="overlay-bx-2 ">
                                                                <div className="text-white  font-weight-300 p-a40">
                                                                <span className="font-20 font-weight-600">{item.title}</span><br/>  
                                                                {item.description}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container m-b150">
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default WhoWeAre6;