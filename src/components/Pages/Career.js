import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer3';
import Slider6 from '../Segments/SliderCareer';
import ContactUsContent from '../Segments/CareerContent';

class ContactUs6 extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <ContactUsContent />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default ContactUs6;