import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer3';
import Slider6 from '../Segments/SliderManagementTeam';
import Management from '../Segments/Management';

var bnrimg = require('./../../images/banner/3.jpg');

class ManagementTeam extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>
                    <Management />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default ManagementTeam;