import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer3';
import Slider6 from '../Segments/SliderConsumers';
import CustomerContent from '../Segments/CustomerContent';

class Customer6 extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <CustomerContent />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default Customer6;