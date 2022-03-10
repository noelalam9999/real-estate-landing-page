import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const filters = [
    { label: "Completed", filter: ".building-col" },
    { label: "Ongoing", filter: ".ongoing" },
    { label: "Upcoming", filter: ".upcoming" }
];

const projects = [
    {
        image: require('./../../images/gallery/portrait/4.jpg'),
        title: 'Manama Tower',
        description: 'Gulshan',
        filter: 'ongoing',
        slug:"manama-tower",
        
    },
    {
        image: require('./../../images/gallery/portrait/1.jpg'),
        title: 'Manama Urban Forest',
        description: 'Banani',
        filter: 'building-col',
        slug:"manama-urban-forest",
    },
    {
        image: require('./../../images/gallery/portrait/2.jpg'),
        title: 'Manama Dew Drop',
        description: 'Banani',
        filter: 'building-col',
        slug:"manama-dew-drop",
    },
    {
        image: require('./../../images/gallery/portrait/3.jpg'),
        title: 'Manama Shahnara Domicile',
        description: 'Banani',
        filter: 'ongoing',
        slug:"manama-shahanara-domicile",
    },
    {
        image: require('./../../images/gallery/portrait/5.jpg'),
        title: 'Rapa Plaza',
        description: 'Dhanmondi',
        filter: 'building-col',
        slug:"rapa-plaza",
    }
]

class LatestProjects extends React.Component {
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
            loop: true,
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
                991:{
                    items:3
                },			
                1152:{
                    items:3
                },
                1360:{
                    items:3
                },
                1366:{
                    items:3
                }	
                }
        };
        return (
            <>
                <div className="section-full p-t90 p-lr80 latest_project-outer square_shape3">
                        {/* TITLE START */}
                        <div className="section-head text-left">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 ">
                                    <h2 className="text-uppercase font-36">Ongoing Projects</h2>
                                    <div className="wt-separator-outer">
                                        <div className="wt-separator bg-black" />
                                    </div>
                                </div>
                                {/* <div className="col-lg-8 col-md-12">
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
                            <OwlCarousel className="owl-carousel owl-carousel-filter  owl-btn-bottom-left" {...options}>
                                        {projects.map((item, index) => (
                                            <div key={index} className={`${item.filter} item fadingcol`}>
                                                <div className="wt-img-effect ">
                                                    <img src={item.image.default} style={{position:"relative"}} alt="" />
                                                    <div className="font-weight-500 p-a20" style={{backgroundColor:'black', height:'80px'}}>
                                                        <span className="font-18 letter-spacing-1 text-uppercase" style={{color:"white"}}>{item.title}</span>
                                                        <br/><span className="font-13 letter-spacing-1 text-uppercase" style={{color:"white"}} >{item.description}</span>
                                                        {/* <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-lr20 text-white" style={{backgroundColor:'cadetblue'}}>Read More</NavLink> */}
                                                    </div>
                                                    <div className="overlay-bx-2 ">
                                                        <div className="line-amiation">
                                                            <div className="text-white  font-weight-300 p-a40">
                                                                <h2><NavLink to={"/project-detail/"+item.slug} className="text-white font-20 letter-spacing-1 text-uppercase">{item.title}</NavLink></h2>
                                                                <p>{item.description}</p>
                                                                <NavLink to={"/project-detail/"+item.slug} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                        </div>
                   
                    </div>
            </>
        );
    }
};

export default LatestProjects;