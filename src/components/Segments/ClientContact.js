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
    }
]


var img1 = require('./../../images/slider-corner.jpg');
var bgimg = require('./../../images/background/ptn-1.png');

class ClientContact extends React.Component {
  
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
                    items:3
                },
                1000:{
                    items:3
                }
            }
        };
        //style={{ backgroundImage: 'url(' + bgimg.default + ')' }}
        return (
            <>
                <div className="section-full p-t30 bg-repeat tm-whoweare-wrap" >
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="row">
                                    <div className="wt-right " style={{textAlign:'center'}}>
                                        <div className="row">
                                            {members.map((item, index) => (
                                                
                                            <div className="col-lg-4 col-md-12 col-sm-12" key={index}>
                                                {/* <div className="wt-team-six bg-white">
                                                    <div className="wt-img-effect"> */}
                                                        <img src={item.image.default} alt="" style={{width:'500px'}}/>
                                                        <div className="overlay ">
                                                            <div className="text-white  font-weight-300 p-a40">
                                                            <span className="font-20 font-weight-600">{item.title}</span><br/>  
                                                            </div>
                                                        </div>
                                            </div>                                                
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container m-b30">
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default ClientContact;