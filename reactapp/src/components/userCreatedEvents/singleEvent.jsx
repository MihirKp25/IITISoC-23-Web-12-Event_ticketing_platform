import { Link } from "react-router-dom";
import "./singleEvent.css"
import { format } from 'date-fns'
import Business from "./businessDetails";


const searchitem = ({ details}) => {
  return (
    <>
      
        
          <div class="col-lg-4">

            <div class="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-PYJfcaNbGeylYwwFBKhnWtmHUZKtav6IQ&usqp=CAU" class="img-fluid rounded-start" alt="..." />

              <div class="card-body">
                <h5 class="card-title">{details.name}</h5>
                 <p class="card-title">{details.date}</p>
                <p class="card-title">{details.type}</p> 
              
                  <button className="btn btn-success" >Check Event Details</button>
                
                  {/* MAKE A POP UP FOR THESE    */}
                <Link to={`/user/details/${details._id}`} ><button>See DETAILS</button></Link>
              
                 



              </div>
            </div>
          </div>
     
      
    </>
  )
};

export default searchitem
  ;