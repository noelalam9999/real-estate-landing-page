import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/portrait/board1.jpg'),
    require('./../../images/gallery/portrait/board3.jpg'),
    require('./../../images/gallery/portrait/board2.jpg')
]

class BoardDirector extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
        };
        return (
            <>
                {/* Director1 SEGMENT */}
                <div className="section-full p-tb50 bg-gray square_shape2 tm-about2-wrap">
                        <div className="container" style={{width:'100%'}}>
                            <div className="section-content " >
                                <div className="row" >
                                    <div className="col-lg-1 col-md-6"></div>
                                    <div className="col-lg-3 col-md-6">
                                        <div>
                                        <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                        
                                                <div className="item" >
                                                <div className="ow-img wt-img-effect zoom-slow">
                                                <NavLink to={""}><img src={images[0].default} alt="" /></NavLink>
                                                    </div>
                                                </div>

                                      

                                        </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-6"></div>
                                    <div className="col-lg-6 col-md-6 " >
                                        <div className="m-about-containt text-black p-t30">
                                            {/* <span className="font-30 font-weight-300">About Us</span> */}
                                            <h2 className="font-30 text-uppercase">Md. Aynul Haque</h2>
                                            <p className="font-20 font-weight-600 text-green text-uppercase">Managing Director</p>
                                            {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                            <p className="font-weight-200">Md. Aynul Haque, sonof Late Alhaj Abu Bakkar Miah, started his business career with commodity trading from the 1970s. Now he is one of the most successful entrepreneur and the founder of the “Manama Group”, a renowned business conglomerate in the country. Mr. Haque contribution to Bangladesh Economy in the genre of import of bulk commodities like fertilizer, coal, wheat, raw cotton, rice etc. and are immense which has generated employment opportunities in the country. He is one of the important member of the Bangladesh Fertilizer Association. Now the name “Manama” inspires trust under his dynamic leadership.<br/><br/>
                                            </p>
                                            {/*      */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Director2 SEGMENT */}
                <div className="section-full  p-tb50 bg-gray square_shape2 tm-about2-wrap">
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="font-30 text-uppercase">Abrarul Haque</h2>
                                        <p className="font-20 font-weight-600 text-green text-uppercase">CEO & Director</p>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">Mr. Abrarul Haque, son of Md. Aynul Haque, has been associated with Manama Group for more than a decade and has proven to be instrumental behind the group's growth and success over the years. A graduate of York University, Toronto, Canada, he currently holds the CEO & Director position of the group. He is in charge of the overall marketing & sales activities of the group, and oversees the group's administration function. His business acumen and strategic guidance has enabled Manama Developments Ltd. to expand from being a localized firm to a business having many projects both inside and outside Dhaka and serving a diverse clientele with its offerings. He has also successfully led the group to venture into new business interests in different industries, which has allowed the group to stand out from its peers and differentiate itself from its competitors.<br/><br/>
                                        </p>
                                        {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink> */}
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div>
                                    <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                        
                                        <div className="item" >
                                        <div className="ow-img wt-img-effect zoom-slow">
                                        <NavLink to={""}><img src={images[1].default} alt="" /></NavLink>
                                            </div>
                                        </div>

                              

                                </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Director3 SEGMENT */}
                <div className="section-full  p-tb50 bg-gray square_shape2 tm-about2-wrap">
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div>
                                    <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                        
                                        <div className="item" >
                                        <div className="ow-img wt-img-effect zoom-slow">
                                        <NavLink to={""}><img src={images[2].default} alt="" /></NavLink>
                                            </div>
                                        </div>

                              

                                </OwlCarousel>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="font-30 text-uppercase">Ahasanul Haque</h2>
                                        <p className="font-20 font-weight-600 text-green text-uppercase">DMD & Director</p>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">Mr. Ahasanul Haque, son of Md. Aynul Haque is a graduate from York University, Toronto, Canada. He currently holds the position of DMD at Manama Developments Ltd. and the Director of Manama Group.  He has brought back remarkable business expertise from abroad and Manama continuously strives to enhance it’s operations under his leadership. His constant focus lies in Business Development and to evolve Manama with ideas and knowledges in order to gain competitive edge over its competitors. His acuity and strategic guidance has led Manama               Developments Ltd. grow all over Dhaka city and build strong relationship with their stakeholders.  Manama has embarked into food industry, under the name of Manama Food and Agro Ltd. MFAL is delighted to announce to have received the master franchise of fast food style Thai chain, Thai Express Canada.<br/><br/>
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

export default BoardDirector;