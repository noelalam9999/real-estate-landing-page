import React from 'react';
import { NavLink } from 'react-router-dom';

const events = [
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Superbrands Award 2020-21',
        location: 'Mirpur',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'event'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Luxe Living At Its Best',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'news'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Training Program On Leadership Excellence And Team Building',
        location: 'Badda',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'event'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Luxe Living At Its Best',
        location: 'Bashundhara R/A',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'news'
    },
    {
      image: require('./../../images/gallery/portrait/pic5.jpg'),
      title: 'Training Program On Leadership Excellence And Team Building',
      location: 'Mirpur',
      description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
      filter: 'event'
    },
    {
      image: require('./../../images/gallery/portrait/pic6.jpg'),
      title: 'Luxe Living At Its Best',
      location: 'Mirpur',
      description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
      filter: 'news'
    }
]

class Card extends React.Component {
    
    render() {
        return (
            <>
            <div className="portfolio-wrap mfp-gallery work-grid clearfix">
              <div className="container-fluid">
                  <div className="row">
                    {events.map((item, index) => (
                      <div key={index} className="col-lg-3 col-md-6 col-sm-12 p-tb40 m-a0">
                          <div className="wt-img-effect">
                            <img src={item.image.default} alt="" style={{height:'550px'}} />
                          </div>
                          <div className="text-black  font-weight-300 p-lr20">
                            <h2><NavLink to={"/project-detail"} className="text-black font-22 margin-2 letter-spacing-1 text-uppercase">{item.title}</NavLink></h2>
                            <h4 className="text-black font-16 text-uppercase">{item.location}</h4>
                            <h6 className="v-button letter-spacing-4 font-12 text-uppercase p-lr20 text-white" style={{backgroundColor:'cadetblue'}}>{item.filter}</h6>
                            <p>{item.description}</p>
                            <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
                          </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
            </>
        );
    }
};

export default Card;