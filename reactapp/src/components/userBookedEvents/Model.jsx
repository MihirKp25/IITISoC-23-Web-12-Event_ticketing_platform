import React from 'react'
import { useContext } from "react"
import { AuthContext } from "../../hooks/context/AuthContext"
import { Link } from "react-router-dom";
import { useState } from "react";
import "./singleEvent.css"
import { format } from 'date-fns'

import './Model.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation } from '@fortawesome/free-solid-svg-icons';
import a from '../images/cntr2.jpg'
function Model({ closemodel, ticketinfo }) {

  const {user}=useContext(AuthContext);

  return (
  
    <div className="qwe">
      <div className="eventcontaine" id = "m1">
        {/* <div className="eventinf">
          <img src={a} alt="" className="eventinfoim" />
          <div className="abouteven">


          </div>

        </div> */}
        <div className="eventbrie">
          <span className="eventtitle" id = "m2"><b>INSERT COURSE TITLE</b></span><br /><br />
          <div className = "m3">
          <FontAwesomeIcon icon={faBookmark} style={{color:'red'}}></FontAwesomeIcon>
          <span className="childtitl m3" ><b>Event name: </b>{ticketinfo.eventId.name}</span><br />
          {/* <span className="childinf">&ensp;{data.type}</span><br/><br/> */}
          <FontAwesomeIcon icon={faLocationDot}style={{color:'blue'}}></FontAwesomeIcon>
          <span className="childtitl m3" ><b>Event type: </b>{ticketinfo.eventId.type}</span><br />
          {/* <span className="childinf">&ensp;{data.address} , {data.city} ,{data.country}</span><br/><br/> */}
          <FontAwesomeIcon icon={faLanguage}style={{color:'yellow'}}></FontAwesomeIcon>
          <span className="childtitl m3" ><b>Event date:</b> {ticketinfo.eventId.date.startDate} to {ticketinfo.eventId.date.endDate}</span><br />
          {/* <span className="childinf">&ensp;{data.city}</span><br/><br/> */}
          <FontAwesomeIcon icon={faClock}style={{color:'green'}}></FontAwesomeIcon>
          <span className="childtitl m3" ><b>Event venue:</b> {ticketinfo.eventId.address}  {ticketinfo.eventId.city}  {ticketinfo.eventId.country}</span><br />
          <span className="childinf">&ensp;
          <>Ticket name:</> {ticketinfo.ticketId.name}
          </span><br />
          <span className="childinf">&ensp;
          <>Ticket name:</> {ticketinfo.ticketId.type}
        </span><br/>
        <span className="childinf">&ensp;
        <>Ticket purchase date:</> {ticketinfo.purchaseDate}
        </span><br/>
        <span className="childinf">&ensp;
        <>TNo of tickets: </>{ticketinfo.quantity}
        </span><br/>
        <FontAwesomeIcon icon={faMoneyBills} id = "m8m"style={{color:'green'}}></FontAwesomeIcon>&ensp;
        <span className="childinf">&ensp;
        <>Total amount paid: </>$ {ticketinfo.quantity * ticketinfo.ticketId.price}
        </span><br/><br />
        <span className="childinf">&ensp;
        <>Ticket Desc: </><p>{ticketinfo.ticketId.desc}</p>
        </span><br/>
        </div>
 

          <FontAwesomeIcon icon={faPeopleArrows}style={{color:'red'}}></FontAwesomeIcon>
          <span className="childinf">&ensp;<p>For Further Details, Please check the mail send to your registered EmailId {user.email}</p></span>
         
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <button className="openModalBt" onClick={() => closemodel(false)}>CLOSE</button></div>
        </div>
      </div>

      {/* make a space for qr code */}
      <span></span><br />
      <span></span><br />
      <span></span><br />
      <span></span><br />
      <span></span><br />
      <span></span><br />
      <span></span><br />
      <span></span><br />
      <span></span><br />
      



    </div>
  )
}

export default Model
