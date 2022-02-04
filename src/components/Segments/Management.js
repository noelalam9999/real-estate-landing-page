import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const staff = [
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Triangle',
        designation: 'Mirpur',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'building-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Hilltop',
        designation: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'building-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Parabolla',
        designation: 'Badda',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'building-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Rhombus',
        designation: 'Bashundhara R/A',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'building-col'
    }
]

var img1 = require('./../../images/gallery/portrait/pic1.jpg');

class Management extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:false,
            autoplayTimeout:3000,
            margin:30,
            nav:true,
            items:1,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                580:{
                    items:2
                },						
                767:{
                    items:4
                },
                990:{
                    items:4
                }
                }
        };

        return (
            <>
                {/* CEO SEGMENT */}
                <div className="section-full p-tb50 bg-gray square_shape2 tm-about2-wrap">
                        <div className="container" style={{width:'100%'}}>
                            <div className="section-content " >
                                <div className="row" >
                                    <div className="col-lg-1 col-md-6"></div>
                                    <div className="col-lg-3 col-md-6">
                                        <div>                                       
                                            <NavLink to={""}><img src={img1.default} alt="" /></NavLink>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-6"></div>
                                    <div className="col-lg-6 col-md-6 " >
                                        <div className="m-about-containt text-black p-t30">
                                            {/* <span className="font-30 font-weight-300">About Us</span> */}
                                            <h2 className="font-30 text-uppercase">Person name</h2>
                                            <p className="font-20 font-weight-600 text-green text-uppercase">Chief Executive Officer</p>
                                            {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                            <p className="font-weight-200">Md. Aynul Haque, son of Late Alhaj Abu Bakkar Miah, started his business career with commodity trading from the 1970s. Now he is one of the most successful entrepreneur and the founder of the “Manama Group”, a renowned business conglomerate in the country. Mr. Haque contribution to Bangladesh Economy in the genre of import of bulk commodities like fertilizer, coal, wheat, raw cotton, rice etc. and are immense which has generated employment opportunities in the country. He is one of the important member of the Bangladesh Fertilizer Association. Now the name “Manama” inspires trust under his dynamic leadership.<br/><br/>
                                            </p>
                                            {/*      */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Senior MGMT SEGMENT */}
                <div className="section-full  p-tb50 bg-gray square_shape2 tm-about2-wrap">
                    <div className="container"  style={{width:'100%'}}>
                        <div className="section-content">
                            <div className="row" >
                                <div className="col-lg-12 col-md-12">
                                    <OwlCarousel className="owl-carousel owl-carousel-filter  owl-btn-vertical-center" {...options}>
                                        {staff.map((item, index) => (
                                            <div key={index} className={`${item.filter} item fadingcol`}>
                                                <div className="wt-img-effect ">
                                                    <NavLink to={"/project-detail"} >
                                                        <img src={item.image.default} alt="" />
                                                    </NavLink>
                                                    {/* <div className="overlay-bx-2 ">
                                                        <div className="text-red  font-weight-300 p-a40">
                                                            <h2><NavLink to={"/project-detail"} className="text-red font-20 letter-spacing-1 text-uppercase">{item.title}</NavLink></h2>
                                                            <p>{item.description}</p>
                                                            <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <div className="text-black  font-weight-300 ">
                                                            <h2><NavLink to={"/project-detail"} className="text-black font-22 margin-2 letter-spacing-1 text-uppercase">{item.title}</NavLink></h2>
                                                            <h4 className="text-black font-16 text-uppercase">{item.location}</h4>
                                                            <p>{item.description}</p>
                                                            {item.label}
                                                            <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
                                                        </div>
                                                {/* {item.title}
                                                <br/>
                                                {item.location} */}
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>

                {/* our team SEGMENT */}
                <div className="section-full  p-tb50 bg-gray square_shape2 tm-about2-wrap">
                    <div className="container"  style={{width:'80%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                {/* <div className="col-lg-1 col-md-6"></div> */}
                                <div className="col-lg-12 col-md-12">
                                    <div>
                                        <h2 className="font-30 text-uppercase">OUR TEAM</h2>
                                        <NavLink to={""}><img src={img1.default} alt="" style={{width:'100%',height:'500px'}}/></NavLink>
                                    </div>
                                </div>
                                {/* <div className="col-lg-1 col-md-6"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Management;