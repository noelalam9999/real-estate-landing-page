import React from 'react';
import { NavLink } from 'react-router-dom';
import Whatsapp from './Whatspp';
class Footer3 extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/logo-dark.png').default };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    render() {

        return (
            <>
                <footer className="footer-bg site-footer footer-large footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                        <NavLink to={"/"}><img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647297990/logo-footer_trkfld.png"} alt="" height={300} /></NavLink>
                                            
                                        </div>
                                      
                                       
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry">
                                        <h4 className="widget-title  text-uppercase"></h4>
                                        <div className="section-content">
                                            <div className="widget-post-bx">
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                      
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                         
                                                        </div>
                                                        <div className="">
                                                            <ul>
                                                                <li className=""></li>
                                                                <li className=""></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={require("./../../images/our-team5/map.png").default} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-right-sidebar"}>Debitis nihil placeat, illum est </NavLink></h6>
                                                        </div>
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">25 Dec</li>
                                                                <li className="post-comment"> 15 comment</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget recent-posts-entry">
                                        <h4 className="widget-title  text-uppercase"></h4>
                                        <div className="section-content">
                                            <div className="widget-post-bx">
                                            <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647301712/telephone_alf0j2.png"} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-right-sidebar"}>+88012345678</NavLink></h6>
                                                        </div>
                                                 
                                                    </div>
                                                </div>
                                            <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647301712/phone-call_z7hmjm.png"} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-right-sidebar"}>+88023456</NavLink></h6>
                                                        </div>
                                                  
                                                    </div>
                                                </div>
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647301712/email_s3m0ed.png"} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-right-sidebar"}>info@manamagrp.com </NavLink></h6>
                                                        </div>
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* TAGS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget recent-posts-entry">
                                        <h4 className="widget-title  text-uppercase"></h4>
                                        <div className="section-content">
                                            <div className="widget-post-bx">
                                            <div className="widget-post clearfix">
                                                    <div style={{marginRight:"10px"}} className="wt-post-socials">
                                                        <img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647303163/facebook_rzsipv.png"} alt="" />
                                                    </div>
                                                    <div style={{marginRight:"10px"}} className="wt-post-socials">
                                                        <img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647303163/linkedin_l8v8w0.png"} alt="" />
                                                    </div>
                                                    <div style={{marginRight:"10px"}} className="wt-post-socials">
                                                        <img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647303163/youtube_bxewmh.png"} alt="" />
                                                    </div>
                                                    <div className="wt-post-socials">
                                                        <img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647303163/instagram_adixpe.png"} alt="" />
                                                    </div>
                                                </div>
                                      
                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="wt-footer-bot-left">
                                    <span className="copyrights-text">© 2022 Manama Group. Designed By Insighters.</span>
                                </div>
                           




                           
                            </div>
                        </div>
                    </div>
                    <Whatsapp/>
                </footer>


            </>
        );
    };
};

export default Footer3;