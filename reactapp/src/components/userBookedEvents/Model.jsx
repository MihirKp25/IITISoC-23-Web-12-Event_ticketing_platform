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
      <div className="eventcontaine" >
        {/* <div className="eventinf">
          <img src={a} alt="" className="eventinfoim" />
          <div className="abouteven">


          </div>

        </div> */}
        <div className="eventbrie">
          <span className="eventtitle" style={{ fontSize: '30px', fontWeight: '1000', color: 'rgb(233, 231, 229)' }}><b>INSERT COURSE TITLE</b></span><br /><br />

          <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
          <span className="childtitl"><b>Event name: </b>{ticketinfo.eventId.name}</span><br />
          {/* <span className="childinf">&ensp;{data.type}</span><br/><br/> */}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <span className="childtitl"><b>Event type: </b>{ticketinfo.eventId.type}</span><br />
          {/* <span className="childinf">&ensp;{data.address} , {data.city} ,{data.country}</span><br/><br/> */}
          <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
          <span className="childtitl"><b>Event date:</b> {ticketinfo.eventId.date.startDate} to {ticketinfo.eventId.date.endDate}</span><br />
          {/* <span className="childinf">&ensp;{data.city}</span><br/><br/> */}
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
          <span className="childtitl"><b>Event venue:</b> {ticketinfo.eventId.address}  {ticketinfo.eventId.city}  {ticketinfo.eventId.country}</span><br />
          <span className="childinf">&ensp;
          <b>Ticket name:</b> {ticketinfo.ticketId.name}
          </span><br />
          <span className="childinf">&ensp;
          <b>Ticket name:</b> {ticketinfo.ticketId.type}
        </span><br/>
        <span className="childinf">&ensp;
        <b>Ticket purchase date:</b> {ticketinfo.purchaseDate}
        </span><br/>
        <span className="childinf">&ensp;
        <b>No of tickets: </b>{ticketinfo.quantity}
        </span><br/>
        <FontAwesomeIcon icon={faMoneyBills} style={{ fontSize: '30px' }}></FontAwesomeIcon>&ensp;
        <span className="childinf">&ensp;
        <b>Total amount paid: </b>$ {ticketinfo.quantity * ticketinfo.ticketId.price}
        </span><br/><br />
        <span className="childinf">&ensp;
        <b>Ticket Desc: </b><p>{ticketinfo.ticketId.desc}</p>
        </span><br/>

 

          <FontAwesomeIcon icon={faPeopleArrows}></FontAwesomeIcon>
          <span className="childinf">&ensp;<p>For Further Details, Please check the mail send to your registered EmailId {user.email}</p></span><br /><br /><br />
         
          
          <button className="openModalBt" onClick={() => closemodel(false)}>CLOSE</button>
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
