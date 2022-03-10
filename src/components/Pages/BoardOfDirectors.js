import React from 'react';
import Header6 from '../Common/Header6';
import Footer6 from '../Common/Footer6';
import Slider6 from '../Segments/SliderBoardOfDirectors';
import BoardDirector from '../Segments/BoardDirector';

var bnrimg = require('./../../images/banner/3.jpg');

class BoardOfDirectors extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Slider6/>   
                 <BoardDirector />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default BoardOfDirectors;