//import "./createEvent.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { EventInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import NewTicket from "../createTicket/createTicket";

const NewEvent = () => {
  // const [files, setFiles] = useState("");
  const [responseValue, setResponseValue] = useState(null);
  const [info, setInfo] = useState({});
  const [ticketModal, setTicketModal] = useState(false);
  const [tickets, setTickets] = useState([]);

  const { data, loading, error } = useFetch("/event");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

    // const handleSelect = (e) => {
    //   const value = Array.from(
    //     e.target.selectedOptions,
    //     (option) => option.value
    //   );
    //   setTickets(value);
    // };

  // console.log(value)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
     const newevent={...info};
      console.log(info);
      const response=await axios.post("/event", newevent);
      setResponseValue(response.data);
      console.log(response.data);
      setTicketModal(true);
      }
       catch (err) { console.log(err) }
  };
 
  return (
    <div className="new">
      <Navbar />

      <div className="newContainer" style={{margin:100}}>
        <div className="top">
          <h1>Add New Event</h1>
        </div>

        <div className="right">
          <form>

            {EventInputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  id={input.id}
                  onChange={handleChange}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </div>
            ))}
            <div className="formInput">
              <label>Featured</label>
              <select id="featured" onChange={handleChange}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
            <div className="formInput">
              <label>Free or Paid</label>
              <select id="freeOrPaid" onChange={handleChange}>
                <option value={true}>Free</option>
                <option value={false}>Paid</option>
              </select>
            </div>
            {/* <div className="selectTickets">
                <label>Tickets</label>
                <select id="tickets" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((ticket) => (
                        <option key={ticket._id} value={ticket._id}>
                          {ticket.title}
                        </option>
                      ))}
                </select>
              </div> */}

            <button onClick={handleClick}>Move to Create Ticket</button>
          </form>
        </div>
      </div>
      {ticketModal && 
      <NewTicket infoEvent={responseValue}/>
      }
    </div>

  );
};

export default NewEvent;














/*import "./createEvent.css"
import Datepick from "./datePicker"
import Image from "./image"
import { useState } from "react";
import axios from "axios";

export default function CreateEvent() {

     const [name, setName]=useState("");
     const [type, settype]=useState("");
     const [address, setaddress]=useState("");
     const [city, setCity]=useState("");
     const [country, setCountry]=useState("");
     const [date, setDate]=useState("");
     const [time, setTime]=useState("");
     const [ticket, setTicket]=useState("");
     const [desc, setDesc]=useState("");
     const [featured, setFeatured]=useState(false);
     const [contact, setContact]=useState("");
     const [price, setPrice]=useState("");
    
    
        
    async function submit(e){
      e.preventDefault();
      try{
           await axios.post("http://localhost/3000/event", {name, type,address, city, country,date, time,ticket,desc,featured,contact});
      }
      catch(e){
         console.log(e)
      }
    }


  return <>
    <div className="carrier">

      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">

            <h1 className="lsitem">Create Event</h1>
            
             <form method="POST">
             <div className="lsitem">
              <label >Title</label>
              <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" id="title"  />

            </div>
            <div className="lsitem">
              <label
              >Type</label>
              <input type="text" onChange={(e)=>{settype(e.target.value)}} name="type" id="type"/>

            </div>
            <div className="lsitem">
              <label
              >time</label>
              <input type="time" onChange={(e)=>{setTime(e.target.value)}} name="time" id="time" />

            </div>
            <div className="lsitem">
              <label
              >Date</label>
              <Datepick/>

            </div>
            
              <div className="lsitem">
                <label >City</label>
                <input type="text" onChange={(e)=>{setCity(e.target.value)}} name="city" id="city"/>
              </div>
              <div className="lsitem">
                <label >Country</label>
                <input type="text" onChange={(e)=>{setCountry(e.target.value)}} name="country" id="country"/>
              </div>
              <div className="lsitem">
                <label >Address</label>
                <input type="text" onChange={(e)=>{setaddress(e.target.value)}} name="address" id="address" /> 
               </div>
              <div className="lsitem">
                <label >Price</label>
                <input type="number" onChange={(e)=>{setPrice(e.target.value)}} name="price" id="price"/>

              </div>
              <div className="lsitem">
                <label >Cover Image</label>
                <Image />
              </div>
              <div className="lsitem">
                <label >Description</label>
                <input type="text" onChange={(e)=>{setDesc(e.target.value)}} name="desc" id="desc"/>

              </div>
              <div className="lsitem">
                <label >Add tickets</label>
                <input type="number" onChange={(e)=>{setTicket(e.target.value)}} name="tickets" id="ticket"/>

              </div>
              <div className="lsitem">
                <label >featured</label>
                <input type="checkbox" onChange={(e)=>{setFeatured(e.target.value)}} name="featured" id="featured"/>

              </div>
              <div className="lsitem">
                <label >Contact us</label>
                <input type="email" onChange={(e)=>{setContact(e.target.value)}} name="contact" id="contact"/>

              </div>
              <input type="submit"> Create Event</input>
             </form>
            </div>
          </div>
        </div>
      </div>
    
  </>

}*/