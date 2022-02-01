import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/pic1.jpg'),
    require('./../../images/gallery/pic2.jpg'),
    require('./../../images/gallery/pic3.jpg'),
    require('./../../images/gallery/pic4.jpg'),
    require('./../../images/gallery/pic5.jpg')
]

class About extends React.Component {

    render() {
        const options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            //center: true,
            nav: false,
            dots: true,
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
                <div className="section-full p-t90 bg-gray tm-welcome-warp">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 text-uppercase text-black">
                                    <span className="font-30 font-weight-300">Welcome</span>
                                    <h2 className="font-40">
                                        We are <span className={this.props.colorclass1}>creative</span> <span className={this.props.colorclass2}>Building  - Design</span>  Company
                                    </h2>
                                    <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</p>
                                    <p className="text-lowercase">typefaces and layouts, and in appearance of different general
                                        the content of dummy text is nonsensical.typefaces and layouts,
                                        different general the content of dummy text is nonsensical.
                                    </p>
                                    <NavLink to={"/aboutus"} className="btn-half site-button button-lg m-b15"><span>Read More</span><em /></NavLink>
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <div className="m-carousel-1 m-l100">
                                        <OwlCarousel className="owl-carousel home-carousel-1 owl-btn-vertical-center" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img wt-img-effect zoom-slow">
                                                        <img src={item.default} alt="" />
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                                <strong>18 Year</strong>
                                <span className="text-black">Experience Working</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About;