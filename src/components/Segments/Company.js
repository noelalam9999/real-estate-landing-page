import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const company = [
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

class Company extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
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
                {/* company SEGMENT */}
                    <div className="section-full p-t140 bg-repeat tm-whoweare-wrap" >
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12">
                                        <div className="wt-left m-l60">
                                            <div className="text-uppercase text-black">
                                                <span className="font-40 font-weight-300 text-black">Companies</span>
                                                <p>Manama aspires to weave an unprecedented experience of fine living cocooned in comfort for you. It’s the statement of prestige and elegant Architecture that sets us apart.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-12">
                                        <div className="wt-right m-lr50">
                                            <div className="row">
                                                {company.map((item, index) => (
                                                    <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-tb15" key={index}>
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

export default Company;