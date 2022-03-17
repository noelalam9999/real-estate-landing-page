import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header6';
import Footer from '../Common/Footer3';
import Banner from './../Segments/Banner';

const projects = [
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/projects/pic-1.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-6'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic6.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/gallery/pic6.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-6'
    },
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam',
        colwidth: 'col-lg-3'
    }
]

var bnrimg = require('./../../images/banner/1.jpg');

class Gallery extends React.Component {
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
                <Header2 />
                <div className="page-content">
                    <Banner title="Creating bonds over the decades" pagename="Gallery" bgimage={bnrimg.default}/>
                    
                    {/* SECTION CONTENT */}
                    <div className="section-full p-tb90 tm-work-wrap">
                        {/* GALLERY CONTENT START */}
                        <div className="container-fluid">
                            <div className="portfolio-wrap mfp-gallery work-masonry clearfix">
                                <div className="row">
                                {projects.map((item, index) => (
                                        <div key={index} className={`${item.colwidth} masonry-item col-md-6 col-sm-6 m-b30`}>
                                        <div className="wt-img-effect ">
                                            <img src={item.image.default} alt="" />
                                                <div className="overlay-bx-2 ">
                                                    <div className="line-amiation  p-a40">
                                                        <div className="text-white">
                                                            <h2>{item.title}</h2>
                                                          
                                                        </div>
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
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Gallery;