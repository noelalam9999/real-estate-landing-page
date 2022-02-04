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
                        <li className="active">
                            <NavLink to={"/"}>Home</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li>
                                    <NavLink to={"./"}>Home-1</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"home-2"}>Home-2</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/home-3"}>Home-3</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/home-4"}>Home-4</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/home-5"}>Home-5</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/home-6"}>Home-6</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={"#"}>About Us</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/ourstory"}>Our Story</NavLink></li>
                                <li><NavLink to={"/vision-mission"}>Vision & Mission</NavLink></li>
                                <li><NavLink to={"/board-of-directors"}>Board Of Directors</NavLink></li>
                                <li><NavLink to={"/message-from-board-of-directors"}>Message from Board Of Directors</NavLink></li>
                                <li><NavLink to={"/management-team"}>Management Team</NavLink></li>
                                <li><NavLink to={"/companies"}>Companies</NavLink></li>
                                <li><NavLink to={"/ourclient"}>Our Clients</NavLink></li>
                                <li><NavLink to={"/contactus"}>CSR</NavLink></li>
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
                            <NavLink to={"#"}>News & Events</NavLink>
                            {/* <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/work-grid"}>Grid</NavLink></li>
                                <li><NavLink to={"/work-masonary"}>Masonry</NavLink></li>
                                <li><NavLink to={"/work-carousel"}>Carousel</NavLink></li>
                                <li><NavLink to={"/project-detail"}>Project Detail</NavLink></li>
                            </ul> */}
                        </li>
                        <li>
                            <NavLink to={"#"}>Career</NavLink>
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
                                <li><NavLink to={"/news-grid"}>Land Owners</NavLink></li>
                                <li><NavLink to={"/news-listing"}>Buyers</NavLink></li>
                                <li><NavLink to={"/news-masonary"}>Customers</NavLink></li>
                                <li><NavLink to={"/news-masonary"}>Contacts</NavLink></li>
                            </ul>
                        </li>
                    </ul>
            </>
        );
    };
};

export default Navigation;