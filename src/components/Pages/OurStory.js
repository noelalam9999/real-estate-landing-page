import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer3';
import Slider from '../Segments/SliderSingle';
import Story6 from '../Segments/Story6';

var bnrimg = require('./../../images/banner/3.jpg');

class OurStory extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider/>
                    <Story6 />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default OurStory;