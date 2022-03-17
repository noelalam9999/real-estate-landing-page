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
        image: require('./../../images/gallery/portrait/201.jpg'),
        title: 'Manama AH Heritage',
        location: 'Iqbal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-ah-heritage",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/202.jpg'),
        title: 'Manama Ananda Dhara',
        location: 'Adabar',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-ananda-dhara",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/203.jpg'),
        title: 'Manama Arshi',
        location: 'Tajmahal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-arshi",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/204.jpg'),
        title: 'Manama Bellevue',
        location: 'North Gulshan',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-bellevue",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/205.jpg'),
        title: 'Manama Chitra',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-chitra",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/206.jpg'),
        title: 'Manama FR Heights',
        location: 'Shahjahanpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-fr-heights",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/207.jpg'),
        title: 'Manama Iraban ',
        location: 'Tajmahal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-iraban",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/208.jpg'),
        title: 'Manama Iraboti',
        location: 'Iqbal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-iraboti",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/209.jpg'),
        title: 'Manama Isamoti ',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-isamoti",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/210.jpg'),
        title: 'Manama Kathakoli ',
        location: 'Iqbal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-kathakoli",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/211.jpg'),
        title: 'Manama Madhumoti ',
        location: 'Uttara',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-modhumoti",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/212.jpg'),
        title: 'Manama Mahabuba Monjil',
        location: 'Bashundhara',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-mahabuba-monjil",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/213.jpg'),
        title: 'Manama MW Heights',
        location: 'Khilgaon',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-mw-heights",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/214.jpg'),
        title: 'Manama Nile',
        location: 'Baridhara',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-nile",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/215.jpg'),
        title: 'Manama Plaza AR ',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"ar-plaza",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/216.jpg'),
        title: 'Manama RAPA PLAZA',
        location: 'Manama RAPA PLAZA',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"rapa-plaza",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/217.jpg'),
        title: 'Manama Shahanara Domicile ',
        location: 'Banani',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-shahanara-domicile",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/218.jpg'),
        title: 'Manama Shandha ',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-shandha",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/219.jpg'),
        title: 'Manama Tista',
        location: 'Uttara',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-tista",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/220.jpg'),
        title: 'Manama Turag',
        location: 'Mohammadpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-turag",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    }
]
class CompletedProjects extends React.Component {
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
                                    <h2 className="text-uppercase font-36">Completed Projects</h2>
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
                                        {projects.slice(0,6).map((item, index) => (
                                            <div key={index} className={`${item.filter} item fadingcol`}>
                                                <div className="wt-img-effect ">
                                                    <img src={item.image.default}  alt="" />
                                                    <div className="font-weight-500 p-a20" style={{backgroundColor:'black', height:'80px'}}>
                                                        <span className="font-18 letter-spacing-1 text-uppercase" style={{color:"white"}}>{item.title}</span>
                                                        <br/><span className="font-13 letter-spacing-1 text-uppercase" style={{color:"white"}} >{item.location}</span>
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

export default CompletedProjects;