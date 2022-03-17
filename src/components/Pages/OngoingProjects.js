import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer3';
import Slider6 from '../Segments/Slider6';
import OngoingProjGrid from '../Segments/OngoingProjGrid';

var bnrimg = require('./../../images/banner/3.jpg');

class OngoingProjects extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    {/* <Slider6/> */}
                    <OngoingProjGrid />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default OngoingProjects;