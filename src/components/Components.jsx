import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';
import Home6 from './Pages/Home6';

import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import OurStory from './Pages/OurStory';
import VisionAndMission from './Pages/VisionAndMission';
import BoardOfDirectors from './Pages/BoardOfDirectors';
import MessageBOD from './Pages/MessageBOD';
import ManagementTeam from './Pages/ManagementTeam';
import Companies from './Pages/Companies';
import OurClient from './Pages/OurClients';
import Career from './Pages/Career'
import OngoingProjects from './Pages/OngoingProjects';
import UpcomingProjects from './Pages/UpcomingProjects';
import CompletedProjects from './Pages/CompletedProjects';
import ProjectDetail6 from './Pages/ProjectDetails6';
import NewsEvents from './Pages/NewsEvents';

import Landowner from './Pages/Landowner';
import Buyers from './Pages/Buyers';
import Customer6 from './Pages/Customer6';
import ContactUs6 from './Pages/ContactUs6';

import WorkGrid from './Pages/WorkGrid';
import WorkMasonary from './Pages/WorkMasonary';
import WorkCarousel from './Pages/WorkCarousel';
import ProjectDetail from './Pages/ProjectDetail';

import PostImage from './Pages/PostImage';
import PostGallery from './Pages/PostGallery';
import PostVideo from './Pages/PostVideo';
import PostRightSidebar from './Pages/PostRightSidebar';

import Accordian from './Pages/Accordian';
import AlertBox from './Pages/AlertBox';
import Button from './Pages/Button';
import Carousel from './Pages/Carousel';
import ClientLogo from './Pages/ClientLogo';
import Counter from './Pages/Counter';
import GoogleMap from './Pages/GoogleMap';
import IconBox from './Pages/IconBox';
import ListGroup from './Pages/ListGroup';
import ModalPopup from './Pages/ModalPopup';
import PricingTable from './Pages/PricingTable';
import Tabs from './Pages/Tabs';
import Table from './Pages/Table';
import Video from './Pages/Video'
import BlogStandard from './Segments/Blog/BlogStandard';
import Gallery from './Pages/Gallery';
class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/home-2' exact component={Home2} />
                            <Route path='/home-3' exact component={Home3} />
                            <Route path='/home-4' exact component={Home4} />
                            <Route path='/home-5' exact component={Home5} />
                            <Route path='/home-6' exact component={Home6} />

                            <Route path='/aboutus' exact component={AboutUs} />
                            <Route path='/contactus' exact component={ContactUs} />
                            <Route path='/ourstory' exact component={OurStory}/>
                            <Route path='/vision-mission' exact component={VisionAndMission}/>
                            <Route path='/board-of-directors' exact component={BoardOfDirectors}/>
                            <Route path='/message-from-board-of-directors' exact component={MessageBOD}/>
                            <Route path='/management-team' exact component={ManagementTeam}/>
                            <Route path='/projects' exact component={Companies}/>
                            <Route path='/ourclient' exact component={OurClient}/>


                            <Route path='/ongoing-projects' exact component={OngoingProjects} />
                            <Route path='/upcoming-projects' exact component={UpcomingProjects} />
                            <Route path='/completed-projects' exact component={CompletedProjects} />
                            
                            <Route path='/news-events' exact component={NewsEvents} />
                            <Route path='/gallery' exact component={Gallery} />
                            <Route path='/landowner' exact component={Landowner} />
                            <Route path='/buyers' exact component={Buyers} />
                            <Route path='/career' exact component={Career} /> 
                            <Route path='/contact-us' exact component={ContactUs6} /> 
                            <Route path='/customers' exact component={Customer6} /> 
                            <Route path='/completed-projects' exact component={CompletedProjects} />
                            <Route path={`/project-detail/:slug`} exact component={ProjectDetail6} />
                            <Route path={`/blog/:blogID`} exact component={BlogStandard} />
                            <Route path='/work-grid' exact component={WorkGrid} />
                            <Route path='/work-masonary' exact component={WorkMasonary} />
                            <Route path='/work-carousel' exact component={WorkCarousel} />
                            {/* <Route path='/project-detail/' exact component={ProjectDetail} /> */}
                         
                            <Route path='/post-image' exact component={PostImage} />
                            <Route path='/post-gallery' exact component={PostGallery} />
                            <Route path='/post-video' exact component={PostVideo} />
                            <Route path='/post-right-sidebar' exact component={PostRightSidebar} />
                            <Route path='/accordian' exact component={Accordian} />
                            <Route path='/alertbox' exact component={AlertBox} />
                            <Route path='/button' exact component={Button} />
                            <Route path='/carousel' exact component={Carousel} />
                            <Route path='/logoslider' exact component={ClientLogo} />
                            <Route path='/counter' exact component={Counter} />
                            <Route path='/googlemap' exact component={GoogleMap} />
                            <Route path='/iconbox' exact component={IconBox} />
                            <Route path='/lisgroup' exact component={ListGroup} />
                            <Route path='/modalpopup' exact component={ModalPopup} />
                            <Route path='/pricingtable' exact component={PricingTable} />
                            <Route path='/tabs' exact component={Tabs} />
                            <Route path='/table' exact component={Table} />
                            <Route path='/video' exact component={Video} />
                            
                            <Route component={Error} />
                            
                            <Route component={Error} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;