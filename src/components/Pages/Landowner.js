import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer6';
import Slider6 from '../Segments/SliderLandOwners';
import LandownerContent from '../Segments/LandownerContent';

class Landowner extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <LandownerContent />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default Landowner;