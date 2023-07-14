import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation } from '@fortawesome/free-solid-svg-icons';
import './businessDetails.css'


export default function TicketInfo({ticket}){
        const dateStart = new Date(ticket.date?.startDate); // Replace this with your actual date
        const startDate = dateStart.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const dateEnd = new Date(ticket.date?.endDate); // Replace this with your actual date
        const endDate = dateEnd.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
console.log(ticket)

return (<>

<div className='ticketbox'>
          <span className="eventtitle" style={{fontSize:'37px', fontWeight:'1000', color:'rgb(233, 231, 229)'}}><b>{ticket.name}</b></span><br/><br/>
     
        
<p>Price : {ticket.price}</p>
<p>Remaing TIckets : {ticket.totalTickets}</p>
<p>Ticket Type :{ticket.type}</p>
<p>Ticket Desc :{ticket.desc}</p>
<p>Ticket Sale starts :{startDate} ends : {endDate}</p> 
       
        </div>







</>)



}