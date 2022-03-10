import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer6';
import Slider6 from '../Segments/Slider6';
import CompletedProjGrid from '../Segments/CompletedProjGrid';

var bnrimg = require('./../../images/banner/3.jpg');

class CompletedProjects extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
             
                    <CompletedProjGrid />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default CompletedProjects;