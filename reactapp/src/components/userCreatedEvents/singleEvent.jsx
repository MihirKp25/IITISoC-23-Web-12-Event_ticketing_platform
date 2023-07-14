import { Link } from "react-router-dom";
import "./singleEvent.css"
import { format } from 'date-fns'
import Business from "./businessDetails";





const searchitem = ({ details}) => {

  const dateStart = new Date(details.date?.startDate); // Replace this with your actual date
const startDate = dateStart.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const dateEnd = new Date(details.date?.endDate); // Replace this with your actual date
const endDate = dateEnd.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

  return (
    <>
      
        
          <div class="col-lg-4">

            <div class="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-PYJfcaNbGeylYwwFBKhnWtmHUZKtav6IQ&usqp=CAU" class="img-fluid rounded-start" className="searchitemimg" alt="..." />

              <div class="card-body">
                 <h5 class="card-title"> {details.name}</h5>
                 <p class="card-title">Event Duration : {startDate} - {endDate} </p>
                 <p class="card-title">Event Ends : {details.date.startDate}</p>
                 <p class="card-title">Event Type: {details.type}</p> 
                 <p class="card-title">Event Type: {details.address}, {details.city}, {details.country}</p> 
              
           
                  {/* MAKE A POP UP FOR THESE    */}
                 <Link to={`/user/details/${details._id}`} ><button className="openModalBtn">VIEW DETAILS</button></Link>

                 <Link to={`/bookings/${details._id}`} ><button className="openModalBtn">VIEW BOOKINGS</button></Link>
              
                 



              </div>
            </div>
          </div>
     
      
    </>
  )
};

export default searchitem;