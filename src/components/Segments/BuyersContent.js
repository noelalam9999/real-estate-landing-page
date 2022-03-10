import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandownerContent.scss'

const imageBg = {
    height:'450px',
    width:'100%',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
  }
var img1 = require('./../../images/gallery/portrait/pic1.jpg');

class LandownerContent extends React.Component {
    
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
                                            <h2 className="font-40">BUYERS</h2>
                                            {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                            <p className="font-weight-200">Acquiring an apartment, a home or even an office space is a person's life-long dream. This dream drives him or her to accumulate the required finance slowly and gradually, which is the start of shaping this dream into reality. This relentless pursuit of realizing such a dream can flow from generation to generation. But finally when a space is purchased, has anyone thought to what extent this “dream” is actually fulfilled?<br/><br/>

                                            In 1996 a cement industry under the name of A.R. cement mill Ltd. was founded. A.R. cement mills Ltd. manufactures one of the finest quality cement in Bangladesh.<br/><br/>  

                                            In 1998, Md. Aynul Haque started construction of the most prestigious commercial building in Dhaka under the name of “Rapa Plaza.” On the first day of the millennium, the people of the country were gifted with the most modernize and state of the art commercial building at the heart of Dhanmondi, Dhaka. After the success of Rapa Plaza, the construction of another business address started in 2002 under the name of “Plaza A.R.” and achieved a milestone in Real Estate sector of Bangladesh.<br/><br/>
                                            </p>
                                            {/*      */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* form SEGMENT */}
                <div  className='flexContainer'>
                <div className='flexleft'>
                        <div className="comment-respond bg-gray p-a30" id="respond" style={{width:"100%"}}>  
                        <h1 className="font-weight-400 text-uppercase">Meet the Professionals</h1>                          
                        <h2 className="font-weight-400" id="reply-title">A. Your Valued Interest
                        <small>
                            <NavLink to={""} style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                        </small>
                        </h2>
                        <form  className="form" action="" id="commentform" method="post">
                            <p className="comment-form-author">
                                <label htmlFor="location">Preferred Location<span className="required">*</span></label>
                                <input className="form-control" type="text" defaultValue={""} name="location" placeholder="Enter your preferred location/neighborhodd" id="location" />
                            </p>
                            <p className="comment-form-email">
                                <label htmlFor="Size">Preferred Size <span className="required">*</span></label>
                                <input className="form-control" type="text" defaultValue={""} name="Size" placeholder="Enter your preferred size of unit in sqft" id="Size" />
                            </p>
                            <p className="comment-form-url">
                                <label htmlFor="Parking">Car Parking Requirement</label>
                                <input className="form-control" type="text" defaultValue={""} name="Parking" placeholder="No. of parking required" id="Parking" />
                            </p>
                            <p className="comment-form-comment">
                                <label htmlFor="date">Expected Handover Date</label>
                                <input className="form-control" name="date" placeholder="Enter your expected handover date" id="date" defaultValue={""} />
                            </p>
                            <h2 ref={this.myRef} className="font-weight-400" id="reply-title">B. Other Preferences
                            <small>
                                <NavLink to={""} style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                            </small>
                            </h2>
                            <p className="comment-form-author">
                                <label htmlFor="location">Facing Of The Apartment<span className="required">*</span></label>
                                <input className="form-control" type="text" defaultValue={""} name="location" placeholder="Enter your preferred facing of the unit" id="location" />
                            </p>
                            <p className="comment-form-email">
                                <label htmlFor="Size">Preferred Floor<span className="required">*</span></label>
                                <input className="form-control" type="text" defaultValue={""} name="Size" placeholder="Enter your preferred floor" id="Size" />
                            </p>
                            <p className="comment-form-url">
                                <label htmlFor="Parking">Minimum Number Of Bedrooms</label>
                                <input className="form-control" type="text" defaultValue={""} name="Parking" placeholder="Enter your expected no. of bedrooms" id="Parking" />
                            </p>
                            <p className="comment-form-comment">
                                <label htmlFor="date">Minimum Number Of Bathrooms</label>
                                <input className="form-control" name="date" placeholder="Enter your expected no. of bathrooms" id="date" defaultValue={""} />
                            </p>
                        </form>
                        </div>       
                    </div>
                    <div className='flexright'>
                        <div className="comment-respond bg-gray p-a30" id="respond" style={{width:"100%"}}>                            
                            <h2 className="font-weight-400" id="reply-title">C. Contact Information
                            <small>
                                <NavLink to={""} style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                            </small>
                            </h2>
                            <form className="form" action="" id="commentform" method="post">
                                <p className="comment-form-author">
                                    <label htmlFor="name">Name<span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="name" placeholder="Type your Full name" id="name" />
                                </p>
                                <p className="comment-form-author">
                                    <label htmlFor="Profession">Profession<span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="Profession" placeholder="Type your profession" id="Profession" />
                                </p>
                                <p className="comment-form-email">
                                    <label htmlFor="address">Mailing Adress <span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="Address" placeholder="Type your address" id="Adress" />
                                </p>
                                <p className="comment-form-url">
                                    <label htmlFor="email">Email ID</label>
                                    <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Type your email ID" id="email" />
                                </p>
                                <p className="comment-form-comment">
                                    <label htmlFor="Contact">Contact Number</label>
                                    <input className="form-control" name="Contact" placeholder="Type your contact number" id="Contact" defaultValue={""} />
                                </p>
                                <p className="form-submit">
                                    <button className="site-button black radius-no text-uppercase" type="button"><span className="font-12 letter-spacing-5">Submit</span></button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default LandownerContent;