import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const filters = [
//     { label: "Building", filter: ".building-col" },
//     { label: "Interior", filter: ".interior-col" },
//     { label: "Restaurant", filter: ".restaurant-col" }
// ];

const projects = [
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Triangle',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'building-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Hilltop',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'building-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Parabolla',
        location: 'Badda',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'building-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Rhombus',
        location: 'Bashundhara R/A',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'building-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Plateau',
        location: 'Mohammadpur',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'interior-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic6.jpg'),
        title: 'Polygon',
        location: 'Chittagong',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'restaurant-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic7.jpg'),
        title: 'Evangel',
        location: 'Purbachal',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'restaurant-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Skyscraper',
        location: 'Gulshan',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'interior-col'
    }
]

var bgimg = require('./../../images/background/ptn-1.png');

class ProjectsCarousel extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/custom.js');
      
    };
    render() {
        const options = {
            loop:false,
            autoplay:true,
            margin:20,
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
                580:{
                    items:2
                },						
                767:{
                    items:2
                },
                990:{
                    items:3
                }
                }
        };
        return (
            <>
                <div className="section-full p-t90 p-lr80 latest_project-outer square_shape3" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                        {/* TITLE START */}
                        <div className="section-head text-left">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 ">
                                    <h2 className="text-uppercase font-36">WATCH AS WE TURN YOUR LAND INTO A LANDMARK.</h2>
                                    <h4 className="text-uppercase font-16">Collaborate with the best Artisans to turn your dream into a plateau of aesthetic marvel and superior value.</h4>
                                    <div className="wt-separator-outer">
                                        <div className="wt-separator bg-black" />
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-12">
                                    <ul className="btn-filter-wrap">
                                        <li className="btn-filter btn-active" data-filter="*">All Project</li>
                                        {filters.map((item, index) => (
                                            <li key={index} className="btn-filter" data-filter={item.filter}>{item.label}</li>
                                        ))}
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <OwlCarousel className="owl-carousel owl-carousel-filter  owl-btn-vertical-center" {...options}>
                                        {projects.map((item, index) => (
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
                                                            <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-lr20 text-white" style={{backgroundColor:'cadetblue'}}>Read More</NavLink>
                                                        </div>
                                                {/* {item.title}
                                                <br/>
                                                {item.location} */}
                                            </div>
                                        ))}
                                    </OwlCarousel>
                        </div>
                    </div>
            </>
        );
    }
};

export default ProjectsCarousel;