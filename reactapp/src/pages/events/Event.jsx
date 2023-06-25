import "./Event.css";
import Navbar from "../../components/navbar/Navbar";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../hooks/useFetch";
import TicketBook from "../../components/ticketbBook/TicketBook";

const Event = () => {
  const location=useLocation();
  const id=location.pathname.split("/")[2];
  const { data,error, loading} = useFetch(`/event/find/${id}`);
  console.log(id);
  return (
    <div>
      <Navbar />
      <div className="displayevents">
        <img src={{}}></img>
        <span className="eventtitle">event name: {data.name}</span><br/>
        <span className="eventinfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum esse, quia earum voluptatum qui sit necessitatibus ipsa reprehenderit nisi enim inventore porro, dolorem odit ducimus sint. Cumque, delectus dignissimos?</span><br/>
        <button className="bookevent">Book tickets now!</button>
      <TicketBook eventId={id}/>
        {/* <div className="headerSearchItem"><FontAwesomeIcon icon = {faBed} className='headerIcon'/><span className='headerSearchText'>{`${options.adult}adult, ${options.children}children, ${options.room}rooms`}</span>
        </div> */}
          {/* <div className="peoplecounter" style={{marginRight:'1190px'}}>
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div> 
           </div> */}
      </div>
    </div>
  );
};

export default Event;