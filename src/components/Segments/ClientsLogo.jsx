import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const logos = [
    { image: require('./../../images/client-logo/w1.png') },
    { image: require('./../../images/client-logo/w2.png') },
    { image: require('./../../images/client-logo/w3.png') },
    { image: require('./../../images/client-logo/w4.png') },
    { image: require('./../../images/client-logo/w5.png') },
    { image: require('./../../images/client-logo/w6.png') },

]

class ClientsLogo extends React.Component {

    render() {
        const options = {
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full p-tb40  square_shape4 tm-client-wrap">
                    <div className="container">
                        <div className="section-content">
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <div className="row">
                                    
                                    <div className="col-md-12 col-sm-12">
                                        <div className="section-content bg-white p-tb10">
                                            <OwlCarousel className="owl-carousel home-client-carousel owl-btn-center-v" {...options}>
                                                {logos.map((item, index) => (
                                                    <div className="item" key={index}>
                                                        <div className="ow-client-logo">
                                                            <div className="client-logo client-logo-media">
                                                                <NavLink to={"aboutus"}><img src={item.image.default} alt="" /></NavLink></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </OwlCarousel>

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

export default ClientsLogo;