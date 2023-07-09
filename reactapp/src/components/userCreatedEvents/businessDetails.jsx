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

  const { data, loading, error, reFetch } = useFetch(`/user/events/details/booked/${detailsId}`);
  console.log(data);
  // console.log(data.eventId);

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


    <div className="qwir">
      <Navbar />
      <br /><br /><br /><br /><br />
      <div className="infofo" style={{ color: 'white' }}>INFO</div>
      <div className="eventcontaine" >

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
            </span>
          </div>

        </div>
        <div className="eventbrief">
          <h3>Ticket Details</h3>
        {data.tickettitle?.map(ticket=>(<TicketInfo ticket={ticket}/>))}
        </div>
        {/* {openModal && <Modal closeModal={setopenModal} eventId={id} />} */}

      </div>



      <Footer />
    </div>









    // </>
  )

}