import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react";
import axios from "axios";
import TicketInfo from "./ticketdetails";
import a from '../images/cntr4.jpg'
// import "./Event.css";
import Footer from '../../components/footer/Footer.js'
// import Modal from './Modal.jsx';
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation } from '@fortawesome/free-solid-svg-icons';
import { useContext, useSyncExternalStore } from "react";
import useFetch from "../../hooks/useFetch";
import TicketBook from "../../components/ticketbBook/TicketBook";
import { format } from "date-fns";
import { AuthContext } from "../../hooks/context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './businessDetails.css'

export default function Business() {

  const location = useLocation();
  const detailsId = location.pathname.split('/')[3];
  console.log(detailsId);
  // const [data,setData]=useState({})

  const { data, loading, error, reFetch } = useFetch(`http://localhost:3000/user/events/details/booked/${detailsId}`);
  console.log(data);
  // console.log(data.eventId);
  const dateStart = new Date(data.date?.startDate); // Replace this with your actual date
  const startDate = dateStart.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dateEnd = new Date(data.date?.endDate); // Replace this with your actual date
  const endDate = dateEnd.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log(data.tickettitle)

  return (

    //  INFO
    //  <img src = {a}></img>
    //  <p>{data.name}</p>  
    //  {/* <p>{data.tickettitle.totalTickets}</p> */}

    //  <p>{data.address} , {data.city},{data.country}</p>

    //  <p> {data.time}</p>
    //  <p>{data.type}</p>
    //  <p>{data.desc}</p>
    //  <p>{data.date}</p>

    //  {data.tickettitle?.map((ticketInfo)=>(
    //    <TicketInfo ticket={ticketInfo}/>
    //   ))}


    <div className="qwir" id = "bd1">
      <Navbar />
      <br /><br /><br /><br /><br />
      <div className="infofo" style={{ color: 'white' }}>INFO</div>
      <div className="eventcontaine" id = "bd2">

        <div className="eventinfo" id = "busdeteventinfo">
          
          <div className="aboutevent">
            <div className="eventtitle" id = "abevtit"><b>{data.name}</b></div><br />
            <div className="eventorganiser" ><b>BY:</b> <b>NEED TO BE PASSED</b></div>
            <span className="eventcontent">
            <p> Event Name: {data.name}</p>
            <p>Event Location: {data.address} , {data.city},{data.country}</p>
            <p>Event Time: {data.time}</p>
            <p>Event Type: {data.type}</p>
            <p>Event Description: {data.desc}</p>
            <p>Event Duration:{startDate} to {endDate}</p>
            </span>
          </div>

        </div>
        <div className="eventbrief" id = "bd3">
          <div className="eventtitle"><b>Ticket Details</b></div>
        {data.tickettitle?.map(ticket=>(<TicketInfo ticket={ticket}/>))}
        </div>
        {/* {openModal && <Modal closeModal={setopenModal} eventId={id} />} */}

      </div>



      
    </div>









    // </>
  )

}