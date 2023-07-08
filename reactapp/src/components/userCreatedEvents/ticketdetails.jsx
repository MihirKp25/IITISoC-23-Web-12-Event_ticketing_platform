import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation } from '@fortawesome/free-solid-svg-icons';
import './businessDetails.css'


export default function TicketInfo({ticket}){
console.log(ticket)

return (<>

<div className='ticketbox'>
          <span className="eventtitle" style={{fontSize:'37px', fontWeight:'1000', color:'rgb(233, 231, 229)'}}><b>{ticket.name}</b></span><br/><br/>
     
        
<p>Price : {ticket.price}</p>
<p>Remaing TIckets : {ticket.totalTickets}</p>
<p>Ticket Type :{ticket.type}</p>
<p>Ticket Desc :{ticket.desc}</p>
<p>Ticket Sale starts :{ticket.date?.startDate} ends : {ticket.date?.startDate}</p> 
       
        </div>







</>)



}