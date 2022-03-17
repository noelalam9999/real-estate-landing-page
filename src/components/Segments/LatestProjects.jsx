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
        image: require('./../../images/gallery/portrait/11.jpg'),
        title: 'Manama Aranya',
        location: 'Pabna',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-aranya",
        storied:"13 ( Gr. Floor + 13)",
        apartmentSize:"750 sft - 2450 sft",
        katha:"20 katha",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""

    },
    {
        image: require('./../../images/gallery/portrait/12.jpg'),
        title: 'Manama Batayan',
        location: 'Bashundhara, Block-B',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-batayan",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A-2050 sft",
        katha:"5 katha",
        facing:"North",
        totalApt:"8",
        carParking:"8",
        RajukAprovalNumber:"25.390000106.33.1196/18/197 ¯’v Dated: 17/02/2019"
    },
    {
        image: require('./../../images/gallery/portrait/13.jpg'),
        title: 'Manama Chandradwip',
        location: 'Khilgaon, Block-C',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-chandradwip",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A - 1250 sft&Type B - 1300 Sft",
        katha:"5 Katha",
        facing:"North",
        totalApt:"6",
        carParking:"4",
        RajukAprovalNumber:"25.39.0000.122.33.747.19 Dated : 07.09.2020"

    },
    {
        image: require('./../../images/gallery/portrait/14.jpg'),
        title: 'Manama Charulata',
        location: 'Bashundhara, Block-D',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-charulata",
        storied:"10(Gr. Floor + 9)",
        apartmentSize:"Type A-2140 sft",
        katha:"5 katha",
        facing:"North",
        totalApt:"9",
        carParking:"9",
        RajukAprovalNumber:"25.39.0000.106.33.069.19 Dated: 08/08/2019"
    },
    {
        image: require('./../../images/gallery/portrait/15.jpg'),
        title: 'Manama F K Heights',
        location: 'Shyamoli',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-f-k-heights",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/16.jpg'),
        title: 'Manama Hafiz Dream',
        location: 'Khilgaon, Block-B',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-hafiz-dream",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A - 1205 sft&Type B - 1215 Sft",
        katha:"6 katha",
        facing:"North",
        totalApt:"18",
        carParking:"14",
        RajukAprovalNumber:"25.39.0000.122.33.158.20 Dated: 24.08.2020"
    },
    {
        image: require('./../../images/gallery/portrait/17.jpg'),
        title: 'Manama Hamid Heights',
        location: 'Bashundhara, Block-C',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-hamid-heights",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A - 1615 sft&Type B - 1665 Sft",
        katha:"7.5 katha",
        facing:"South",
        totalApt:"18",
        carParking:"18",
        RajukAprovalNumber:"25.390000106.33.691/18/1029 Dated: 16/10/2018"
    },
    {
        image: require('./../../images/gallery/portrait/18.jpg'),
        title: 'Manama Karimun BHC Heritage',
        location: 'Khilgaon, Block-B',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-karimun-bhc-heritage",
        storied:"10(Gr. Floor + 9)",
        apartmentSize:"Type A - 1260 sft&Type B - 1305 Sft",
        katha:"6.36 katha",
        facing:"South",
        totalApt:"18",
        carParking:"16",
        RajukAprovalNumber:"25.39.0000.122.33.716.19 Dated: 17/02/2020"
    },
    {
        image: require('./../../images/gallery/portrait/19.jpg'),
        title: 'Manama Nessa Enclave',
        location: 'Gulshan',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-nessa-enclave",
        storied:"10(2 Basement + Gr. Floor + 9)",
        apartmentSize:"Type A-2520 sft",
        katha:"5.5 katha",
        facing:"North",
        totalApt:"9",
        carParking:"16",
        RajukAprovalNumber:"25.39.0000.116.33.135.20 Dated 09.06.2021"
    },
    {
        image: require('./../../images/gallery/portrait/101.jpg'),
        title: 'Manama Rahman Blue Orbit',
        location: 'Uttara, Sector 3',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-rahman-blue-orbit",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A - 1470 sft&Type B - 1430 Sft",
        katha:"7.5 katha",
        facing:"North",
        totalApt:"18",
        carParking:"18",
        RajukAprovalNumber:"25.39.0000.090.33.194.19-223 Dated: 08/08/2019"
    },
    {
        image: require('./../../images/gallery/portrait/102.jpg'),
        title: 'Manama Tower',
        location: 'Gulshan',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-tower",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
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
                                        {projects.slice(0,6).map((item, index) => (
                                            <div key={index} className={`${item.filter} item fadingcol`}>
                                                <div className="wt-img-effect ">
                                                    <img src={item.image.default} style={{position:"relative"}} alt="" />
                                                    <div className="font-weight-500 p-a20" style={{backgroundColor:'black', height:'80px'}}>
                                                        <span className="font-18 letter-spacing-1 text-uppercase" style={{color:"white"}}>{item.title}</span>
                                                        <br/><span className="font-13 letter-spacing-1 text-uppercase" style={{color:"white"}} >{item.location}</span>
                                                        {/* <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-lr20 text-white" style={{backgroundColor:'cadetblue'}}>Read More</NavLink> */}
                                                    </div>
                                                    <div className="overlay-bx-2 ">
                                                        <div className="line-amiation">
                                                            <div className="text-white  font-weight-300 p-a40">
                                                                <h2><NavLink to={"/project-detail/"+item.slug} className="text-white font-20 letter-spacing-1 text-uppercase">{item.title}</NavLink></h2>
                                                                <p>{item.location}</p>
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