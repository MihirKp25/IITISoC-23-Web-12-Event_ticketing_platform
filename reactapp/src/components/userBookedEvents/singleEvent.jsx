import { Link } from "react-router-dom";
import "./singleEvent.css"
import { format } from 'date-fns'
import TicketDetails from "./ticketDetails";

const searchitem = ({ details}) => {
  return (
    <>
      
        
          <div class="col-lg-4">

            <div class="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-PYJfcaNbGeylYwwFBKhnWtmHUZKtav6IQ&usqp=CAU" class="img-fluid rounded-start" alt="..." />

              <div class="card-body">
                <h5 class="card-title">{details.eventId.name}</h5>
                <p class="card-title">{details.eventId.purchaseDate}</p>
                <p class="card-title">{details.eventId.quantity}</p>
                
                
               
                  <button className="btn btn-success" >See Ticket Details</button>
                
                  {/* MAKE A POP UP FOR THESE    */}
                <TicketDetails ticketinfo={details}/>



              </div>
            </div>
          </div>
     
      
    </>
  )
};

export default searchitem
  ;