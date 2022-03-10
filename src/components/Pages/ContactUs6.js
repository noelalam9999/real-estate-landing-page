import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer6';
import Slider6 from '../Segments/SliderContactUs';
import ContactUsContent from '../Segments/ContactUsContent';

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