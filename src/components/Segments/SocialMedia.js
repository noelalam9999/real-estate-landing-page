import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';


class Media extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            isOpen2: false
        }
        this.openModal = this.openModal.bind(this)
        this.openModal2 = this.openModal2.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    openModal2() {
        this.setState({ isOpen2: true })
    }
    render() {
        return (
            <>
                <div className="page-content">  
                    {/* SECTION CONTENTG START */}
                    <div className="section-full m-tb50 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container m-lr60" style={{width:'100%'}}>
                            <div className="row">

                                            {/* YOUTUBE VIDEO WITH POPUP */}
                                            <div className="col-lg-6 col-md-12 col-sm-12 m-b0">
                                                {/* TITLE START */}
                                                <div className="section-head m-t20">
                                                    <h3 className="font-30 font-weight-300 "><i className="fa fa-youtube-play p-lr10" />Youtube</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="wt-box"  style={{width:'800px'}}>
                                                    <div className="wt-thum-bx wt-img-overlay1 wt-img-effect yt-thum-box" >
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='fafEHMnFe3g' onClose={() => this.setState({ isOpen: false })} />
                                                        <img src="http://img.youtube.com/vi/fafEHMnFe3g/0.jpg" alt="" />
                                                        <div className="overlay-bx">
                                                            <div className="overlay-icon">
                                                            <NavLink to={"#"} onClick={this.openModal} className="mfp-video">
                                                                    <i className="fa fa-youtube-play wt-icon-box-xs" />
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* VIMEO VIDEO WITH POPUP */}
                                            <div className="col-lg-6 col-md-12 col-sm-12 m-b0">
                                                {/* TITLE START */}
                                                <div className="section-head m-t20">
                                                    <h3 className="font-30 font-weight-300 "><i className="fa fa-instagram p-lr10 " />Instagram </h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx overlay-wraper" style={{width:'800px'}}>
                                                    <ModalVideo channel='vimeo' isOpen={this.state.isOpen2} videoId='34741214' onClose={() => this.setState({ isOpen2: false })} />
                                                        <img src="https://3401zs241c1u3z7ulj3z6g7u-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/sean-pollock-PhYq704ffdA-unsplash-scaled-1-980x654.jpg" alt="" />
                                                        {/* <NavLink to={"#"} className="mfp-video video-play-btn">
                                                            <i className="fa fa-play" />
                                                        </NavLink> */}
                                                        {/* <div className="overlay-main bg-black opacity-07" /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
            </>
        );
    };
};

export default Media;