import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandownerContent.scss'
import GoogleMaps from "simple-react-google-maps"

const imageBg = {
    height:'450px',
    width:'100%',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
  }
var img1 = require('./../../images/gallery/portrait/pic1.jpg');

class ContactUsContent extends React.Component {
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
                <div className="section-full square_shape2 tm-about2-wrap">
                        <div className="container" style={{width:'100%'}}>
                            <div className="section-content " >
                                <div className="row" >
                                    <div className="col-lg-6 col-md-6 p-l0">
                                        <div>
                                            <NavLink to={""}><img src={img1.default} alt="" style={imageBg}/></NavLink>   
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 " >
                                        <div className="m-about-containt text-uppercase text-black p-t30">
                                            {/* <span className="font-30 font-weight-300">About Us</span> */}
                                            <h2  className="font-40">Contact Us</h2>
                                            {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                            <p className="font-weight-200">Manama Developments Ltd.<br/><br/>

                                            House: 108, Road: 12, Block: E,<br/> Banani, Dhaka - 1213<br/>Bangladesh<br/><br/>  

                                            Phone: +88028833630, +88028835749, +8801920626262<br/>
                                            Email: info@manamadevelopments.com<br/><br/>
                                            </p>
                                            {/*      */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* form SEGMENT */}
                <div className='flexContainer'>
                    <div className='flexleft'>
                        <div className="comment-respond bg-gray p-a30" id="respond" style={{width:"100%"}}>  
                        <h1 className="font-weight-400 text-uppercase">Write to us</h1>                          
                        <form className="form" action="" id="commentform" method="post">
                        <p ref={this.myRef} className="comment-form-author">
                                    <label htmlFor="name">Name<span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="name" placeholder="Type your Full name" id="name" />
                                </p>
                                <p className="comment-form-url">
                                    <label htmlFor="email">Email ID</label>
                                    <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Type your email ID" id="email" />
                                </p>
                                <p  className="comment-form-comment">
                                    <label htmlFor="Contact">Message</label>
                                    <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} />
                                </p>
                                <p  className="form-submit">
                                    <button className="site-button black radius-no text-uppercase" type="button"><span className="font-12 letter-spacing-5">Submit</span></button>
                                </p>
                        </form>
                        </div>       
                    </div>
                    <div className='flexright'>
                    </div>
                </div>
                {/* Maps Segment */}
                <div className="section-full">
                        <div className="gmap-outline">
                        <GoogleMaps
                                apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                style={{height: "460px", width: "100%"}}
                                zoom={12}
                                center={{ lat: 23.79123736492596, lng: 90.40815941418309 }}
                                markers={{ lat: 23.79123736492596, lng: 90.40815941418309 }} //optional
                                />
                        </div>
                    </div>
            </>
        );
    }
};

export default ContactUsContent;