import React from 'react';
import { useState } from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

import { useHistory} from "react-router-dom";

import Footer from '../../components/footer/Footer.js';
import Genre from '../../components/GenreLandingPage/GenreLAndingPage';
import Event from '../../components/EventsLandPage/EventLandPage';
import Upcoming from '../../components/UpcomingEvents/UpcomingEvents';
import { useContext } from 'react';
import { SearchContext } from '../../hooks/context/SearchContext';
import { AuthContext } from '../../hooks/context/AuthContext';


export default function Home() {
  //all functions
  const {user}=useContext(AuthContext);
  const [city, setCity] = useState("");
  // const [openDate, setOpenDate] = useState(false);
  // const [dates, setDates] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   }
  // ]);

  const navigate=useHistory(); 
  const {dispatch}=   useContext(SearchContext);

  const onSearch = () => {
    dispatch({type:"NEW_SEARCH" , payload :{city}});
    navigate.push("/list", { state:  {city}  });
  };
  


  return (


    < div className='home'>
      <Navbar />
      <div className="contone">
        <div className="contonecont">
          <span className='lonetit' style={{ fontWeight: '900', fontSize: '65px' }}> <b> {user && "Hi "+user.firstname}</b><br/><b>Have any <span style={{ color: "red" }}>weekend plans?</span></b></span><br /><br />
          <span className="lonecontent" style={{ fontWeight: '300' , fontSize:'15px'}}>Looking for something to do lately? Whether you're a local, new in town or just cruising <br />through we've got loads of great tips and events-from thrilling concerts to thought-provoking <br />conferences, we have a wide variety of experiences for you to choose from.You can explore<br /> by location, popularity, free stuff... you got this. Ready?</span><br /><br />
          <span className="clicknow" style={{ fontWeight: '300' }}>Book an event now!<FontAwesomeIcon icon={faArrowRight} className='arrowright' /></span>
        </div>
         {/* SEARCHBAR */}
        
         <div className="input-group" id = "#searchbox" style={{marginLeft:'560px', paddingTop:'60px', width:'500px'}}>
          <input type="text" name="text" className="input" id="Email"  placeholder="search by location, date or timing!" onChange={(evt)=>{setCity(evt.target.value)}}/>
          <button className="button--submit"onClick={onSearch} >SEARCH</button>
        </div>

      </div>
      <div className="contthreecont">

       

       {/* UPCOMING EVENTS */}

        <span><FontAwesomeIcon icon={faMapLocationDot} style={{ paddingTop: '70px', fontSize: '27px', paddingLeft: '137px', paddingRight: '30px' }} /></span>
        <span className='idli'>FIND NEW UPCOMING EVENTS!</span><br /><span className="imlimli">Step out or stay in. Make a plan. Have a look at a few locations. </span>

        <Upcoming/>  

        <a style={{ color: 'white', textDecoration: 'none'  }} href="/Book"><span className="imlimli idlidli" >and more.... </span></a><br />

        <span><FontAwesomeIcon icon={faArrowTrendUp} style={{ paddingTop: '70px', fontSize: '27px', paddingLeft: '137px', paddingRight: '30px' }} /></span>


        {/* EVENTS LIST */}

        <span className='idli'>TRENDING EVENTS</span><br /><span className="imlimli">Don't miss out on these trending events!! </span>
        <Event/>
        <a style={{ color: 'black', textDecoration: 'none' }} href="/Book"><span className="imlimli idlidli" >and more.... </span></a><br />

        {/* BROWSE BY GENRES */}

        <span><FontAwesomeIcon icon={faList} style={{ paddingTop: '70px', fontSize: '27px', paddingLeft: '137px', paddingRight: '30px' }} /></span>
        <span className='idli'>BROWSE EVENTS BY GENRES</span><br /><span className="imlimli">Check out your favourite genres!! </span>
        <Genre />


      </div>

      <div className="conttwo">
        <div className="conttwocont">
          <span className='ltwotit' style={{ fontWeight: '900', fontSize: '65px', color: 'white' }}><b>Got an act <span style={{ color: "#3978ff" }}>worth showing?</span></b></span><br /><br />
          <span className="ltwocontent" style={{ fontWeight: '300', color: 'white' }}>Publish your event in under five minutes.
            Craft unique experiences using our simple<br /> and powerful event platform. Create, ticket and host both on-ground and digital<br /> events on a platform used by millions of live event loving fans.</span><br /><br />
          <span className="clicknoq" style={{ fontWeight: '300' }}><a href = "/event" style={{textDecoration:'none'}}>Create event!<FontAwesomeIcon icon={faArrowRight} className='arrowright' /></a></span>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="contfour">
        <div className="contfourcont">
          <b><span className='ltwotit' style={{ fontWeight: '900', fontSize: '65px', color: 'white' }}><b><span style={{ color: "rgb(192, 255, 57)" }}>EVENTBRITE: </span>Ticketing<br /> made easy!</b></span><br /><br /></b>
          <span className="ltwocontent" style={{ fontWeight: '300', color: 'white' }}>Publish your event in under five minutes.
            Craft unique experiences using our simple<br /> and powerful event platform. Create, ticket and host both on-ground and digital<br /> events on a platform used by thousands of live event loving fans.</span><br /><br />
          <span className="clicknoe" style={{ fontWeight: '300' }}>More about us!<FontAwesomeIcon icon={faArrowRight} className='arrowright' /></span>

        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
  )
}
