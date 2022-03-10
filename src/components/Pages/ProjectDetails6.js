import React from 'react';
import Header from '../Common/Header6';
import Footer6 from '../Common/Footer6';
import Slider6 from '../Segments/Slider6';
import ProjectDetailContent from '../Segments/ProjectDetailContent';

class ProjectDetail6 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider6/>
                    <ProjectDetailContent />
                </div>

                <Footer6 />
            </>
        );
    };
};

export default ProjectDetail6;