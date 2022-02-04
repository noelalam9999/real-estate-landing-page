import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const gapslider = [
    {
        thumb: require('./../../images/our-work/pic9.jpg'),
        full: require('./../../images/gallery/pic1.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic9.jpg'),
        full: require('./../../images/gallery/pic2.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic9.jpg'),
        full: require('./../../images/gallery/pic3.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic9.jpg'),
        full: require('./../../images/gallery/pic1.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic9.jpg'),
        full: require('./../../images/gallery/pic5.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic9.jpg'),
        full: require('./../../images/gallery/pic6.jpg'),
    }
]

class WideBanner extends React.Component {
    render() {
        const options1 = {
            loop:true,
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
                    items:1
                },
                1000:{
                    items:1
                }
            }
        };

        return (
            <>
                <div className="page-content">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb20 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container" style={{width:"100%"}}>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="m-b50">                                        
                                        {/* CAROUSEL */}
                                        <div className="section-content">
                                            <OwlCarousel className="owl-carousel portfolio-carousel-nogap mfp-gallery gallery owl-btn-vertical-center" {...options1}>
                                                {gapslider.map((item, index) => (
                                                    <div className="item" key={index}>
                                                        <div className="ow-portfolio">
                                                            <div className="ow-portfolio-img wt-img-effect">
                                                                <img src={item.thumb.default} alt="" style={{height:"250px"}}/>
                                                                {/* <div className="overlay-bx">
                                                                    <div className="overlay-icon">
                                                                        <a href={item.full.default} className="mfp-link">
                                                                            <i className="fa fa-search-plus wt-icon-box-xs" />
                                                                        </a>
                                                                        <NavLink to={"project-detail"}>
                                                                            <i className="fa fa-external-link wt-icon-box-xs" />
                                                                        </NavLink>
                                                                    </div>
                                                                </div> */}
                                                            </div>
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
                    {/* SECTION CONTENT END */}
                </div>
            </>
        );
    };
};

export default WideBanner;