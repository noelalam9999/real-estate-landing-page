import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Residential", filter: ".cat-1" },
    { label: "Commercial", filter: ".cat-2" }
];

const projects = [
    {
        image: require('./../../images/gallery/portrait/11.jpg'),
        title: 'Manama Aranya',
        location: 'Pabna',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-aranya",
        storied:"13 ( Gr. Floor + 13)",
        apartmentSize:"750 sft - 2450 sft",
        katha:"20 katha",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""

    },
    {
        image: require('./../../images/gallery/portrait/12.jpg'),
        title: 'Manama Batayan',
        location: 'Bashundhara, Block-B',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-batayan",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A-2050 sft",
        katha:"5 katha",
        facing:"North",
        totalApt:"8",
        carParking:"8",
        RajukAprovalNumber:"25.390000106.33.1196/18/197 ¯’v Dated: 17/02/2019"
    },
    {
        image: require('./../../images/gallery/portrait/13.jpg'),
        title: 'Manama Chandradwip',
        location: 'Khilgaon, Block-C',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-chandradwip",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A - 1250 sft&Type B - 1300 Sft",
        katha:"5 Katha",
        facing:"North",
        totalApt:"6",
        carParking:"4",
        RajukAprovalNumber:"25.39.0000.122.33.747.19 Dated : 07.09.2020"

    },
    {
        image: require('./../../images/gallery/portrait/14.jpg'),
        title: 'Manama Charulata',
        location: 'Bashundhara, Block-D',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-charulata",
        storied:"10(Gr. Floor + 9)",
        apartmentSize:"Type A-2140 sft",
        katha:"5 katha",
        facing:"North",
        totalApt:"9",
        carParking:"9",
        RajukAprovalNumber:"25.39.0000.106.33.069.19 Dated: 08/08/2019"
    },
    {
        image: require('./../../images/gallery/portrait/15.jpg'),
        title: 'Manama F K Heights',
        location: 'Shyamoli',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-f-k-heights",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/16.jpg'),
        title: 'Manama Hafiz Dream',
        location: 'Khilgaon, Block-B',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-hafiz-dream",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A - 1205 sft&Type B - 1215 Sft",
        katha:"6 katha",
        facing:"North",
        totalApt:"18",
        carParking:"14",
        RajukAprovalNumber:"25.39.0000.122.33.158.20 Dated: 24.08.2020"
    },
    {
        image: require('./../../images/gallery/portrait/17.jpg'),
        title: 'Manama Hamid Heights',
        location: 'Bashundhara, Block-C',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-hamid-heights",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A - 1615 sft&Type B - 1665 Sft",
        katha:"7.5 katha",
        facing:"South",
        totalApt:"18",
        carParking:"18",
        RajukAprovalNumber:"25.390000106.33.691/18/1029 Dated: 16/10/2018"
    },
    {
        image: require('./../../images/gallery/portrait/18.jpg'),
        title: 'Manama Karimun BHC Heritage',
        location: 'Khilgaon, Block-B',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-karimun-bhc-heritage",
        storied:"10(Gr. Floor + 9)",
        apartmentSize:"Type A - 1260 sft&Type B - 1305 Sft",
        katha:"6.36 katha",
        facing:"South",
        totalApt:"18",
        carParking:"16",
        RajukAprovalNumber:"25.39.0000.122.33.716.19 Dated: 17/02/2020"
    },
    {
        image: require('./../../images/gallery/portrait/19.jpg'),
        title: 'Manama Nessa Enclave',
        location: 'Gulshan',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-nessa-enclave",
        storied:"10(2 Basement + Gr. Floor + 9)",
        apartmentSize:"Type A-2520 sft",
        katha:"5.5 katha",
        facing:"North",
        totalApt:"9",
        carParking:"16",
        RajukAprovalNumber:"25.39.0000.116.33.135.20 Dated 09.06.2021"
    },
    {
        image: require('./../../images/gallery/portrait/101.jpg'),
        title: 'Manama Rahman Blue Orbit',
        location: 'Uttara, Sector 3',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-rahman-blue-orbit",
        storied:"10(Basement + Gr. Floor + 9)",
        apartmentSize:"Type A - 1470 sft&Type B - 1430 Sft",
        katha:"7.5 katha",
        facing:"North",
        totalApt:"18",
        carParking:"18",
        RajukAprovalNumber:"25.39.0000.090.33.194.19-223 Dated: 08/08/2019"
    },
    {
        image: require('./../../images/gallery/portrait/102.jpg'),
        title: 'Manama Tower',
        location: 'Gulshan',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-tower",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    }
]

class OngoingProjGrid extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/custom.js');
      
    };
    render() {
        return (
            <>
                <div className="page-content">
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-b20 tm-work-wrap">
                        <div className="container" style={{width:'100%'}}>
                            <div className="section-content p-b20 " >
                                <div className="row" >
                                    <div className="col-lg-2 col-md-0 " ></div>
                                    <div className="col-lg-8 col-md-6 " >
                                        <div className="m-about-containt text-black p-t30" style={{textAlign:'center'}}>
                                            <h2 className="font-40 text-uppercase ">Projects in progress</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-0 " ></div>
                                </div>
                            </div>
                        </div>
                        <div className="container m-lr40">
                            {/* PAGINATION START */}
                            <div className="filter-wrap p-b50">
                                <ul className="masonry-filter link-style  text-uppercase">
                                    <li className="active"><a data-filter="*" href="#">All</a></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><a data-filter={item.filter} href="#">{item.label}</a></li>
                                    ))}
                                </ul>
                            </div>
                            {/* PAGINATION END */}
                        </div>
                        {/* GALLERY CONTENT START */}
                        <div className="portfolio-wrap mfp-gallery work-grid clearfix">
                            <div className="container-fluid">
                                <div className="row">
                                    {projects.map((item, index) => (
                                        <NavLink to={"/project-detail/"+item.slug}>
                                        <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-6 m-tb0 p-lr0`}>
                                            <div className="wt-img-effect">
                                            <img src={item.image.default} alt="" style={{position:"relative",height:'650px'}} />
                                                {/* <div className="overlay-bx-2 m-b80" style={{marginBottom:"80px",position:"absolute",zIndex:"1",backgroundColor:'black', height:'80px'}}> */}
                                              
                                                    <div className="text-white font-weight-500 p-a20" style={{zIndex:"3",backgroundColor:'black', height:'80px'}}>
                                                        <span><NavLink to={"/project-detail/"+item.slug} className="font-18 letter-spacing-1 text-uppercase ">{item.title}</NavLink></span>
                                                        <br/><span>{item.location}</span>
                                                        {/* <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-lr20 text-white" style={{backgroundColor:'cadetblue'}}>Read More</NavLink> */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>
            </>
        );
    };
};

export default OngoingProjGrid;