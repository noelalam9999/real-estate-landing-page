import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer6';
import Slider6 from '../Segments/Slider6';
import Message from '../Segments/Message';

var bnrimg = require('./../../images/banner/3.jpg');

class MessageBOD extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <Message />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default MessageBOD;