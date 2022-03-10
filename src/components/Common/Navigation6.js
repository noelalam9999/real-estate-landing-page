import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };

    render() {
        return (
            <>
                    <ul className=" nav navbar-nav">
                        <li className="">
                            <NavLink to={"/"}>Home</NavLink>
                         
                        </li>
                        <li>
                            <NavLink to={"#"}>About Us</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/ourstory"}>Our Story</NavLink></li>
                                <li><NavLink to={"/vision-mission"}>Vision & Mission</NavLink></li>
                                <li><NavLink to={"/board-of-directors"}>Board Of Directors</NavLink></li>
                                <li><NavLink to={"/message-from-board-of-directors"}>Message from Board Of Directors</NavLink></li>
                                <li><NavLink to={"/management-team"}>Management Team</NavLink></li>
                                <li><NavLink to={"/projects"}>Companies</NavLink></li>
                           
                               
                            </ul>
                        </li>
                        <li>
                            <NavLink to={"#"}>Projects</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/ongoing-projects"}>Ongoing</NavLink></li>
                                <li><NavLink to={"/upcoming-projects"}>Upcoming</NavLink></li>
                                <li><NavLink to={"/completed-projects"}>Completed</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={"/news-events"}>News & Events</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/news-events"}>News</NavLink></li>
                                <li><NavLink to={"/gallery"}>Gallery</NavLink></li>
                          
                            </ul>
                        </li>
                        <li>
                            <NavLink to={"/career"}>Career</NavLink>
                            {/* <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/post-image"}>Image</NavLink></li>
                                <li><NavLink to={"/post-gallery"}>Gallery</NavLink></li>
                                <li><NavLink to={"/post-video"}>Video</NavLink></li>
                                <li><NavLink to={"/post-right-sidebar"}>Right Sidebar</NavLink></li>
                            </ul> */}
                        </li>
                        <li>
                            <NavLink to={"#"}>Contact</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/landowner"}>Land Owners</NavLink></li>
                                <li><NavLink to={"/buyers/#respond"}>Buyers</NavLink></li>
                                <li><NavLink to={"/customers"}>Customers</NavLink></li>
                                <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                            </ul>
                        </li>
                    </ul>
            </>
        );
    };
};

export default Navigation;