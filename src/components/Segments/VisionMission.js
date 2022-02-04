import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/portrait/pic2.jpg'),
    require('./../../images/gallery/portrait/pic3.jpg'),
    require('./../../images/gallery/portrait/pic4.jpg'),
    require('./../../images/gallery/portrait/pic5.jpg'),
    require('./../../images/gallery/portrait/pic6.jpg'),
]

class VisionMission extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:false,
            autoplayTimeout:3000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
        };
        return (
            <>
                {/* Vision SEGMENT */}
                <div className="section-full bg-gray square_shape2 tm-about2-wrap">
                        <div className="container" style={{width:'100%'}}>
                            <div className="section-content " >
                                <div className="row" >
                                    <div className="col-lg-1 col-md-6"></div>
                                    <div className="col-lg-3 col-md-6">
                                        <div>
                                        <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                <div className="ow-img wt-img-effect zoom-slow">
                                                <NavLink to={""}><img src={item.default} alt="" /></NavLink>
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-6"></div>
                                    <div className="col-lg-6 col-md-6 " >
                                        <div className="m-about-containt text-uppercase text-black p-t30">
                                            {/* <span className="font-30 font-weight-300">About Us</span> */}
                                            <h2 className="font-40">Vision</h2>
                                            {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                            <p className="font-weight-200">To set SHL as an icon for both clients and competitors in the fields of innovation, product quality, service standard, profitability and community work.<br/><br/>
                                            </p>
                                            {/*      */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Mission SEGMENT */}
                <div className="section-full bg-gray square_shape2 tm-about2-wrap">
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="font-40">Mission</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200"><span style={{fontWeight:'bold'}}>For Our Clients:</span> To offer a global touch, maintaining Bangladeshi culture in living and work places, with utmost uncompromising service to our clients and value for money.<br/><br/>
 
                                                                        <span style={{fontWeight:'bold'}}>For Our Investors:</span> To ensure a smooth upward-reasonable trend of return on investment.<br/><br/>

                                                                        <span style={{fontWeight:'bold'}}>For Our Employees:</span>To give employees a feeling of satisfaction by maximizing their potentials and providing means for their personal well-being and career development.<br/><br/>
                                        </p>
                                        {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink> */}
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div>
                                    <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                        {images.map((item, index) => (
                                            <div className="item" key={index}>
                                            <div className="ow-img wt-img-effect zoom-slow">
                                            <NavLink to={""}><img src={item.default} alt="" /></NavLink>
                                                </div>
                                            </div>

                                        ))}

                                    </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values SEGMENT */}
                <div className="section-full bg-gray square_shape2 tm-about2-wrap">
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div>
                                    <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                        {images.map((item, index) => (
                                            <div className="item" key={index}>
                                            <div className="ow-img wt-img-effect zoom-slow">
                                            <NavLink to={""}><img src={item.default} alt="" /></NavLink>
                                                </div>
                                            </div>

                                        ))}

                                    </OwlCarousel>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="font-40">Values</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">Our vision & mission are being made into reality through the belief and implementation of 6 core values. Excellence, Innovation, Commitment, Quality, Valuing People & Customer Satisfaction are embedded in our DNA and drives toward our motto of “setting standards”.<br/><br/>
                                        <span style={{fontWeight:'bold'}}>Excellence: </span>Excellence in every aspect of each project is how SHL aims to win the hearts of their clients, because at the end of the day – home is where the heart is.<br/><br/>
                                        <span style={{fontWeight:'bold'}}>Innovation:</span>Continuous improvement and innovation is key to remaining at the top of the industry. SHL aims to set new standards in each project, so having an innovative mindset is what drives them to go further.<br/><br/>
                                        <span style={{fontWeight:'bold'}}>Commitment:</span>Commitment to their customers and landowners in terms of on-time delivery of their dream projects, with the promised quality and specifications. Commitment to their team members, to maximize their potentials and provide means for their well-being and career development.<br/><br/>
                                        <span style={{fontWeight:'bold'}}>Quality: </span>Quality is the core guiding principle at SHL, it’s what sets them apart. They aim to set new benchmarks of quality without compromise, both in terms of their products and their customer service.<br/><br/>
                                        <span style={{fontWeight:'bold'}}>Value People: </span>SHL value the talent, time and intentions of everyone they work with. They take interest in and embrace each other’s individuality, stay true to who they are, stand up for what they believe in, and are always mindful of others.<br/><br/>
                                        <span style={{fontWeight:'bold'}}>Customer Satisfaction:</span>Ensuring utmost uncompromising service to the clients and value for money is the key of their loyal customer base.<br/><br/>
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

export default VisionMission;