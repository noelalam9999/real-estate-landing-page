import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const imageBg = {
    height:'700px',
    width:'100%',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
  }
const imageBg2 = {
    height:'450px',
    width:'100%',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
  }
var img1 = require('./../../images/gallery/portrait/pic1.jpg');
var img2 = require('./../../images/gallery/portrait/pic3.jpg');

class CustomerContent extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }
    componentDidMount () {
        
        this.myRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    render() {
        return (
            <>
            {/* WHO WE ARE SEGMENT */}
            <div className="section-full p-tb50 tm-about2-wrap" style={{backgroundColor:'#b0bfc6'}}>
                <div className="container" style={{width:'100%'}}>
                    <div className="section-content " >
                        <div className="row" >
                            <div className="col-lg-1 col-md-6"></div>
                            <div className="col-lg-3 col-md-6">
                                <div className="p-t50">
                                    <NavLink to={""}><img src={img2.default} alt="" style={imageBg2}/></NavLink>                                                
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6"></div>
                            <div  className="col-lg-6 col-md-6 " >
                                <div className="m-about-containt text-uppercase text-black p-t30">
                                    {/* <span className="font-30 font-weight-300">About Us</span> */}
                                    <h2 className="text-white font-40">Customers</h2>
                                    {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                    <p ref={this.myRef} className="font-weight-200">We continuously strive to ensure your comfort and satisfaction, which is why we value every feedback from your end. For any customer service or FMS related inquiries regarding your apartment or commercial space, please get in touch at:<br/><br/>

                                    Email: info@manamadevelopments.com<br/><br/>
                                    </p>
                                    {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
};

export default CustomerContent;