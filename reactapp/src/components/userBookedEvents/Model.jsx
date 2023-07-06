import React from 'react'

import { Link } from "react-router-dom";
import { useState } from "react";
import "./singleEvent.css"
import { format } from 'date-fns'
import TicketDetails from "./ticketDetails";
import './Model.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren,faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation} from '@fortawesome/free-solid-svg-icons';
import a from '../images/cntr2.jpg'
function Model({closemodel}) {
  return (
  //  <div> 
  //   <div className='modelbody'>
  //     <div className="eventimg">
  //       <img src={a} className='eventimg1'></img>
  //     </div>
  //     <div className="eventinfo1">
  //       <span className='eventinfo1title'><b>Event name: </b></span><br/><br/>
  //       <span className='eventinfo1title'><b>Event type: </b></span><br/><br/>
  //       <span className='eventinfo1title'><b>Event date:</b> </span><br/><br/>
  //       <span className='eventinfo1title'><b>Event venue:</b> </span><br/><br/>
  //       <span className='eventinfo1title'><b>Ticket name:</b> </span><br/><br/>
  //       <span className='eventinfo1title'><b>Ticket purchase date:</b> </span><br/><br/>
  //       <span className='eventinfo1title'><b>No of tickets: </b></span><br/><br/>
  //       <span className='eventinfo1title'><b>Total amount paid: </b></span><br/><br/>
  //     </div>
      
  //     
  //   </div>
  //  </div> 
  <div className="qwe">
  <div className="eventcontaine" >
    <div className="eventinf">
      <img src={a} alt="" className="eventinfoim" />
      <div className="abouteven">
        
        
      </div>

    </div>
    <div className="eventbrie">
      <span className="eventtitle" style={{fontSize:'30px', fontWeight:'1000', color:'rgb(233, 231, 229)'}}><b>INSERT COURSE TITLE</b></span><br/><br/>
 
      <FontAwesomeIcon icon = {faBookmark}></FontAwesomeIcon>
      <span className="childtitl"> GENRE:</span><br/>
        {/* <span className="childinf">&ensp;{data.type}</span><br/><br/> */}
      <FontAwesomeIcon icon = {faLocationDot}></FontAwesomeIcon>
      <span className="childtitl"> LOCATION:</span><br/>
        {/* <span className="childinf">&ensp;{data.address} , {data.city} ,{data.country}</span><br/><br/> */}
        <FontAwesomeIcon icon = {faLanguage}></FontAwesomeIcon>
      <span className="childtitl"> CITY:</span><br/>
        {/* <span className="childinf">&ensp;{data.city}</span><br/><br/> */}
      <FontAwesomeIcon icon = {faClock}></FontAwesomeIcon>
      <span className="childtitl"> DATE:</span><br/>
        <span className="childinf">&ensp;
        {/* {format(data.date, "MM/dd/yyyy")} */}
        </span><br/><br/>
      <FontAwesomeIcon icon = {faPeopleArrows}></FontAwesomeIcon>
      <span className="childtitl"> ORGANISER:</span>
        <span className="childinf">&ensp;NEED TO PASS</span><br/><br/><br/>
        <FontAwesomeIcon icon = {faMoneyBills} style={{fontSize:'30px'}}></FontAwesomeIcon>&ensp;
      <span className="eventprice" style={{marginRight:'100px', fontSize:'30px', fontWeight:'600'}}>₹ 100</span>
       <button className="openModalBt" onClick={()=>closemodel(false)}>CLOSE</button>  
    </div>  
  </div>
 
    
</div>
  )
}

export default Model
