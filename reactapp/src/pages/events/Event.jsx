import "./Event.css";
import Footer from '../../components/footer/Footer.js'
import Modal from './Modal.jsx';
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../hooks/useFetch";
import TicketBook from "../../components/ticketbBook/TicketBook";
import a from '../../components/images/cntr4.jpg'
import { format } from "date-fns";
import { AuthContext } from "../../hooks/context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Event = () => {

  const { user } = useContext(AuthContext);
  const navigate = useHistory();
  const [openModal, setopenModal] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, error, loading } = useFetch(`/event/find/${id}`);
  // console.log(data);
  // console.log(data.tickettitle);
  const [displayPrice, setdisplayPrice] = useState(0);
  const [ticketIndex, setTicketIndex] = useState(0);
  const [ticket, setTicket] = useState({});
  // console.log(displayPrice);
  console.log(data.date)






  const handleClick = (event) => {
    if (user) {
      const t1=data.tickettitle[ticketIndex];
      console.log(ticketIndex);
      console.log(t1);
      setTicket(t1);
      setopenModal(true);
    } else {
      toast.warn('Please Login to Book Tickets', {
        position: toast.POSITION.TOP_CENTER
    });
    setTimeout(() => {
      navigate.push("/login");
    }, 3000); // Delay the navigation by 2000 milliseconds (2 seconds)

      // navigate.push("/login");
    }
  }

  console.log(id);
  return (<div>
    <div className="qwer">
      <Navbar />
      <ToastContainer/>
      <div className="eventcontainer" >
        <div className="eventinfo">
          <img src={a} alt="" className="eventinfoimg" />
          <div className="aboutevent">
            <div className="eventtitle" ><b>WEB-DEVELOPMENT: A COMPLETE JOURNEY</b></div><br />
            <div className="eventorganiser" ><b>BY:</b> <b>NEED TO BE PASSED</b></div>
            <span className="eventcontent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam praesentium quisquam fugiat cumque quibusdam necessitatibus illo, repellendus sapiente perspiciatis excepturi laborum amet sequi facilis accusamus architecto aliquid quaerat aliquam autem ipsum impedit deserunt quia similique. Temporibus exercitationem praesentium pariatur, totam reiciendis maxime iste commodi eligendi ab atque magni consectetur voluptates possimus. Labore corrupti voluptatibus id ipsa nostrum voluptas aut consequatur autem, beatae itaque ex nesciunt at repellendus deleniti quibusdam. Hic est, atque, magni corrupti blanditiis quae delectus quas quidem corporis perferendis optio maxime pariatur quis nostrum. Consectetur voluptate voluptatibus ipsa. Error id et numquam delectus fuga officia assumenda tempore modi.</span>
          </div>

        </div>
        <div className="eventbrief">
          <span className="eventtitle"><b>WEB-DEVELOPMENT COURSE</b></span><br /><br />

          <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
          <span className="childtitle"> GENRE:</span>
          <span className="childinfo">&ensp;{data.type}</span><br />
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <span className="childtitle"> LOCATION:</span>
          <span className="childinfo">&ensp;{data.address} , {data.city} ,{data.country}</span><br />
          <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
          <span className="childtitle"> CITY:</span>
          <span className="childinfo">&ensp;{data.city}</span><br />
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
          <span className="childtitle"> EVENT STARTS :</span>
          <span className="childinfo">&ensp;
            { data.date?.startDate }
            {/* //NOTE WHENEVER THERES A OBJECT WHITHIN A OBJECT AND ANOTHER OBJECT GIVE A QUESTION MARK SO THAT IT TAKES A NULL VALUE TOO VVVVVVVIMPPPPPPP */}
          </span><br />
          <span className="childtitle"> EVENT ENDS :</span>
          <span className="childinfo">&ensp;
            {data.date?.endDate}
          </span><br />
          <FontAwesomeIcon icon={faPeopleArrows}></FontAwesomeIcon>
          <span className="childtitle"> ORGANISER:</span>
          <span className="childinfo">&ensp;NEED TO PASS</span><br /><br />
          <FontAwesomeIcon icon={faMoneyBills} style={{ fontSize: '30px' }}></FontAwesomeIcon>&ensp;
          <span className="eventprice" style={{ marginRight: '100px', fontSize: '30px', fontWeight: '600' }}><small>per ticket</small>₹ {displayPrice}</span>
          <div>

            <span className="childtitle"> Select Ticket Type:</span>
            <select className="inputoption" id="ticketType" onMouseOver={(e) => { setdisplayPrice(e.target.value) }} onClick={(e) => {
              setdisplayPrice(e.target.value);
              setTicketIndex(e.target.selectedIndex)
            }}>
              {data.tickettitle?.map((ticket) => (
                <option key={ticket.id} className="inputoption" value={ticket.price} onClick={(e)=>{setTicket(ticket)}} >{ticket.price}</option>
              ))}
            </select>
            <button className="openModalBtn" onClick={handleClick}>BOOK NOW!</button>

          </div>
       


        </div>


        {/* IF ? NOT GIVEN FOR TICKETTITLE WE GET ERROR OF TICKETTITLE NOT DEFINED */}

        {openModal &&
          <Modal closeModal={setopenModal} eventId={id} ticketDet={ticket} />
        }
        
      </div>



      <Footer />
    </div>
    </div>
  );
};

export default Event;