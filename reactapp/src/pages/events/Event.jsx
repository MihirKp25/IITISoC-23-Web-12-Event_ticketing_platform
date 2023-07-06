import "./Event.css";
import Footer from '../../components/footer/Footer.js'
import Modal from './Modal.jsx';
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren,faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../hooks/useFetch";
import TicketBook from "../../components/ticketbBook/TicketBook";
import a from '../../components/images/cntr4.jpg'
import { format } from "date-fns";
import { AuthContext } from "../../hooks/context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Event = () => {

  const {user}=useContext(AuthContext);
  const navigate=useHistory();
  const[openModal, setopenModal]= useState(false);
  const location=useLocation();
  const id=location.pathname.split("/")[2];
  const { data,error, loading} = useFetch(`/event/find/${id}`);
  const handleClick=()=>{
    if(user){
      setopenModal(true);
    }else{
       navigate.push("/login");
    }



  }
 
  // console.log(id);
  return (
    <div className="qwer">
      <Navbar />
      <div className="eventcontainer" >
        <div className="eventinfo">
          <img src={a} alt="" className="eventinfoimg" />
          <div className="aboutevent">
            <div className="eventtitle" style={{textAlign:'center', marginTop:'20px', fontSize:'35px'}}><b>WEB-DEVELOPMENT: A COMPLETE JOURNEY</b></div><br/>
            <div className="eventorganiser" style={{textAlign:'center', marginTop:'0px', fontSize:'29px'}}><b>BY:</b> <b>NEED TO BE PASSED</b></div>
            <span className="eventcontent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam praesentium quisquam fugiat cumque quibusdam necessitatibus illo, repellendus sapiente perspiciatis excepturi laborum amet sequi facilis accusamus architecto aliquid quaerat aliquam autem ipsum impedit deserunt quia similique. Temporibus exercitationem praesentium pariatur, totam reiciendis maxime iste commodi eligendi ab atque magni consectetur voluptates possimus. Labore corrupti voluptatibus id ipsa nostrum voluptas aut consequatur autem, beatae itaque ex nesciunt at repellendus deleniti quibusdam. Hic est, atque, magni corrupti blanditiis quae delectus quas quidem corporis perferendis optio maxime pariatur quis nostrum. Consectetur voluptate voluptatibus ipsa. Error id et numquam delectus fuga officia assumenda tempore modi.</span>
          </div>

        </div>
        <div className="eventbrief">
          <span className="eventtitle" style={{fontSize:'37px', fontWeight:'1000', color:'rgb(233, 231, 229)'}}><b>WEB-DEVELOPMENT COURSE</b></span><br/><br/>
     
          <FontAwesomeIcon icon = {faBookmark}></FontAwesomeIcon>
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
            {/* {format(data.date, "MM/dd/yyyy")} */}
            </span><br/>
          <FontAwesomeIcon icon = {faPeopleArrows}></FontAwesomeIcon>
          <span className="childtitle"> ORGANISER:</span>
            <span className="childinfo">&ensp;NEED TO PASS</span><br/><br/>
            <FontAwesomeIcon icon = {faMoneyBills} style={{fontSize:'30px'}}></FontAwesomeIcon>&ensp;
          <span className="eventprice" style={{marginRight:'100px', fontSize:'30px', fontWeight:'600'}}>₹ 100</span> 
          <button className="openModalBtn"  onClick={handleClick}>BOOK NOW!</button>
        </div>
        {openModal && <Modal closeModal={setopenModal} eventId={id} />}
        
      </div>
     
        
         
      <Footer/>
    </div>
  );
};

export default Event;