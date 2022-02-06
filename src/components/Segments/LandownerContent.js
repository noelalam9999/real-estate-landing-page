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
                                            <h2 className="font-40">Landowners</h2>
                                            {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                            <p className="font-weight-200">Manama Group started its journey as a trading company in 1970. Md. Aynul Haque, founder of the company engaged with trading business with the maximum rate of success. The main importing commodities of the group is fertilizer, coal, wheat, cotton yarn, corn, rice and sugar from all around the world. Its main objective is to fulfill local markets demand at the lowest possible price with the best quality.<br/><br/>

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
                <div className='flexContainer'>
                    <div className='flexleft'>
                            <div className="comment-respond bg-gray p-a30" id="respond" style={{width:"100%"}}>  
                            <h1 className="font-weight-400 text-uppercase">EXPLORE THE OPTIONS</h1>                          
                            <h2 className="font-weight-400 " id="reply-title">Land Information
                            <small>
                                <NavLink to={""} style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                            </small>
                            </h2>
                            <form className="form" action="" id="commentform" method="post">
                                <p className="comment-form-author">
                                    <label htmlFor="name">Name of the Landowner<span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="name" placeholder="Full name of the registered landowner" id="name" />
                                </p>
                                <p className="comment-form-email">
                                    <label htmlFor="contactperson">Contact Person <span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="contactperson" placeholder="Name (if different from the landowner)" id="contactperson" />
                                </p>
                                <p className="comment-form-url">
                                    <label htmlFor="email">Email ID</label>
                                    <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Contact person's email ID" id="email" />
                                </p>
                                <p className="comment-form-comment">
                                    <label htmlFor="Contact">Contact Number</label>
                                    <input className="form-control" name="Contact" placeholder="Contact person's number" id="Contact" defaultValue={""} />
                                </p>
                            </form>
                            </div>       
                        </div>
                    <div className='flexright'>
                        <div className="comment-respond bg-gray p-a30" id="respond" style={{width:"100%"}}>                            
                            <h2 className="font-weight-400" id="reply-title">Landowners Profile
                            <small>
                                <NavLink to={""} style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                            </small>
                            </h2>
                            <form className="form" action="" id="commentform" method="post">
                                <p className="comment-form-author">
                                    <label htmlFor="name">Name of the Landowner<span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="name" placeholder="Full name of the registered landowner" id="name" />
                                </p>
                                <p className="comment-form-email">
                                    <label htmlFor="contactperson">Contact Person <span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="contactperson" placeholder="Name (if different from the landowner)" id="contactperson" />
                                </p>
                                <p className="comment-form-url">
                                    <label htmlFor="email">Email ID</label>
                                    <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Contact person's email ID" id="email" />
                                </p>
                                <p className="comment-form-comment">
                                    <label htmlFor="Contact">Contact Number</label>
                                    <input className="form-control" name="Contact" placeholder="Contact person's number" id="Contact" defaultValue={""} />
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