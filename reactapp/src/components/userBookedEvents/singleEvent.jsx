import { Link } from "react-router-dom";
import { useState } from "react";
import "./singleEvent.css"
import { format } from 'date-fns'

import Model from './Model.jsx'
const Searchitem = ({ details }) => {
  const [openmodel, setopenmodel] = useState(false)
  return (
    <div>
      <div>


        <div class="jhabi">

          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-PYJfcaNbGeylYwwFBKhnWtmHUZKtav6IQ&usqp=CAU" className="singleeventimg" alt="..." />

            <div class="card-body">
              <div style={{ textAlign: 'center' }}><h1 class="card-title" style={{ fontSize: '25px' }}><b>{details.eventId.name}</b></h1></div><br />
              <span class="card-title">{details.purchaseDate}</span><br />
              <span class="card-title">{details.quantity}</span><br />

              {/* MAKE A POP UP FOR THESE    */}
            
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px' }}>
                <button className="openModalBtun" onClick={() => { setopenmodel(true); }} >See Ticket Details</button>
              </div>





            </div>
          </div>
        </div>



      </div>
      {openmodel && <Model closemodel={setopenmodel} ticketinfo={details} />}
    </div>
  )
};

export default Searchitem
  ;