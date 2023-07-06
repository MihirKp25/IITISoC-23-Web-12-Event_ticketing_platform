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
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren,faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation} from '@fortawesome/free-solid-svg-icons';
import { useContext,  useSyncExternalStore } from "react";
import useFetch from "../../hooks/useFetch";
import TicketBook from "../../components/ticketbBook/TicketBook";
import { format } from "date-fns";
import { AuthContext } from "../../hooks/context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './businessDetails.css'

export default function Business(){

  const location=useLocation();
  const detailsId=location.pathname.split('/')[3];
  console.log(detailsId);
  // const [data,setData]=useState({})

  const { data, loading, error , reFetch} = useFetch(`/user/events/details/booked/${detailsId}`);
  console.log(data);
  // console.log(data.eventId);

  console.log(data.tickettitle)

  return(
  
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
    

    <div className="qwer">
      <Navbar />
      <br/><br/><br/><br/><br/>
      <div className="infofo" style={{color:'white'}}>INFO</div>
      <div className="eventcontaine" >
       
        <div className="eventinfo">
          <img src={a} alt="" className="eventinfoimg" />
          <div className="aboutevent">
            <div className="eventtitle" style={{textAlign:'center', marginTop:'20px', fontSize:'35px'}}><b>{data.name}</b></div><br/>
            <div className="eventorganiser" style={{textAlign:'center', marginTop:'0px', fontSize:'29px'}}><b>BY:</b> <b>NEED TO BE PASSED</b></div>
            <span className="eventcontent"><p>{data.name}</p></span>
          </div>

        </div>
        <div className="eventbrief">
          <span className="eventtitle" style={{fontSize:'37px', fontWeight:'1000', color:'rgb(233, 231, 229)'}}><b>WEB-DEVELOPMENT COURSE</b></span><br/><br/>
     
          {/* <FontAwesomeIcon icon = {faBookmark}></FontAwesomeIcon>
          <span className="childtitle"> GENRE:</span>
            <span className="childinfo">&ensp;{data.type}</span><br/>
          <FontAwesomeIcon icon = {faLocationDot}></FontAwesomeIcon>
          <span className="childtitle"> LOCATION:</span>
            <span className="childinfo">&ensp;{data.address} , {data.city} ,{data.country}</span><br/>
            <FontAwesomeIcon icon = {faLanguage}></FontAwesomeIcon>
          <span className="childtitle"> CITY:</span>
            <span className="childinfo">&ensp;{data.city}</span><br/>
          <FontAwesomeIcon icon = {faClock}></FontAwesomeIcon>
          <span className="childtitle"> DATE:</span>
            <span className="childinfo">&ensp;
             {format(data.date, "MM/dd/yyyy")} 
            </span><br/>
          <FontAwesomeIcon icon = {faPeopleArrows}></FontAwesomeIcon>
          <span className="childtitle"> ORGANISER:</span>
            <span className="childinfo">&ensp;NEED TO PASS</span><br/><br/> */}
               <p>{data.address} , {data.city},{data.country}</p>

 <p> {data.time}</p>
 <p>{data.type}</p>
 <p>{data.desc}</p>
 <p>{data.date}</p>
            <FontAwesomeIcon icon = {faMoneyBills} style={{fontSize:'30px'}}></FontAwesomeIcon>&ensp;
          <span className="eventprice" style={{marginRight:'100px', fontSize:'30px', fontWeight:'600'}}>₹ 100</span> 
          <button className="openModalBtn"  >BOOK NOW!</button>
        </div>
        {/* {openModal && <Modal closeModal={setopenModal} eventId={id} />} */}
        
      </div>
     
        
         
      <Footer/>
    </div>
  
   
  
  
  
  
  
  
  
  // </>
  )

}