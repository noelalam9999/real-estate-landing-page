import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer3';
import Slider6 from '../Segments/SliderBuyers';
import BuyersContent from '../Segments/BuyersContent';

class Buyers extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <BuyersContent />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default Buyers;