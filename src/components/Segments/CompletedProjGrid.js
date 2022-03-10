import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Residential", filter: ".cat-1" },
    { label: "Commercial", filter: ".cat-2" }
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

class OngoingProjGrid extends React.Component {
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
        return (
            <>
                <div className="page-content">
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-b20 tm-work-wrap">
                        <div className="container" style={{width:'100%'}}>
                            <div className="section-content p-b20 " >
                                <div className="row" >
                                    <div className="col-lg-2 col-md-0 " ></div>
                                    <div className="col-lg-8 col-md-6 " >
                                        <div className="m-about-containt text-black p-t30" style={{textAlign:'center'}}>
                                            <h2 className="font-40 text-uppercase ">Projects standing tall</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-0 " ></div>
                                </div>
                            </div>
                        </div>
                        <div className="container m-lr40">
                            {/* PAGINATION START */}
                            <div className="filter-wrap p-b50">
                                <ul className="masonry-filter link-style  text-uppercase">
                                    <li className="active"><a data-filter="*" href="#">All</a></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><a data-filter={item.filter} href="#">{item.label}</a></li>
                                    ))}
                                </ul>
                            </div>
                            {/* PAGINATION END */}
                        </div>
                        {/* GALLERY CONTENT START */}
                        <div className="portfolio-wrap mfp-gallery work-grid clearfix">
                            <div className="container-fluid">
                                <div className="row">
                                    {projects.map((item, index) => (
                                              <NavLink to={"/project-detail/"+item.slug}>
                                        <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-12 m-tb0 p-lr0`}>
                                        <div className="wt-img-effect">
                                            <img src={item.image.default} alt="" style={{position:"relative",height:'650px'}} />
                                                {/* <div className="overlay-bx-2 m-b80" style={{marginBottom:"80px",position:"absolute",zIndex:"1",backgroundColor:'black', height:'80px'}}> */}
                                              
                                                    <div className="text-white font-weight-500 p-a20" style={{zIndex:"3",backgroundColor:'black', height:'80px'}}>
                                                        <span><NavLink to={"/project-detail/"+item.slug} className="font-18 letter-spacing-1 text-uppercase ">{item.title}</NavLink></span>
                                                        <br/><span>{item.location}</span>
                                                        {/* <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-lr20 text-white" style={{backgroundColor:'cadetblue'}}>Read More</NavLink> */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>
            </>
        );
    };
};

export default OngoingProjGrid;