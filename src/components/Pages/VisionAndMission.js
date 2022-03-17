import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer3';
import Slider6 from '../Segments/SliderVisionMission';
import VisionMission from '../Segments/VisionMission';

var bnrimg = require('./../../images/banner/3.jpg');

class VisionAndMission extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <VisionMission />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default VisionAndMission;