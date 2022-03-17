import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer3';
import Slider6 from '../Segments/SliderOurClients';
import ClientGrid from '../Segments/ClientGrid';

var bnrimg = require('./../../images/banner/3.jpg');

class OurClient extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <ClientGrid />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default OurClient;