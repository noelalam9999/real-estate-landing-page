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
var img2 = require('./../../images/gallery/portrait/4.jpg');
var img3 = require('./../../images/manama-logo-vertical.png');
class Story extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full bg-gray square_shape2 tm-about2-wrap">
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
                                            <h2 className="font-40">How we created</h2>
                                            {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                            <p className="font-weight-200">MManama Group started its journey as a trading company in 1970. Md. Aynul Haque, founder of the company engaged with trading business with the maximum rate of success. The main importing commodities of the group is fertilizer, coal, wheat, cotton yarn, corn, rice and sugar from all around the world. Its main objective is to fulfill local markets demand at the lowest possible price with the best quality.<br/><br/>

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
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="text-white font-40">WHO WE ARE</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">In 2004 Manama Group formed a private limited company, Manama Developments Ltd. and introduced themselves as a Real Estate Company in Bangladesh. From the very beginning Manama Developments Ltd. widely renowned for its commitment and excellence in the real estate sector of the country.<br/><br/>
 
                                        Manama Developments Ltd. has gained years of experience in real estate concept and has unmatched reputation for delivering quality products and services across all its business. We are one of the leading real estate brands in Bangladesh and has a proven track record of delivering innovative and quality products that exceeds customer expectations and leads the market.<br/><br/>

                                        Every individual wishes to own an apartment or a business space in our crowded cities. To make their dream into reality they are working hard to make financial savings. Manama Developments Ltd. is also working hard to fulfill these individuals’ dream by providing contemporary, elegant designs and structurally sound residential and commercial complexes.<br/><br/>
                                        </p>
                                        {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* APPROACH SEGMENT*/}
                <div className="section-full bg-black square_shape2 square_shape1 tm-about2-wrap">
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-2 col-md-0 " ></div>
                                <div className="col-lg-8 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className=" text-white font-40">APPROACH</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200 text-white">Manama Developments Ltd, steadily growing Real Estate Company is known for its quality and excellence. At present owning a flat in this over crowded city of ours is like dream as the dream home concept is becoming narrow. Even in this narrower concept, we are trying our best to create the dream home and fulfill the demand. The apartments of Manama are truly dynamic. It is our philosophy to fulfill the promises that we make to our clients.<br/><br/>
 
                                        Manama Developments Ltd is a emerging enterprise that not only meets the standard of today’s advancing technology but also exceeds them, we are moving forward with a vision of excellence moving construction excellence for ‘’good to great’’ so that Manama is always considered to be extraordinary. As we continue to meet the goals & challenges, we also keep our focus on you are not purchasing our product but also you are become the part of Manama Family.<br/><br/>

                                        We Hope that throughout your communication with us you will always find our door open for all relevant important affairs. It is our motto to present you, ‘’ a touch of your dream’’.<br/><br/>
                                        </p>
                                        {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink> */}
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-0 " ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LOGO SEGMENT */}
                <div className="section-full bg-gray tm-about2-wrap">
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="p-tb50">
                                    <NavLink to={""}><img src={img3.default} alt="" /></NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="font-40">OUR LOGO</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">Manama Developments Ltd, steadily growing Real Estate Company is known for its quality and excellence. At present owning a flat in this over crowded city of ours is like dream as the dream home concept is becoming narrow. Even in this narrower concept, we are trying our best to create the dream home and fulfill the demand. The apartments of Manama are truly dynamic. It is our philosophy to fulfill the promises that we make to our clients.<br/><br/>
 
                                        Manama Developments Ltd is a emerging enterprise that not only meets the standard of today’s advancing technology but also exceeds them, we are moving forward with a vision of excellence moving construction excellence for ‘’good to great’’ so that Manama is always considered to be extraordinary. As we continue to meet the goals & challenges, we also keep our focus on you are not purchasing our product but also you are become the part of Manama Family.<br/><br/>

                                        We Hope that throughout your communication with us you will always find our door open for all relevant important affairs. It is our motto to present you, ‘’ a touch of your dream’’.<br/><br/>
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

export default Story;