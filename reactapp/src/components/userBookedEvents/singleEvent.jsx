import { Link } from "react-router-dom";
import { useState } from "react";
import "./singleEvent.css"
import { format } from 'date-fns'

import Model from './Model.jsx'
const Searchitem = ({ details }) => {
  const [openmodel, setopenmodel] = useState(false)
  return (
    <>
      
      <div class = "col-lg-4">

        

          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-PYJfcaNbGeylYwwFBKhnWtmHUZKtav6IQ&usqp=CAU" className="searchitemimg" alt="..." />

            <div class="card-body" id = "se2">
              <div ><h1 ><b className="card-title">{details.eventId.name}</b></h1></div>
              <span class="card-title">{details.purchaseDate}</span><br/>
              <span class="card-title"  id = "se1">{details.quantity}</span>

              {/* MAKE A POP UP FOR THESE    */}
            
              <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <button id = "se3"className="openModalBtn" onClick={() => { setopenmodel(true); }} >SEE DETAILS</button>
              </div>





            </div>
          </div>
        



      
      {openmodel && <Model closemodel={setopenmodel} ticketinfo={details} />}
      </div>
    </>
  )
};

export default Searchitem
  ;