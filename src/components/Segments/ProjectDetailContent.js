import React, {useEffect,useState} from 'react';
import { NavLink,useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProjectDetailGrid from '../Segments/projectDetailGrid';
import VideoInsta from '../Segments/Video-Insta';
import GoogleMaps from "simple-react-google-maps"
import LatestProjects from './../Segments/LatestProjects';
import GoogleMap from '../Pages/GoogleMap';

const imageBg = {
    height:'700px',
    width:'100%',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
  }
const imageBg2 = {
    height:'450px',
    width:'100%',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
  }
var img1 = require('./../../images/gallery/portrait/pic1.jpg');
var img2 = require('./../../images/gallery/portrait/pic3.jpg');

const projects = [
    {
        image: require('./../../images/gallery/portrait/11.jpg'),
        image2: require('./../../images/gallery/portrait/t1.jpg'),
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
        
        image2: require('./../../images/gallery/portrait/t2.jpg'),
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
        
        image2: require('./../../images/gallery/portrait/t3.jpg'),
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
        image: require('./../../images/gallery/portrait/2.jpg'),
        
        image2: require('./../../images/gallery/portrait/thumb-dew-drop.jpg'),
        title: 'Manama Dew Drops',
        location: 'Block-B Banani',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-dew-drop",
        storied:"14 (Basement + Semi Basement + Ground Floor + 13)",
        apartmentSize:"2680 sft. - 6600 sft. (Approx.)",
        katha:"13.88 Katha",
        facing:"",
        totalApt:"20",
        carParking:"",
        RajukAprovalNumber:""
    },
    
    {
        image: require('./../../images/gallery/portrait/1.jpg'),
        
        image2: require('./../../images/gallery/portrait/thumb-urban-forest.jpg'),
        title: 'Manama Urban Forest',
        location: 'Block-E Banani',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-urban-forest",
        storied:"10 (2 Basements + 1 Semi Basement + Ground Floor + Mezzanine Floor + 9)",
        apartmentSize:"",
        katha:"5.43 Katha",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/14.jpg'),
        
        image2: require('./../../images/gallery/portrait/t4.jpg'),
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
        
        image2: require('./../../images/gallery/portrait/t5.jpg'),
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
        
        image2: require('./../../images/gallery/portrait/t6.jpg'),
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
        
        image2: require('./../../images/gallery/portrait/t7.jpg'),
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
        
        image2: require('./../../images/gallery/portrait/t8.jpg'),
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
        
        image2: require('./../../images/gallery/portrait/t9.jpg'),
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
        
        image2: require('./../../images/gallery/portrait/t10.jpg'),
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
        image2: require('./../../images/gallery/portrait/t11.jpg'),
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
    },
    {
        image: require('./../../images/gallery/portrait/201.jpg'),
        image2: require('./../../images/gallery/portrait/201.jpg'),
        title: 'Manama AH Heritage',
        location: 'Iqbal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-ah-heritage",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/202.jpg'),
        image2: require('./../../images/gallery/portrait/202.jpg'),
        title: 'Manama Ananda Dhara',
        location: 'Adabar',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-ananda-dhara",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/203.jpg'),
        image2: require('./../../images/gallery/portrait/203.jpg'),
        title: 'Manama Arshi',
        location: 'Tajmahal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-arshi",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/204.jpg'),
        image2: require('./../../images/gallery/portrait/204.jpg'),
        title: 'Manama Bellevue',
        location: 'North Gulshan',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-bellevue",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/205.jpg'),
        image2: require('./../../images/gallery/portrait/205.jpg'),
        title: 'Manama Chitra',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-chitra",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/206.jpg'),
        image2: require('./../../images/gallery/portrait/206.jpg'),
        title: 'Manama FR Heights',
        location: 'Shahjahanpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-fr-heights",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/207.jpg'),
        image2: require('./../../images/gallery/portrait/207.jpg'),
        title: 'Manama Iraban ',
        location: 'Tajmahal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-iraban",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/208.jpg'),
        image2: require('./../../images/gallery/portrait/208.jpg'),
        title: 'Manama Iraboti',
        location: 'Iqbal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-iraboti",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/209.jpg'),
        image2: require('./../../images/gallery/portrait/209.jpg'),
        title: 'Manama Isamoti ',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-isamoti",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/210.jpg'),
        image2: require('./../../images/gallery/portrait/210.jpg'),
        title: 'Manama Kathakoli ',
        location: 'Iqbal Road',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-kathakoli",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/211.jpg'),
        image2: require('./../../images/gallery/portrait/211.jpg'),
        title: 'Manama Madhumoti ',
        location: 'Uttara',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-modhumoti",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/212.jpg'),
        image2: require('./../../images/gallery/portrait/212.jpg'),
        title: 'Manama Mahabuba Monjil',
        location: 'Bashundhara',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-mahabuba-monjil",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/213.jpg'),
        
        image2: require('./../../images/gallery/portrait/213.jpg'),
        title: 'Manama MW Heights',
        location: 'Khilgaon',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"manama-mw-heights",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/214.jpg'),
        image2: require('./../../images/gallery/portrait/214.jpg'),
        title: 'Manama Nile',
        location: 'Baridhara',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-nile",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/215.jpg'),
        image2: require('./../../images/gallery/portrait/215.jpg'),
        title: 'Manama Plaza AR ',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"ar-plaza",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/216.jpg'),
        image2: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Manama RAPA PLAZA',
        location: 'Manama RAPA PLAZA',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2',
        slug:"rapa-plaza",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/217.jpg'),
        image2: require('./../../images/gallery/portrait/thumb-domicile.jpg'),
        title: 'Manama Shahanara Domicile ',
        location: 'Banani',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-shahanara-domicile",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/218.jpg'),
        image2: require('./../../images/gallery/portrait/218.jpg'),
        title: 'Manama Shandha ',
        location: 'Dhanmondi',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-shandha",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/219.jpg'),
        image2: require('./../../images/gallery/portrait/219.jpg'),
        title: 'Manama Tista',
        location: 'Uttara',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-tista",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    },
    {
        image: require('./../../images/gallery/portrait/220.jpg'),
        image2: require('./../../images/gallery/portrait/220.jpg'),
        title: 'Manama Turag',
        location: 'Mohammadpur',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1',
        slug:"manama-turag",
        storied:"",
        apartmentSize:"",
        katha:"",
        facing:"",
        totalApt:"",
        carParking:"",
        RajukAprovalNumber:""
    }
]
const ProjectDetailContent = () =>  {
const [details, setDetails] = useState([])
const name = useParams()
console.log(name)
useEffect(()=>{
    window.scrollTo(0, 0)
    let filtered = projects.filter(function(val, i, a) {return val.slug===name.slug;});
setDetails(filtered)
},name)
    

        return (
            <>
           <div className="section-full bg-gray square_shape2 tm-about2-wrap">
                    <div className="container" style={{width:'100%'}}>
                    { details.map((item, index)=>(
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-6 col-md-6 p-l0">
                                    <div>
                                        <NavLink to={""}><img src={item.image2.default} alt="" style={imageBg}/></NavLink>   
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="font-40">{item.title}</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">Architect: <br/><br/>
                                                                        Land Area: {item.katha}<br/><br/>
                                                                        Orientation of Land: {item.facing}<br/><br/>
                                                                        Front Road : <br/><br/>
                                                                        Structural Consultant: <br/><br/>
                                                                        MEP Consultant:<br/><br/>
                                                                        Number of Stories: {item.storied}<br/><br/>
                                                                        Floor Area: {item.apartmentSize}<br/><br/>
                                                                        Number of Basements: <br/><br/>
                                        </p>
                                        {/*      */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                { details.map((item, index)=>(
                <div className="section-full p-tb50 tm-about2-wrap" style={{backgroundColor:'#b0bfc6'}}>
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="p-t50">
                                        <NavLink to={""}><img src={item.image.default} alt="" style={imageBg2}/></NavLink>                                                
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="text-white font-40">FEATURES & AMENITIES</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">Grand 45 Feet High Atrium Entrance<br/><br/>

                                                                        Elegantly Designed Reception Lobby<br/><br/>

                                                                        07 High-Speed International Brand Passenger Elevators & 01 Service/Fireman’s Elevator<br/><br/>

                                                                        11.5 Feet Floor to Floor Height<br/><br/>

                                                                        Efficiently Designed Floor Space Providing Maximum Flexibility for Interior Design<br/><br/>

                                                                        Professionally Designed Landscaping and Building Lighting (Using Only Energy-efficient LED Lighting)<br/><br/>

                                                                        Fully Equipped State-of-the-art Gym<br/><br/>

                                                                        Aesthetically Designed and Spacious Café at Ground Floor<br/><br/>
                                        </p>
                                        {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                      ))}
                <ProjectDetailGrid/>
           
          {/* <GoogleMap/> */}
                
                {/* {Book now SEGMENT} */}
                { details.map((item, index)=>(
                <div className="section-full p-tb50 tm-about2-wrap" style={{backgroundColor:'#b0bfc6'}}>
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="p-t50">
                                        <NavLink to={""}><img src={item.image.default} alt="" style={imageBg2}/></NavLink>                                                
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="comment-respond p-a30" id="respond" style={{width:"100%",backgroundColor:'#b0bfc6'}}>  
                                        <h1 className="font-weight-400 text-uppercase text-white">Book now</h1>                          
                                        <form className="form" action="" id="commentform" method="post">
                                                <p className="comment-form-author text-white">
                                                    <label htmlFor="name">Name<span className="required">*</span></label>
                                                    <input className="form-control" type="text" defaultValue={""} name="name" placeholder="Type your Full name" id="name" />
                                                </p>
                                                <p className="comment-form-url text-white">
                                                    <label htmlFor="email">Email ID</label>
                                                    <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Type your email ID" id="email" />
                                                </p>
                                                <p className="comment-form-comment text-white">
                                                    <label htmlFor="Contact">Message</label>
                                                    <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} />
                                                </p>
                                                <p className="form-submit">
                                                    <button className="site-button black radius-no text-uppercase" type="button"><span className="font-12 letter-spacing-5">Submit</span></button>
                                                </p>
                                        </form>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                <LatestProjects />
            </>
        );
 
};

export default ProjectDetailContent;