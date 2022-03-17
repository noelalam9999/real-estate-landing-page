import React from 'react';
import Navigation6 from '../Common/Navigation6';
import { NavLink } from 'react-router-dom';

class Header2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: require('./../../images/manama-logo.png') };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll,'true');
      }

    state = { isSearchActive: false, isMenuActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    handleMenuToggle = () => {
        this.setState({ isMenuActive: !this.state.isMenuActive });
    };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });
    };

    handleScroll = (event) => {
        var heightBound = window.height * 0.8
        if (heightBound > window.scrollY) {
            console.log("scrolled")
          document.getElementsByClassName(".main-bar").style.position = "fixed"
        } else {
          document.getElementsByClassName(".main-bar").style.position = "relative";
        }
      };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
            this.setState({ logo: logopath });
        };
    }

    render() {
        const isSearchActive = this.state.isSearchActive;
        const isMenuActive = this.state.isMenuActive;

        return (
            <>  
          
             <header className="site-header header-style-1  nav-wide mobile-responsive-navigation">
            <div className="sticky-header main-bar-wraper">
                <div className="bg-grey ">
                    <div className="container">
                    
                        {/* ETRA Nav */}
                      
                  
                        <div  className="extra-nav2 header-top-info">
                            <div className="extra-cell">
                                <div className="wt-topbar-right clearfix top-bar">
                                    {/* <ul className="social-bx list-inline pull-right">
                                        <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com" className="fa fa-facebook" /></li>
                                        <li><a rel="noreferrer" target="_blank" href="https://twitter.com" className="fa fa-twitter" /></li>
                                        <li><a rel="noreferrer" target="_blank" href="https://in.linkedin.com" className="fa fa-linkedin" /></li>
                                        <li><a rel="noreferrer" target="_blank" href="https://rss.com" className="fa fa-rss" /></li>
                                        <li><a rel="noreferrer" target="_blank" href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                                        <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/" className="fa fa-instagram" /></li>
                                    </ul> */}
                                    <ul className="list-unstyled list-inline e-p-bx pull-right">
                                        <li><i className="fa fa-envelope" />Info@gmail.com</li>
                                        <li><i className="fa fa-phone" />(654) 123-4567</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* ETRA Nav */}
                     
                        {/* SITE Search */}
                       
                        {/* STYLE SWITCHER  ======= */}
                     
                        {/* STYLE SWITCHER END ==== */}
                    </div>
                </div>
            </div>
        </header>
                <header className={`${isMenuActive ? "active" : null} site-header header-style-1 header-fixed nav-wide mobile-responsive-navigation`}>
                    <div className="sticky-header main-bar-wraper">
                        <div className="main-bar bg-white p-t10">
                            <div className="container">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo.default} width={250} height={70} alt="Modern" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button onClick={this.handleMenuToggle} id="mobile-responsive-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        
                                        <NavLink to={"#"} className="site-search-btn" onClick={this.handleSearchToggle}> 
                                            <i className="fa fa-search" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* SITE Search */}
                                <div id="search" className={isSearchActive ? "open" : null}>
                                    <span className="close" onClick={this.handleSearchToggle} />
                                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                        <div className="input-group">
                                            <input defaultValue="" name="q" type="search" placeholder="Type to search" />
                                            <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search" /></button></span>
                                        </div>
                                    </form>
                                </div>
                                {/* MAIN Vav */}
                                <div className="header-nav navbar-collapse collapse">
                                    <Navigation6 />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

              
            </>
        );
    };
};

export default Header2;

