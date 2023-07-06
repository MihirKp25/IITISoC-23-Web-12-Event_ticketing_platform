import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren,faPerson, faClock, faLanguage, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation, faTag} from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import a from '../../components/images/cntr4.jpg';
import useFetch from "../../hooks/useFetch"
import axios from "axios";
import { AuthContext } from '../../hooks/context/AuthContext';


export default function Modal({closeModal,eventId}) {
  const {user}=useContext(AuthContext);
  const [openOptions, setOpenOptions] = useState(false);
  const [option, setOption] = useState({
    tickets:1
  });
  const {data,error,loading}=useFetch(`/event/ticket/${eventId}`)
console.log(data);
  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  console.log(option)

  
const handleClick=async ()=>{

  try {
        const purchase= await axios.post(`/ticket/purchase/${eventId}/${data._id}`,{eventId:eventId,ticketId:data._id,ticket:option.tickets,userId:user._id});   //NOTE TO INCLUDE USER DATEILS HERE AFTER COMPLETION
        closeModal(false);
  }
 catch(err){
    console.log(err);
 }
}

  return (
    
    
    <div className="modalBackground">
      {/* <span onClick={closeModal(false)}>Close</span> */}
      <div className="modalContainer">
        <div className="title" style={{ fontWeight:'400', fontSize:'30px'}}>CONFIRM TICKET BOOKING </div>
        <span className="container">
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}><img src={a} alt="" className="modalimg" /></div>
          <span className="details"><b>Details:</b><small>  {data.totalTickets} Tickets Remaining</small></span><br/>
          <FontAwesomeIcon icon = {faBookmark}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> NAME:</b></span>
            <span className="childinfo">&ensp;{data.name}</span><br/>
          <FontAwesomeIcon icon = {faLocationDot}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> CATEGORY:</b></span>
            <span className="childinfo">&ensp;{data.type}</span><br/>
            <FontAwesomeIcon icon = {faLanguage}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> DESCRIPTION:</b></span>
            <span className="childinfo">&ensp;{data.desc}</span><br/>
          <FontAwesomeIcon icon = {faClock}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> PRICE <small>per Ticket</small> :</b></span>
            <span className="childinfo">&ensp;<b> $ {data.price}</b></span><br/>
          <FontAwesomeIcon icon = {faPeopleArrows}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> TICKET SALE ENDS:</b></span>
            <span className="childinfo">&ensp;RUKO zara sabar karo</span><br/><br/>
          <FontAwesomeIcon icon = {faTags}></FontAwesomeIcon>
          <span className="modalchildtitle"><b>SELECT NUMBER OF TICKETS:</b></span>
          
            
        </span>
        <div className="imlidli" style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'10px'}}>
        <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${option.tickets} tickets`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <div className="optionCounter">
                        <button
                          disabled={option.tickets <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("tickets", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.tickets}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("tickets", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    
                  </div>
                )}
              </div>
              <span className="modalchildtitle"><b>AMOUNT TO PAY : $ {option.tickets*data.price}</b>
         </span>
        <button className="openModalBtun" onClick={handleClick}>CONFIRM BOOKING</button>
        <button className="openModalBtun" onClick={()=>closeModal(false)}>Cancel</button></div>
      </div>
    </div>
  )
}
