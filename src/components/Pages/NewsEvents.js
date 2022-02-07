import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer6';
import Slider6 from '../Segments/Slider6';
import Card from '../Segments/Card';

var bnrimg = require('./../../images/banner/3.jpg');

class NewsEvents extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <Card />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default NewsEvents;