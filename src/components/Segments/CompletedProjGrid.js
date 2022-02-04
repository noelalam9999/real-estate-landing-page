import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Residential", filter: ".cat-1" },
    { label: "Commercial", filter: ".cat-2" }
];

const projects = [
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Rapa Plaza',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic6.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic7.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Triangle Concrete House on lake',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
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
                                        <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-12 m-tb0 p-lr0`}>
                                            <div className="wt-img-effect zoom ">
                                                <img src={item.image.default} alt="" style={{height:'650px'}} />
                                                <div className="overlay-bx-2 m-b80" style={{backgroundColor:'white', height:'80px'}}>
                                                    <div className="text-black font-weight-600 p-a20">
                                                        <span><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 text-uppercase">{item.title}</NavLink></span>
                                                        <br/><span>{item.location}</span>
                                                        {/* <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-lr20 text-white" style={{backgroundColor:'cadetblue'}}>Read More</NavLink> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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